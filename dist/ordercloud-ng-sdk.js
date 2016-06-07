(function() {
    'use strict';

    orderCloud.$inject = ["$q", "$resource", "$cookieStore", "appname", "apiurl", "authurl", "ocscope", "clientid"];
    angular.module('orderCloud.sdk', ['ngResource', 'ngCookies'])
        .factory('OrderCloud', orderCloud);

    function orderCloud($q, $resource, $cookieStore, appname, apiurl, authurl, ocscope, clientid) {
        var impersonating = false;
        return {
            'As': As,
            'Auth': Auth(),
            'BuyerID': BuyerID(),

            'Addresses': Addresses(),
            'AdminUsers': AdminUsers(),
            'ApprovalRules': ApprovalRules(),
            'Buyers': Buyers(),
            'Categories': Categories(),
            'CostCenters': CostCenters(),
            'Coupons': Coupons(),
            'CreditCards': CreditCards(),
            'EmailTemplates': EmailTemplates(),
            'Files': Files(),
            'SecurityProfiles': SecurityProfiles(),
            'Payments': Payments(),
            'Specs': Specs(),
            'UserGroups': UserGroups(),
            'LineItems': LineItems(),
            'Me': Me(),
            'Orders': Orders(),
            'PasswordResets': PasswordResets(),
            'PriceSchedules': PriceSchedules(),
            'Shipments': Shipments(),
            'SpendingAccounts': SpendingAccounts(),
            'Products': Products(),
            'Users': Users()
        };

        function As() {
            impersonating = true;

            if (typeof arguments[0] == 'string') {
                Auth().SetImpersonationToken(arguments[0]);
            }

            return this;
        }

        function Auth() {
            return {
                'GetToken': _getToken,
                'RefreshToken': _refreshToken,
                'SetToken': _setToken,
                'RemoveToken': _removeToken,
                'SetImpersonationToken': _setImpersonationToken,
                'RemoveImpersonationToken': _removeImpersonationToken,
                'ReadToken': _readToken
            };

            function _getToken(credentials) {
                var params = {
                    scope: ocscope,
                    client_id: clientid
                };

                switch (typeof credentials) {
                    case 'string':
                        params.grant_type = 'client_credentials';
                        params.client_secret = credentials;
                        break;
                    case 'object':
                        params.grant_type = 'password';
                        params.username = credentials.Username;
                        params.password = credentials.Password;
                        break;
                    default:
                        break;
                }

                return $resource(authurl, {}, {
                    login: {
                        method: 'POST'
                    }
                }).login($.param(params)).$promise;
            }

            function _refreshToken(refresh_token) {
                var params = {
                    client_id: clientid,
                    grant_type: 'refresh_token',
                    scope: ocscope,
                    refresh_token: refresh_token
                };
                return $resource(authurl, {}, {
                    login: {
                        method: 'POST'
                    }
                }).login($.param(params)).$promise;
            }

            function _setToken(token) {
                $cookieStore.put(appname + '.token', token);
            }

            function _removeToken() {
                $cookieStore.remove(appname + '.token')
            }

            function _setImpersonationToken(token) {
                $cookieStore.put(appname + '.impersonation.token', token);
            }

            function _removeImpersonationToken() {
                $cookieStore.remove(appname + '.impersonation.token')
            }

            function _readToken() {
                return $cookieStore.get(appname + (impersonating ? '.impersonation' : '') + '.token');
            }

        }

        function BuyerID() {
            return {
                'Get': _get,
                'Set': _set
            };

            function _get() {
                return $cookieStore.get(appname + '.buyerID');
            }

            function _set(value) {
                $cookieStore.put(appname + '.buyerID', value);
            }
        }

        function Addresses() {
            return {
                'List': _list,
                'Get': _get,
                'Create': _create,
                'Update': _update,
                'Patch': _patch,
                'Delete': _delete,
                'ListAssignments': _listassignments,
                'DeleteAssignment': _deleteassignment,
                'SaveAssignment': _saveassignment
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/addresses', {
                    'buyerID': BuyerID().Get(),
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(addressID) {
                if (!addressID) {
                    var errMessage = 'addressID is a required field for OrderCloud.Addresses.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/addresses/:addressID', {
                    'buyerID': BuyerID().Get(),
                    'addressID': addressID
                }, null);
            }

            function _create(address) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/addresses', {
                    'buyerID': BuyerID().Get()
                }, address);
            }

            function _update(addressID, address) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/addresses/:addressID', {
                    'buyerID': BuyerID().Get(),
                    'addressID': addressID
                }, address);
            }

            function _patch(addressID, address) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/addresses/:addressID', {
                    'buyerID': BuyerID().Get(),
                    'addressID': addressID
                }, address);
            }

            function _delete(addressID, overrideOrderConflict) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/addresses/:addressID', {
                    'buyerID': BuyerID().Get(),
                    'addressID': addressID,
                    'overrideOrderConflict': overrideOrderConflict
                }, null);
            }

            function _listassignments(addressID, userID, userGroupID, level, isShipping, isBilling, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/addresses/assignments', {
                    'buyerID': BuyerID().Get(),
                    'addressID': addressID,
                    'userID': userID,
                    'userGroupID': userGroupID,
                    'level': level,
                    'isShipping': isShipping,
                    'isBilling': isBilling,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _deleteassignment(addressID, userID, userGroupID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/addresses/:addressID/assignments', {
                    'buyerID': BuyerID().Get(),
                    'addressID': addressID,
                    'userID': userID,
                    'userGroupID': userGroupID
                }, null);
            }

            function _saveassignment(assignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/addresses/assignments', {
                    'buyerID': BuyerID().Get()
                }, assignment);
            }
        }

        function AdminUsers() {
            return {
                'Get': _get,
                'Update': _update,
                'Patch': _patch,
                'List': _list,
                'Delete': _delete,
                'Create': _create
            };

            function _get(userID) {
                if (!userID) {
                    var errMessage = 'userID is a required field for OrderCloud.AdminUsers.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/adminusers/:userID', {
                    'userID': userID
                }, null);
            }

            function _update(userID, user) {
                return makeApiCall('PUT', '/v1/adminusers/:userID', {
                    'userID': userID
                }, user);
            }

            function _patch(userID, user) {
                return makeApiCall('PATCH', '/v1/adminusers/:userID', {
                    'userID': userID
                }, user);
            }

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/adminusers', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _delete(userID) {
                return makeApiCall('DELETE', '/v1/adminusers/:userID', {
                    'userID': userID
                }, null);
            }

            function _create(user) {
                return makeApiCall('POST', '/v1/adminusers', null, user);
            }
        }

        function ApprovalRules() {
            return {
                'List': _list,
                'Get': _get,
                'Create': _create,
                'Update': _update,
                'Patch': _patch,
                'Delete': _delete
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/approvalrules', {
                    'buyerID': BuyerID().Get(),
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(approvalRuleID) {
                if (!approvalRuleID) {
                    var errMessage = 'approvalRuleID is a required field for OrderCloud.ApprovalRules.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', {
                    'buyerID': BuyerID().Get(),
                    'approvalRuleID': approvalRuleID
                }, null);
            }

            function _create(approvalRule) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/approvalrules', {
                    'buyerID': BuyerID().Get()
                }, approvalRule);
            }

            function _update(approvalRuleID, approvalRule) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', {
                    'buyerID': BuyerID().Get(),
                    'approvalRuleID': approvalRuleID
                }, approvalRule);
            }

            function _patch(approvalRuleID, partialApprovalRule) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', {
                    'buyerID': BuyerID().Get(),
                    'approvalRuleID': approvalRuleID
                }, partialApprovalRule);
            }

            function _delete(approvalRuleID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', {
                    'buyerID': BuyerID().Get(),
                    'approvalRuleID': approvalRuleID
                }, null);
            }
        }

        function Buyers() {
            return {
                'List': _list,
                'Get': _get,
                'Delete': _delete,
                'Create': _create,
                'Update': _update
            };

            function _list(search, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers', {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _get(buyerID) {
                return makeApiCall('GET', '/v1/buyers/:buyerID', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get()
                }, null);
            }

            function _delete(buyerID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get()
                }, null);
            }

            function _create(company) {
                return makeApiCall('POST', '/v1/buyers', null, company);
            }

            function _update(company, buyerID) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get()
                }, company);
            }
        }

        function Categories() {
            return {
                'List': _list,
                'ListChildren': _listchildren,
                'Get': _get,
                'Create': _create,
                'Update': _update,
                'Delete': _delete,
                'Patch': _patch,
                'ListProductAssignments': _listproductassignments,
                'SaveProductAssignment': _saveproductassignment,
                'DeleteProductAssignment': _deleteproductassignment,
                'ListAssignments': _listassignments,
                'DeleteAssignment': _deleteassignment,
                'SaveAssignment': _saveassignment
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters, parentID, depth) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/categories', {
                    'buyerID': BuyerID().Get(),
                    'listArgs': listArgs,
                    'parentID': parentID,
                    'depth': depth
                }, listArgs);
            }

            function _listchildren(parentID, search, depth, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/categories/:parentID/categories', {
                    'buyerID': BuyerID().Get(),
                    'parentID': parentID,
                    'search': search,
                    'depth': depth,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _get(categoryID) {
                if (!categoryID) {
                    var errMessage = 'categoryID is a required field for OrderCloud.Categories.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/categories/:categoryID', {
                    'buyerID': BuyerID().Get(),
                    'categoryID': categoryID
                }, null);
            }

            function _create(category) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/categories', {
                    'buyerID': BuyerID().Get()
                }, category);
            }

            function _update(categoryID, category) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/categories/:categoryID', {
                    'buyerID': BuyerID().Get(),
                    'categoryID': categoryID
                }, category);
            }

            function _delete(categoryID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID', {
                    'buyerID': BuyerID().Get(),
                    'categoryID': categoryID
                }, null);
            }

            function _patch(categoryID, category) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/categories/:categoryID', {
                    'buyerID': BuyerID().Get(),
                    'categoryID': categoryID
                }, category);
            }

            function _listproductassignments(categoryID, productID, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/categories/productassignments', {
                    'buyerID': BuyerID().Get(),
                    'categoryID': categoryID,
                    'productID': productID,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _saveproductassignment(productAssignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/categories/productassignments', {
                    'buyerID': BuyerID().Get()
                }, productAssignment);
            }

            function _deleteproductassignment(categoryID, productID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID/productassignments/:productID', {
                    'buyerID': BuyerID().Get(),
                    'categoryID': categoryID,
                    'productID': productID
                }, null);
            }

            function _listassignments(categoryID, userID, userGroupID, level, search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/categories/assignments', {
                    'buyerID': BuyerID().Get(),
                    'categoryID': categoryID,
                    'userID': userID,
                    'userGroupID': userGroupID,
                    'level': level,
                    'listArgs': listArgs
                }, listArgs);
            }

            function _deleteassignment(categoryID, userID, userGroupID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID/assignments', {
                    'buyerID': BuyerID().Get(),
                    'categoryID': categoryID,
                    'userID': userID,
                    'userGroupID': userGroupID
                }, null);
            }

            function _saveassignment(categoryAssignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/categories/assignments', {
                    'buyerID': BuyerID().Get()
                }, categoryAssignment);
            }
        }

        function CostCenters() {
            return {
                'List': _list,
                'Get': _get,
                'Create': _create,
                'Update': _update,
                'Delete': _delete,
                'ListAssignments': _listassignments,
                'DeleteAssignment': _deleteassignment,
                'SaveAssignment': _saveassignment
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters', {
                    'buyerID': BuyerID().Get(),
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(costCenterID) {
                if (!costCenterID) {
                    var errMessage = 'costCenterID is a required field for OrderCloud.CostCenters.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters/:costCenterID', {
                    'buyerID': BuyerID().Get(),
                    'costCenterID': costCenterID
                }, null);
            }

            function _create(costCenter) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/costcenters', {
                    'buyerID': BuyerID().Get()
                }, costCenter);
            }

            function _update(costCenterID, costCenter) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/costcenters/:costCenterID', {
                    'buyerID': BuyerID().Get(),
                    'costCenterID': costCenterID
                }, costCenter);
            }

            function _delete(costCenterID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/costcenters/:costCenterID', {
                    'buyerID': BuyerID().Get(),
                    'costCenterID': costCenterID
                }, null);
            }

            function _listassignments(costCenterID, userID, userGroupID, level, search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters/assignments', {
                    'buyerID': BuyerID().Get(),
                    'costCenterID': costCenterID,
                    'userID': userID,
                    'userGroupID': userGroupID,
                    'level': level,
                    'listArgs': listArgs
                }, listArgs);
            }

            function _deleteassignment(costCenterID, userID, userGroupID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/costcenters/:costCenterID/assignments', {
                    'buyerID': BuyerID().Get(),
                    'costCenterID': costCenterID,
                    'userID': userID,
                    'userGroupID': userGroupID
                }, null);
            }

            function _saveassignment(assignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/costcenters/assignments', {
                    'buyerID': BuyerID().Get()
                }, assignment);
            }
        }

        function Coupons() {
            return {
                'List': _list,
                'Get': _get,
                'Create': _create,
                'Update': _update,
                'Delete': _delete,
                'ListProductAssignments': _listproductassignments,
                'SaveProductAssignment': _saveproductassignment,
                'DeleteProductAssignment': _deleteproductassignment,
                'ListCategoryAssignments': _listcategoryassignments,
                'SaveCategoryAssignment': _savecategoryassignment,
                'DeleteCategoryAssignment': _deletecategoryassignment,
                'ListAssignments': _listassignments,
                'SaveAssignment': _saveassignment,
                'DeleteAssignment': _deleteassignment
            };

            function _list(search, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/coupons', {
                    'buyerID': BuyerID().Get(),
                    'search': search,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _get(couponID) {
                if (!couponID) {
                    var errMessage = 'couponID is a required field for OrderCloud.Coupons.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/coupons/:couponID', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID
                }, null);
            }

            function _create(coupon) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/coupons', {
                    'buyerID': BuyerID().Get()
                }, coupon);
            }

            function _update(couponID, coupon) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/coupons/:couponID', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID
                }, coupon);
            }

            function _delete(couponID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/coupons/:couponID', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID
                }, null);
            }

            function _listproductassignments(couponID, productID, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/coupons/productassignments', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID,
                    'productID': productID,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _saveproductassignment(productAssignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/coupons/productassignments', {
                    'buyerID': BuyerID().Get()
                }, productAssignment);
            }

            function _deleteproductassignment(couponID, productID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/coupons/:couponID/productassignments/:productID', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID,
                    'productID': productID
                }, null);
            }

            function _listcategoryassignments(couponID, categoryID, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/coupons/categoryassignments', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID,
                    'categoryID': categoryID,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _savecategoryassignment(categoryAssignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/coupons/categoryassignments', {
                    'buyerID': BuyerID().Get()
                }, categoryAssignment);
            }

            function _deletecategoryassignment(couponID, categoryID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/coupons/:couponID/categoryassignments/:categoryID', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID,
                    'categoryID': categoryID
                }, null);
            }

            function _listassignments(couponID, userID, userGroupID, level, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/coupons/assignments', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID,
                    'userID': userID,
                    'userGroupID': userGroupID,
                    'level': level,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _saveassignment(assignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/coupons/assignments', {
                    'buyerID': BuyerID().Get()
                }, assignment);
            }

            function _deleteassignment(couponID, userID, userGroupID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/coupons/:couponID/assignments', {
                    'buyerID': BuyerID().Get(),
                    'couponID': couponID,
                    'userID': userID,
                    'userGroupID': userGroupID
                }, null);
            }
        }

        function CreditCards() {
            return {
                'List': _list,
                'Get': _get,
                'Create': _create,
                'Update': _update,
                'Patch': _patch,
                'Delete': _delete,
                'ListAssignments': _listassignments,
                'SaveAssignment': _saveassignment,
                'DeleteAssignment': _deleteassignment
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards', {
                    'buyerID': BuyerID().Get(),
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(creditCardID) {
                if (!creditCardID) {
                    var errMessage = 'creditCardID is a required field for OrderCloud.CreditCards.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards/:creditCardID', {
                    'buyerID': BuyerID().Get(),
                    'creditCardID': creditCardID
                }, null);
            }

            function _create(card) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/creditcards', {
                    'buyerID': BuyerID().Get()
                }, card);
            }

            function _update(creditCardID, card) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/creditcards/:creditCardID', {
                    'buyerID': BuyerID().Get(),
                    'creditCardID': creditCardID
                }, card);
            }

            function _patch(creditCardID, card) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/creditcards/:creditCardID', {
                    'buyerID': BuyerID().Get(),
                    'creditCardID': creditCardID
                }, card);
            }

            function _delete(creditCardID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/creditcards/:creditCardID', {
                    'buyerID': BuyerID().Get(),
                    'creditCardID': creditCardID
                }, null);
            }

            function _listassignments(creditCardID, userID, userGroupID, level, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards/assignments', {
                    'buyerID': BuyerID().Get(),
                    'creditCardID': creditCardID,
                    'userID': userID,
                    'userGroupID': userGroupID,
                    'level': level,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _saveassignment(assignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/creditcards/assignments', {
                    'buyerID': BuyerID().Get()
                }, assignment);
            }

            function _deleteassignment(creditCardID, userID, userGroupID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/creditcards/:creditCardID/assignments', {
                    'buyerID': BuyerID().Get(),
                    'creditCardID': creditCardID,
                    'userID': userID,
                    'userGroupID': userGroupID
                }, null);
            }
        }

        function EmailTemplates() {
            return {
                'Get': _get,
                'Update': _update,
                'Patch': _patch,
                'ResetToDefault': _resettodefault
            };

            function _get(emailTemplateType) {
                if (!emailTemplateType) {
                    var errMessage = 'emailTemplateType is a required field for OrderCloud.EmailTemplates.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', {
                    'buyerID': BuyerID().Get(),
                    'emailTemplateType': emailTemplateType
                }, null);
            }

            function _update(emailTemplateType, emailTemplate) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', {
                    'buyerID': BuyerID().Get(),
                    'emailTemplateType': emailTemplateType
                }, emailTemplate);
            }

            function _patch(emailTemplateType, emailTemplate) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', {
                    'buyerID': BuyerID().Get(),
                    'emailTemplateType': emailTemplateType
                }, emailTemplate);
            }

            function _resettodefault(emailTemplateType) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', {
                    'buyerID': BuyerID().Get(),
                    'emailTemplateType': emailTemplateType
                }, null);
            }
        }

        function Files() {
            return {
                'List': _list,
                'Get': _get,
                'PostFileData': _postfiledata
            };

            function _list(page, pageSize) {
                return makeApiCall('GET', '/v1/files', {
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _get(fileID) {
                if (!fileID) {
                    var errMessage = 'fileID is a required field for OrderCloud.Files.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/files/:fileID', {
                    'fileID': fileID
                }, null);
            }

            function _postfiledata(filename) {
                return makeApiCall('POST', '/v1/files', {
                    'filename': filename
                }, null);
            }
        }

        function SecurityProfiles() {
            return {
                'List': _list,
                'Get': _get
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/SecurityProfiles', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(securityProfileID) {
                if (!securityProfileID) {
                    var errMessage = 'securityProfileID is a required field for OrderCloud.SecurityProfiles.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/SecurityProfiles/:securityProfileID', {
                    'securityProfileID': securityProfileID
                }, null);
            }
        }

        function Payments() {
            return {
                'Get': _get,
                'List': _list,
                'Create': _create,
                'Update': _update,
                'Patch': _patch,
                'Delete': _delete,
                'CreateTransaction': _createtransaction,
                'UpdateTransaction': _updatetransaction,
                'PatchTransaction': _patchtransaction,
                'DeleteTransacion': _deletetransacion
            };

            function _get(orderID, paymentID) {
                if (!orderID || !paymentID) {
                    var errMessage = 'orderID and paymentID are required fields for OrderCloud.Payments.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'paymentID': paymentID
                }, null);
            }

            function _list(orderID, search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/payments', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'listArgs': listArgs
                }, listArgs);
            }

            function _create(orderID, payment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/payments', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID
                }, payment);
            }

            function _update(orderID, paymentID, payment) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'paymentID': paymentID
                }, payment);
            }

            function _patch(orderID, paymentID, partialPayment) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'paymentID': paymentID
                }, partialPayment);
            }

            function _delete(orderID, paymentID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'paymentID': paymentID
                }, null);
            }

            function _createtransaction(orderID, paymentID, transaction) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID/transactions', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'paymentID': paymentID
                }, transaction);
            }

            function _updatetransaction(orderID, paymentID, transactionID, transaction) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID/transactions/:transactionID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'paymentID': paymentID,
                    'transactionID': transactionID
                }, transaction);
            }

            function _patchtransaction(orderID, paymentID, transactionID, partialTransaction) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID/transactions/:transactionID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'paymentID': paymentID,
                    'transactionID': transactionID
                }, partialTransaction);
            }

            function _deletetransacion(orderID, paymentID, transactionID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID/transactions/:transactionID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'paymentID': paymentID,
                    'transactionID': transactionID
                }, null);
            }
        }

        function Specs() {
            return {
                'List': _list,
                'Get': _get,
                'Patch': _patch,
                'Update': _update,
                'Create': _create,
                'Delete': _delete,
                'ListProductAssignments': _listproductassignments,
                'DeleteProductAssignment': _deleteproductassignment,
                'SaveProductAssignment': _saveproductassignment,
                'CreateOption': _createoption,
                'ListOptions': _listoptions,
                'UpdateOption': _updateoption,
                'PatchOption': _patchoption,
                'GetOption': _getoption,
                'DeleteOption': _deleteoption
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/specs', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(specID) {
                if (!specID) {
                    var errMessage = 'specID is a required field for OrderCloud.Specs.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/specs/:specID', {
                    'specID': specID
                }, null);
            }

            function _patch(specID, spec) {
                return makeApiCall('PATCH', '/v1/specs/:specID', {
                    'specID': specID
                }, spec);
            }

            function _update(specID, spec) {
                return makeApiCall('PUT', '/v1/specs/:specID', {
                    'specID': specID
                }, spec);
            }

            function _create(spec) {
                return makeApiCall('POST', '/v1/specs', null, spec);
            }

            function _delete(specID) {
                return makeApiCall('DELETE', '/v1/specs/:specID', {
                    'specID': specID
                }, null);
            }

            function _listproductassignments(specID, productID, page, pageSize) {
                return makeApiCall('GET', '/v1/specs/productassignments', {
                    'specID': specID,
                    'productID': productID,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _deleteproductassignment(specID, productID) {
                return makeApiCall('DELETE', '/v1/specs/:specID/productassignments/:productID', {
                    'specID': specID,
                    'productID': productID
                }, null);
            }

            function _saveproductassignment(productAssignment) {
                return makeApiCall('POST', '/v1/specs/productassignments', null, productAssignment);
            }

            function _createoption(specID, option) {
                return makeApiCall('POST', '/v1/specs/:specID/options', {
                    'specID': specID
                }, option);
            }

            function _listoptions(specID, search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/specs/:specID/options', {
                    'specID': specID,
                    'listArgs': listArgs
                }, listArgs);
            }

            function _updateoption(specID, optionID, option) {
                return makeApiCall('PUT', '/v1/specs/:specID/options/:optionID', {
                    'specID': specID,
                    'optionID': optionID
                }, option);
            }

            function _patchoption(specID, optionID, option) {
                return makeApiCall('PATCH', '/v1/specs/:specID/options/:optionID', {
                    'specID': specID,
                    'optionID': optionID
                }, option);
            }

            function _getoption(specID, optionID) {
                return makeApiCall('GET', '/v1/specs/:specID/options/:optionID', {
                    'specID': specID,
                    'optionID': optionID
                }, null);
            }

            function _deleteoption(specID, optionID) {
                return makeApiCall('DELETE', '/v1/specs/:specID/options/:optionID', {
                    'specID': specID,
                    'optionID': optionID
                }, null);
            }
        }

        function UserGroups() {
            return {
                'List': _list,
                'Get': _get,
                'Update': _update,
                'Patch': _patch,
                'Create': _create,
                'Delete': _delete,
                'ListUserAssignments': _listuserassignments,
                'DeleteUserAssignment': _deleteuserassignment,
                'SaveUserAssignment': _saveuserassignment
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups', {
                    'buyerID': BuyerID().Get(),
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(userGroupID) {
                if (!userGroupID) {
                    var errMessage = 'userGroupID is a required field for OrderCloud.UserGroups.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups/:userGroupID', {
                    'buyerID': BuyerID().Get(),
                    'userGroupID': userGroupID
                }, null);
            }

            function _update(userGroupID, group) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/usergroups/:userGroupID', {
                    'buyerID': BuyerID().Get(),
                    'userGroupID': userGroupID
                }, group);
            }

            function _patch(userGroupID, group) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/usergroups/:userGroupID', {
                    'buyerID': BuyerID().Get(),
                    'userGroupID': userGroupID
                }, group);
            }

            function _create(group) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/usergroups', {
                    'buyerID': BuyerID().Get()
                }, group);
            }

            function _delete(userGroupID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/usergroups/:userGroupID', {
                    'buyerID': BuyerID().Get(),
                    'userGroupID': userGroupID
                }, null);
            }

            function _listuserassignments(userGroupID, userID, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups/assignments', {
                    'buyerID': BuyerID().Get(),
                    'userGroupID': userGroupID,
                    'userID': userID,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _deleteuserassignment(userGroupID, userID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/usergroups/:userGroupID/assignments/:userID', {
                    'buyerID': BuyerID().Get(),
                    'userGroupID': userGroupID,
                    'userID': userID
                }, null);
            }

            function _saveuserassignment(userGroupAssignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/usergroups/assignments', {
                    'buyerID': BuyerID().Get()
                }, userGroupAssignment);
            }
        }

        function LineItems() {
            return {
                'Get': _get,
                'List': _list,
                'Create': _create,
                'Update': _update,
                'Patch': _patch,
                'Delete': _delete,
                'SetShippingAddress': _setshippingaddress,
                'PatchShippingAddress': _patchshippingaddress
            };

            function _get(orderID, lineItemID) {
                if (!orderID || !lineItemID) {
                    var errMessage = 'orderID and lineItemID are required fields for OrderCloud.LineItems.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'lineItemID': lineItemID
                }, null);
            }

            function _list(orderID, search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/lineitems', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'listArgs': listArgs
                }, listArgs);
            }

            function _create(orderID, lineItem) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/lineitems', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID
                }, lineItem);
            }

            function _update(orderID, lineItemID, lineItem) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'lineItemID': lineItemID
                }, lineItem);
            }

            function _patch(orderID, lineItemID, partialLineItem) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'lineItemID': lineItemID
                }, partialLineItem);
            }

            function _delete(orderID, lineItemID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'lineItemID': lineItemID
                }, null);
            }

            function _setshippingaddress(orderID, lineItemID, address) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID/shipto', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'lineItemID': lineItemID
                }, address);
            }

            function _patchshippingaddress(orderID, lineItemID, address) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID/shipto', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'lineItemID': lineItemID
                }, address);
            }
        }

        function Me() {
            return {
                'Get': _get,
                'Update': _update,
                'Patch': _patch,
                'ListCostCenters': _listcostcenters,
                'ListUserGroups': _listusergroups,
                'ListAddresses': _listaddresses,
                'CreateAddress': _createaddress,
                'GetAddress': _getaddress,
                'UpdateAddress': _updateaddress,
                'PatchAddress': _patchaddress,
                'DeleteAddress': _deleteaddress,
                'CreateCreditCard': _createcreditcard,
                'ListCreditCards': _listcreditcards,
                'GetCreditCard': _getcreditcard,
                'UpdateCreditCard': _updatecreditcard,
                'PatchCreditCard': _patchcreditcard,
                'DeleteCreditCard': _deletecreditcard,
                'ListCategories': _listcategories,
                'ListSubcategories': _listsubcategories,
                'ListProducts': _listproducts,
                'GetProduct': _getproduct,
                'ListSpecs': _listspecs,
                'GetSpec': _getspec,
                'ListOutgoingOrders': _listoutgoingorders,
                'ListIncomingOrders': _listincomingorders,
                'GetOrder': _getorder,
                'CreateFromTempUser': _createfromtempuser
            };

            function _get() {
                return makeApiCall('GET', '/v1/me', null, null);
            }

            function _update(user) {
                return makeApiCall('PUT', '/v1/me', null, user);
            }

            function _patch(user) {
                return makeApiCall('PATCH', '/v1/me', null, user);
            }

            function _listcostcenters(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/costcenters', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _listusergroups(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/usergroups', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _listaddresses(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/addresses', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _createaddress(address) {
                return makeApiCall('POST', '/v1/me/addresses', null, address);
            }

            function _getaddress(addressID) {
                return makeApiCall('GET', '/v1/me/addresses/:addressID', {
                    'addressID': addressID
                }, null);
            }

            function _updateaddress(addressID, address) {
                return makeApiCall('PUT', '/v1/me/addresses/:addressID', {
                    'addressID': addressID
                }, address);
            }

            function _patchaddress(addressID, address) {
                return makeApiCall('PATCH', '/v1/me/addresses/:addressID', {
                    'addressID': addressID
                }, address);
            }

            function _deleteaddress(addressID, overrideOrderConflict) {
                return makeApiCall('DELETE', '/v1/me/addresses/:addressID', {
                    'addressID': addressID,
                    'overrideOrderConflict': overrideOrderConflict
                }, null);
            }

            function _createcreditcard(creditCard) {
                return makeApiCall('POST', '/v1/me/creditcards', null, creditCard);
            }

            function _listcreditcards(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/creditcards', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _getcreditcard(creditcardID) {
                return makeApiCall('GET', '/v1/me/creditcards/:creditcardID', {
                    'creditcardID': creditcardID
                }, null);
            }

            function _updatecreditcard(creditcardID, creditCard) {
                return makeApiCall('PUT', '/v1/me/creditcards/:creditcardID', {
                    'creditcardID': creditcardID
                }, creditCard);
            }

            function _patchcreditcard(creditcardID, creditCard) {
                return makeApiCall('PATCH', '/v1/me/creditcards/:creditcardID', {
                    'creditcardID': creditcardID
                }, creditCard);
            }

            function _deletecreditcard(creditcardID) {
                return makeApiCall('DELETE', '/v1/me/creditcards/:creditcardID', {
                    'creditcardID': creditcardID
                }, null);
            }

            function _listcategories(search, page, pageSize, searchOn, sortBy, filters, depth) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/categories', {
                    'listArgs': listArgs,
                    'depth': depth
                }, listArgs);
            }

            function _listsubcategories(search, page, pageSize, searchOn, sortBy, filters, parentID, depth) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/categories/:parentID/categories', {
                    'listArgs': listArgs,
                    'parentID': parentID,
                    'depth': depth
                }, listArgs);
            }

            function _listproducts(search, page, pageSize, searchOn, sortBy, filters, categoryID) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/products', {
                    'listArgs': listArgs,
                    'categoryID': categoryID
                }, listArgs);
            }

            function _getproduct(productID) {
                return makeApiCall('GET', '/v1/me/products/:productID', {
                    'productID': productID
                }, null);
            }

            function _listspecs(productID, search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/products/:productID/specs', {
                    'productID': productID,
                    'listArgs': listArgs
                }, listArgs);
            }

            function _getspec(productID, specID) {
                return makeApiCall('GET', '/v1/me/products/:productID/specs/:specID', {
                    'productID': productID,
                    'specID': specID
                }, null);
            }

            function _listoutgoingorders(search, page, pageSize, searchOn, sortBy, filters, from, to) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/orders/outgoing', {
                    'listArgs': listArgs,
                    'from': from,
                    'to': to
                }, listArgs);
            }

            function _listincomingorders(search, page, pageSize, searchOn, sortBy, filters, from, to) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/me/orders/incoming', {
                    'listArgs': listArgs,
                    'from': from,
                    'to': to
                }, listArgs);
            }

            function _getorder(orderID) {
                return makeApiCall('GET', '/v1/me/orders/:orderID', {
                    'orderID': orderID
                }, null);
            }

            function _createfromtempuser(user, tempUserToken) {
                return makeApiCall('PUT', '/v1/me', {
                    'tempUserToken': tempUserToken
                }, user);
            }
        }

        function Orders() {
            return {
                'Get': _get,
                'ListOutgoing': _listoutgoing,
                'ListIncoming': _listincoming,
                'Create': _create,
                'Update': _update,
                'Patch': _patch,
                'Delete': _delete,
                'Submit': _submit,
                'Approve': _approve,
                'Decline': _decline,
                'Cancel': _cancel,
                'Ship': _ship,
                'SetShippingAddress': _setshippingaddress,
                'PatchShippingAddress': _patchshippingaddress,
                'SetBillingAddress': _setbillingaddress,
                'PatchBillingAddress': _patchbillingaddress,
                'TransferTempUserOrder': _transfertempuserorder
            };

            function _get(orderID, buyerID) {
                if (!orderID) {
                    var errMessage = 'orderID is a required field for OrderCloud.Orders.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, null);
            }

            function _listoutgoing(from, to, search, page, pageSize, searchOn, sortBy, filters, buyerID) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                listArgs['buyerID'] = buyerID ? buyerID : BuyerID().Get();
                listArgs['from'] = from;
                listArgs['to'] = to;
                return makeApiCall('GET', '/v1/orders/outgoing', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'from': from,
                    'to': to,
                    'listArgs': listArgs
                }, listArgs);
            }

            function _listincoming(from, to, search, page, pageSize, searchOn, sortBy, filters, buyerID) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                listArgs['buyerID'] = buyerID ? buyerID : BuyerID().Get();
                listArgs['from'] = from;
                listArgs['to'] = to;
                return makeApiCall('GET', '/v1/orders/incoming', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'from': from,
                    'to': to,
                    'listArgs': listArgs
                }, listArgs);
            }

            function _create(order, buyerID) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get()
                }, order);
            }

            function _update(orderID, order, buyerID) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, order);
            }

            function _patch(orderID, partialOrder, buyerID) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, partialOrder);
            }

            function _delete(orderID, buyerID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, null);
            }

            function _submit(orderID, buyerID) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/submit', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, null);
            }

            function _approve(orderID, comments, buyerID) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/approve', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID,
                    'comments': comments
                }, null);
            }

            function _decline(orderID, comments, buyerID) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/decline', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID,
                    'comments': comments
                }, null);
            }

            function _cancel(orderID, buyerID) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/cancel', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, null);
            }

            function _ship(orderID, shipment, buyerID) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/ship', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, shipment);
            }

            function _setshippingaddress(orderID, address, buyerID) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/shipto', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, address);
            }

            function _patchshippingaddress(orderID, address, buyerID) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/shipto', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, address);
            }

            function _setbillingaddress(orderID, address, buyerID) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/billto', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, address);
            }

            function _patchbillingaddress(orderID, address, buyerID) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/billto', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'orderID': orderID
                }, address);
            }

            function _transfertempuserorder(tempUserToken, buyerID) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/orders', {
                    'buyerID': buyerID ? buyerID : BuyerID().Get(),
                    'tempUserToken': tempUserToken
                }, null);
            }
        }

        function PasswordResets() {
            return {
                'SendVerificationCode': _sendverificationcode,
                'ResetPassword': _resetpassword
            };

            function _sendverificationcode(passwordResetRequest) {
                return makeApiCall('POST', '/v1/password/reset', null, passwordResetRequest);
            }

            function _resetpassword(verificationCode, passwordReset) {
                return makeApiCall('PUT', '/v1/password/reset/:verificationCode', {
                    'verificationCode': verificationCode
                }, passwordReset);
            }
        }

        function PriceSchedules() {
            return {
                'List': _list,
                'Get': _get,
                'Create': _create,
                'Patch': _patch,
                'Update': _update,
                'Delete': _delete,
                'SavePriceBreak': _savepricebreak,
                'DeletePriceBreak': _deletepricebreak
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/priceschedules', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(priceScheduleID) {
                if (!priceScheduleID) {
                    var errMessage = 'priceScheduleID is a required field for OrderCloud.PriceSchedules.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/priceschedules/:priceScheduleID', {
                    'priceScheduleID': priceScheduleID
                }, null);
            }

            function _create(priceSchedule) {
                return makeApiCall('POST', '/v1/priceschedules', null, priceSchedule);
            }

            function _patch(priceScheduleID, priceSchedule) {
                return makeApiCall('PATCH', '/v1/priceschedules/:priceScheduleID', {
                    'priceScheduleID': priceScheduleID
                }, priceSchedule);
            }

            function _update(priceScheduleID, priceSchedule) {
                return makeApiCall('PUT', '/v1/priceschedules/:priceScheduleID', {
                    'priceScheduleID': priceScheduleID
                }, priceSchedule);
            }

            function _delete(priceScheduleID) {
                return makeApiCall('DELETE', '/v1/priceschedules/:priceScheduleID', {
                    'priceScheduleID': priceScheduleID
                }, null);
            }

            function _savepricebreak(priceScheduleID, priceBreak) {
                return makeApiCall('POST', '/v1/priceschedules/:priceScheduleID/PriceBreaks', {
                    'priceScheduleID': priceScheduleID
                }, priceBreak);
            }

            function _deletepricebreak(priceScheduleID, quantity) {
                return makeApiCall('DELETE', '/v1/priceschedules/:priceScheduleID/PriceBreaks', {
                    'priceScheduleID': priceScheduleID,
                    'quantity': quantity
                }, null);
            }
        }

        function Shipments() {
            return {
                'Get': _get,
                'List': _list,
                'Create': _create,
                'Update': _update,
                'Patch': _patch,
                'Delete': _delete,
                'SaveItem': _saveitem,
                'DeleteItem': _deleteitem
            };

            function _get(shipmentID) {
                if (!shipmentID) {
                    var errMessage = 'shipmentID is a required field for OrderCloud.Shipments.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/shipments/:shipmentID', {
                    'buyerID': BuyerID().Get(),
                    'shipmentID': shipmentID
                }, null);
            }

            function _list(orderID, search, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/shipments', {
                    'buyerID': BuyerID().Get(),
                    'orderID': orderID,
                    'search': search,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _create(shipment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/shipments', {
                    'buyerID': BuyerID().Get()
                }, shipment);
            }

            function _update(shipmentID, shipment) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/shipments/:shipmentID', {
                    'buyerID': BuyerID().Get(),
                    'shipmentID': shipmentID
                }, shipment);
            }

            function _patch(shipmentID, shipment) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/shipments/:shipmentID', {
                    'buyerID': BuyerID().Get(),
                    'shipmentID': shipmentID
                }, shipment);
            }

            function _delete(shipmentID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/shipments/:shipmentID', {
                    'buyerID': BuyerID().Get(),
                    'shipmentID': shipmentID
                }, null);
            }

            function _saveitem(shipmentID, item) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/shipments/:shipmentID/items', {
                    'buyerID': BuyerID().Get(),
                    'shipmentID': shipmentID
                }, item);
            }

            function _deleteitem(shipmentID, orderID, lineItemID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/shipments/:shipmentID/items/:orderID/:lineItemID', {
                    'buyerID': BuyerID().Get(),
                    'shipmentID': shipmentID,
                    'orderID': orderID,
                    'lineItemID': lineItemID
                }, null);
            }
        }

        function SpendingAccounts() {
            return {
                'List': _list,
                'Get': _get,
                'Create': _create,
                'Update': _update,
                'Delete': _delete,
                'ListAssignments': _listassignments,
                'SaveAssignment': _saveassignment,
                'DeleteAssignment': _deleteassignment
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts', {
                    'buyerID': BuyerID().Get(),
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(spendingAccountID) {
                if (!spendingAccountID) {
                    var errMessage = 'spendingAccountID is a required field for OrderCloud.SpendingAccounts.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', {
                    'buyerID': BuyerID().Get(),
                    'spendingAccountID': spendingAccountID
                }, null);
            }

            function _create(spendingAccount) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/spendingaccounts', {
                    'buyerID': BuyerID().Get()
                }, spendingAccount);
            }

            function _update(spendingAccountID, spendingAccount) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', {
                    'buyerID': BuyerID().Get(),
                    'spendingAccountID': spendingAccountID
                }, spendingAccount);
            }

            function _delete(spendingAccountID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', {
                    'buyerID': BuyerID().Get(),
                    'spendingAccountID': spendingAccountID
                }, null);
            }

            function _listassignments(spendingAccountID, userID, userGroupID, level, page, pageSize) {
                return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts/assignments', {
                    'buyerID': BuyerID().Get(),
                    'spendingAccountID': spendingAccountID,
                    'userID': userID,
                    'userGroupID': userGroupID,
                    'level': level,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _saveassignment(assignment) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/spendingaccounts/assignments', {
                    'buyerID': BuyerID().Get()
                }, assignment);
            }

            function _deleteassignment(spendingAccountID, userID, userGroupID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID/assignments', {
                    'buyerID': BuyerID().Get(),
                    'spendingAccountID': spendingAccountID,
                    'userID': userID,
                    'userGroupID': userGroupID
                }, null);
            }
        }

        function Products() {
            return {
                'List': _list,
                'Get': _get,
                'Update': _update,
                'Patch': _patch,
                'Create': _create,
                'Delete': _delete,
                'GenerateVariants': _generatevariants,
                'ListVariants': _listvariants,
                'ListVariantInventory': _listvariantinventory,
                'GetVariantInventory': _getvariantinventory,
                'UpdateVariantInventory': _updatevariantinventory,
                'UpdateVariant': _updatevariant,
                'GetVariant': _getvariant,
                'GetInventory': _getinventory,
                'UpdateInventory': _updateinventory,
                'SaveAssignment': _saveassignment,
                'ListAssignments': _listassignments,
                'DeleteAssignment': _deleteassignment
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/products', {
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(productID) {
                if (!productID) {
                    var errMessage = 'productID is a required field for OrderCloud.Products.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/products/:productID', {
                    'productID': productID
                }, null);
            }

            function _update(productID, product) {
                return makeApiCall('PUT', '/v1/products/:productID', {
                    'productID': productID
                }, product);
            }

            function _patch(productID, product) {
                return makeApiCall('PATCH', '/v1/products/:productID', {
                    'productID': productID
                }, product);
            }

            function _create(product) {
                return makeApiCall('POST', '/v1/products', null, product);
            }

            function _delete(productID) {
                return makeApiCall('DELETE', '/v1/products/:productID', {
                    'productID': productID
                }, null);
            }

            function _generatevariants(productID, overwriteExisting) {
                return makeApiCall('POST', '/v1/products/:productID/variants/generate', {
                    'productID': productID,
                    'overwriteExisting': overwriteExisting
                }, null);
            }

            function _listvariants(productID, page, pageSize) {
                return makeApiCall('GET', '/v1/products/:productID/variants', {
                    'productID': productID,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _listvariantinventory(productID, page, pageSize) {
                return makeApiCall('GET', '/v1/products/:productID/variants/inventory', {
                    'productID': productID,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _getvariantinventory(productID, variantID) {
                return makeApiCall('GET', '/v1/products/:productID/variants/inventory/:variantID', {
                    'productID': productID,
                    'variantID': variantID
                }, null);
            }

            function _updatevariantinventory(productID, variantID, inventory) {
                return makeApiCall('PUT', '/v1/products/:productID/variants/inventory/:variantID/:inventory', {
                    'productID': productID,
                    'variantID': variantID,
                    'inventory': inventory
                }, null);
            }

            function _updatevariant(productID, variantID, variant) {
                return makeApiCall('PUT', '/v1/products/:productID/variants/:variantID', {
                    'productID': productID,
                    'variantID': variantID
                }, variant);
            }

            function _getvariant(productID, variantID) {
                return makeApiCall('GET', '/v1/products/:productID/variants/:variantID', {
                    'productID': productID,
                    'variantID': variantID
                }, null);
            }

            function _getinventory(productID) {
                return makeApiCall('GET', '/v1/products/:productID/inventory', {
                    'productID': productID
                }, null);
            }

            function _updateinventory(productID, inventory) {
                return makeApiCall('PUT', '/v1/products/:productID/inventory/:inventory', {
                    'productID': productID,
                    'inventory': inventory
                }, null);
            }

            function _saveassignment(productAssignment) {
                return makeApiCall('POST', '/v1/products/assignments', null, productAssignment);
            }

            function _listassignments(productID, userID, userGroupID, level, priceScheduleID, page, pageSize) {
                return makeApiCall('GET', '/v1/products/assignments', {
                    'productID': productID,
                    'buyerID': BuyerID().Get(),
                    'userID': userID,
                    'userGroupID': userGroupID,
                    'level': level,
                    'priceScheduleID': priceScheduleID,
                    'page': page,
                    'pageSize': pageSize
                }, null);
            }

            function _deleteassignment(productID, userID, userGroupID) {
                return makeApiCall('DELETE', '/v1/products/:productID/assignments/:buyerID', {
                    'buyerID': BuyerID().Get(),
                    'productID': productID,
                    'userID': userID,
                    'userGroupID': userGroupID
                }, null);
            }
        }

        function Users() {
            return {
                'List': _list,
                'Get': _get,
                'Update': _update,
                'Create': _create,
                'Delete': _delete,
                'Patch': _patch,
                'GetAccessToken': _getaccesstoken
            };

            function _list(search, page, pageSize, searchOn, sortBy, filters) {
                var listArgs = {
                    'search': search,
                    'page': page,
                    'pageSize': pageSize,
                    'searchOn': searchOn,
                    'sortBy': sortBy
                };
                if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
                return makeApiCall('GET', '/v1/buyers/:buyerID/users', {
                    'buyerID': BuyerID().Get(),
                    'listArgs': listArgs
                }, listArgs);
            }

            function _get(userID) {
                if (!userID) {
                    var errMessage = 'userID is a required field for OrderCloud.Users.Get';
                    console.error(errMessage);
                    var dfd = $q.defer();
                    dfd.reject(errMessage);
                    return dfd.promise;
                }
                return makeApiCall('GET', '/v1/buyers/:buyerID/users/:userID', {
                    'buyerID': BuyerID().Get(),
                    'userID': userID
                }, null);
            }

            function _update(userID, user) {
                return makeApiCall('PUT', '/v1/buyers/:buyerID/users/:userID', {
                    'buyerID': BuyerID().Get(),
                    'userID': userID
                }, user);
            }

            function _create(user) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/users', {
                    'buyerID': BuyerID().Get()
                }, user);
            }

            function _delete(userID) {
                return makeApiCall('DELETE', '/v1/buyers/:buyerID/users/:userID', {
                    'buyerID': BuyerID().Get(),
                    'userID': userID
                }, null);
            }

            function _patch(userID, user) {
                return makeApiCall('PATCH', '/v1/buyers/:buyerID/users/:userID', {
                    'buyerID': BuyerID().Get(),
                    'userID': userID
                }, user);
            }

            function _getaccesstoken(userID, tokenRequest) {
                return makeApiCall('POST', '/v1/buyers/:buyerID/users/:userID/accesstoken', {
                    'buyerID': BuyerID().Get(),
                    'userID': userID
                }, tokenRequest);
            }
        }

        function makeApiCall(method, routingUrl, parameters, requestBody) {
            var d = $q.defer();
            $resource(apiurl + routingUrl, parameters, {
                    callApi: {
                        method: method,
                        headers: {
                            'Authorization': 'Bearer ' + Auth().ReadToken()
                        }
                    }
                }).callApi(requestBody).$promise
                .then(function(data) {
                    d.resolve(data);
                })
                .catch(function(ex) {
                    d.reject(ex);
                });
            impersonating = false;
            return d.promise;
        }
    }
}());