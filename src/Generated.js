angular.module('orderCloud.sdk', ['ngResource','ngCookies'])
.factory('OrderCloud', orderCloud);
function orderCloud( $q, $resource, $cookieStore, appname, apiurl, authurl, ocscope, clientid ) {
	var impersonating = false;
	return {
		/* INSERT FUNCTION DECLARATIONS HERE */
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
		/* INSERT FUNCTIONS HERE */
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/addresses', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(addressID, buyerID) {
					if (!addressID) {
						var errMessage = 'addressID is a required field for OrderCloud.Addresses.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/addresses/:addressID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'addressID': addressID }, null);
				}
				function _create(address, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/addresses', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, address);
				}
				function _update(addressID, address, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/addresses/:addressID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'addressID': addressID }, address);
				}
				function _patch(addressID, address, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/addresses/:addressID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'addressID': addressID }, address);
				}
				function _delete(addressID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/addresses/:addressID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'addressID': addressID }, null);
				}
				function _listassignments(addressID, userID, userGroupID, level, isShipping, isBilling, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/addresses/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'addressID': addressID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'isShipping': isShipping, 'isBilling': isBilling, 'page': page, 'pageSize': pageSize }, null);
				}
				function _deleteassignment(addressID, userID, userGroupID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/addresses/:addressID/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'addressID': addressID, 'userID': userID, 'userGroupID': userGroupID }, null);
				}
				function _saveassignment(assignment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/addresses/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, assignment);
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
					}
				;
				function _get(userID) {
					if (!userID) {
						var errMessage = 'userID is a required field for OrderCloud.AdminUsers.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/adminusers/:userID', { 'userID': userID }, null);
				}
				function _update(userID, user) {
					return makeApiCall('PUT', '/v1/adminusers/:userID', { 'userID': userID }, user);
				}
				function _patch(userID, user) {
					return makeApiCall('PATCH', '/v1/adminusers/:userID', { 'userID': userID }, user);
				}
				function _list(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/adminusers', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _delete(userID) {
					return makeApiCall('DELETE', '/v1/adminusers/:userID', { 'userID': userID }, null);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/approvalrules', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(approvalRuleID, buyerID) {
					if (!approvalRuleID) {
						var errMessage = 'approvalRuleID is a required field for OrderCloud.ApprovalRules.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'approvalRuleID': approvalRuleID }, null);
				}
				function _create(approvalRule, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/approvalrules', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, approvalRule);
				}
				function _update(approvalRuleID, approvalRule, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'approvalRuleID': approvalRuleID }, approvalRule);
				}
				function _patch(approvalRuleID, partialApprovalRule, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'approvalRuleID': approvalRuleID }, partialApprovalRule);
				}
				function _delete(approvalRuleID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'approvalRuleID': approvalRuleID }, null);
				}
			}
			function Buyers() {
				return {
					'List': _list,
					'Get': _get,
					'Delete': _delete,
					'Create': _create,
					'Update': _update
					}
				;
				function _list(search, page, pageSize) {
					return makeApiCall('GET', '/v1/buyers', { 'search': search, 'page': page, 'pageSize': pageSize }, null);
				}
				function _get(buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, null);
				}
				function _delete(buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, null);
				}
				function _create(company) {
					return makeApiCall('POST', '/v1/buyers', null, company);
				}
				function _update(company, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, company);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters, parentID, depth, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/categories', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters, 'parentID': parentID, 'depth': depth }, null);
				}
				function _listchildren(parentID, search, depth, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/categories/:parentID/categories', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'parentID': parentID, 'search': search, 'depth': depth, 'page': page, 'pageSize': pageSize }, null);
				}
				function _get(categoryID, buyerID) {
					if (!categoryID) {
						var errMessage = 'categoryID is a required field for OrderCloud.Categories.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/categories/:categoryID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'categoryID': categoryID }, null);
				}
				function _create(category, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/categories', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, category);
				}
				function _update(categoryID, category, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/categories/:categoryID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'categoryID': categoryID }, category);
				}
				function _delete(categoryID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'categoryID': categoryID }, null);
				}
				function _patch(categoryID, category, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/categories/:categoryID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'categoryID': categoryID }, category);
				}
				function _listproductassignments(categoryID, productID, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/categories/productassignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'categoryID': categoryID, 'productID': productID, 'page': page, 'pageSize': pageSize }, null);
				}
				function _saveproductassignment(productAssignment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/categories/productassignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, productAssignment);
				}
				function _deleteproductassignment(categoryID, productID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID/productassignments/:productID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'categoryID': categoryID, 'productID': productID }, null);
				}
				function _listassignments(categoryID, userID, userGroupID, level, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/categories/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'categoryID': categoryID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize }, null);
				}
				function _deleteassignment(categoryID, userID, userGroupID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'categoryID': categoryID, 'userID': userID, 'userGroupID': userGroupID }, null);
				}
				function _saveassignment(categoryAssignment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/categories/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, categoryAssignment);
				}
			}
			function CostCenters() {
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(costCenterID, buyerID) {
					if (!costCenterID) {
						var errMessage = 'costCenterID is a required field for OrderCloud.CostCenters.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters/:costCenterID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'costCenterID': costCenterID }, null);
				}
				function _create(costCenter, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/costcenters', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, costCenter);
				}
				function _update(costCenterID, costCenter, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/costcenters/:costCenterID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'costCenterID': costCenterID }, costCenter);
				}
				function _patch(costCenterID, costCenter, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/costcenters/:costCenterID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'costCenterID': costCenterID }, costCenter);
				}
				function _delete(costCenterID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/costcenters/:costCenterID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'costCenterID': costCenterID }, null);
				}
				function _listassignments(costCenterID, userID, userGroupID, level, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'costCenterID': costCenterID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize }, null);
				}
				function _deleteassignment(costCenterID, userID, userGroupID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/costcenters/:costCenterID/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'costCenterID': costCenterID, 'userID': userID, 'userGroupID': userGroupID }, null);
				}
				function _saveassignment(assignment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/costcenters/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, assignment);
				}
			}
			function Coupons() {
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/coupons', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(couponID) {
					if (!couponID) {
						var errMessage = 'couponID is a required field for OrderCloud.Coupons.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/coupons/:couponID', { 'couponID': couponID }, null);
				}
				function _create(coupon) {
					return makeApiCall('POST', '/v1/coupons', null, coupon);
				}
				function _update(couponID, coupon) {
					return makeApiCall('PUT', '/v1/coupons/:couponID', { 'couponID': couponID }, coupon);
				}
				function _patch(couponID, partialCoupon) {
					return makeApiCall('PATCH', '/v1/coupons/:couponID', { 'couponID': couponID }, partialCoupon);
				}
				function _delete(couponID) {
					return makeApiCall('DELETE', '/v1/coupons/:couponID', { 'couponID': couponID }, null);
				}
				function _listassignments(couponID, userID, userGroupID, level, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/coupons/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'couponID': couponID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize }, null);
				}
				function _saveassignment(assignment) {
					return makeApiCall('POST', '/v1/coupons/assignments', null, assignment);
				}
				function _deleteassignment(couponID, userID, userGroupID, buyerID) {
					return makeApiCall('DELETE', '/v1/coupons/:couponID/assignments', { 'couponID': couponID, 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userID': userID, 'userGroupID': userGroupID }, null);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(creditCardID, buyerID) {
					if (!creditCardID) {
						var errMessage = 'creditCardID is a required field for OrderCloud.CreditCards.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards/:creditCardID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'creditCardID': creditCardID }, null);
				}
				function _create(card, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/creditcards', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, card);
				}
				function _update(creditCardID, card, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/creditcards/:creditCardID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'creditCardID': creditCardID }, card);
				}
				function _patch(creditCardID, card, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/creditcards/:creditCardID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'creditCardID': creditCardID }, card);
				}
				function _delete(creditCardID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/creditcards/:creditCardID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'creditCardID': creditCardID }, null);
				}
				function _listassignments(creditCardID, userID, userGroupID, level, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'creditCardID': creditCardID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize }, null);
				}
				function _saveassignment(assignment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/creditcards/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, assignment);
				}
				function _deleteassignment(creditCardID, userID, userGroupID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/creditcards/:creditCardID/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'creditCardID': creditCardID, 'userID': userID, 'userGroupID': userGroupID }, null);
				}
			}
			function EmailTemplates() {
				return {
					'Get': _get,
					'Update': _update,
					'Patch': _patch,
					'ResetToDefault': _resettodefault
					}
				;
				function _get(emailTemplateType, buyerID) {
					if (!emailTemplateType) {
						var errMessage = 'emailTemplateType is a required field for OrderCloud.EmailTemplates.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'emailTemplateType': emailTemplateType }, null);
				}
				function _update(emailTemplateType, emailTemplate, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'emailTemplateType': emailTemplateType }, emailTemplate);
				}
				function _patch(emailTemplateType, emailTemplate, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'emailTemplateType': emailTemplateType }, emailTemplate);
				}
				function _resettodefault(emailTemplateType, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'emailTemplateType': emailTemplateType }, null);
				}
			}
			function Files() {
				return {
					'List': _list,
					'Get': _get,
					'PostFileData': _postfiledata
					}
				;
				function _list(page, pageSize) {
					return makeApiCall('GET', '/v1/files', { 'page': page, 'pageSize': pageSize }, null);
				}
				function _get(fileID) {
					if (!fileID) {
						var errMessage = 'fileID is a required field for OrderCloud.Files.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/files/:fileID', { 'fileID': fileID }, null);
				}
				function _postfiledata(filename) {
					return makeApiCall('POST', '/v1/files', { 'filename': filename }, null);
				}
			}
			function SecurityProfiles() {
				return {
					'List': _list,
					'Get': _get
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/SecurityProfiles', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(securityProfileID) {
					if (!securityProfileID) {
						var errMessage = 'securityProfileID is a required field for OrderCloud.SecurityProfiles.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/SecurityProfiles/:securityProfileID', { 'securityProfileID': securityProfileID }, null);
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
					}
				;
				function _get(orderID, paymentID, buyerID) {
					if (!orderID || !paymentID) {
						var errMessage = 'orderID and paymentID are required fields for OrderCloud.Payments.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'paymentID': paymentID }, null);
				}
				function _list(orderID, search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/payments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _create(orderID, payment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/payments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, payment);
				}
				function _update(orderID, paymentID, payment, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'paymentID': paymentID }, payment);
				}
				function _patch(orderID, paymentID, partialPayment, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'paymentID': paymentID }, partialPayment);
				}
				function _delete(orderID, paymentID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'paymentID': paymentID }, null);
				}
				function _createtransaction(orderID, paymentID, transaction, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID/transactions', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'paymentID': paymentID }, transaction);
				}
				function _updatetransaction(orderID, paymentID, transactionID, transaction, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID/transactions/:transactionID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'paymentID': paymentID, 'transactionID': transactionID }, transaction);
				}
				function _patchtransaction(orderID, paymentID, transactionID, partialTransaction, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID/transactions/:transactionID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'paymentID': paymentID, 'transactionID': transactionID }, partialTransaction);
				}
				function _deletetransacion(orderID, paymentID, transactionID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID/payments/:paymentID/transactions/:transactionID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'paymentID': paymentID, 'transactionID': transactionID }, null);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/specs', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(specID) {
					if (!specID) {
						var errMessage = 'specID is a required field for OrderCloud.Specs.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/specs/:specID', { 'specID': specID }, null);
				}
				function _patch(specID, spec) {
					return makeApiCall('PATCH', '/v1/specs/:specID', { 'specID': specID }, spec);
				}
				function _update(specID, spec) {
					return makeApiCall('PUT', '/v1/specs/:specID', { 'specID': specID }, spec);
				}
				function _create(spec) {
					return makeApiCall('POST', '/v1/specs', null, spec);
				}
				function _delete(specID) {
					return makeApiCall('DELETE', '/v1/specs/:specID', { 'specID': specID }, null);
				}
				function _listproductassignments(specID, productID, page, pageSize) {
					return makeApiCall('GET', '/v1/specs/productassignments', { 'specID': specID, 'productID': productID, 'page': page, 'pageSize': pageSize }, null);
				}
				function _deleteproductassignment(specID, productID) {
					return makeApiCall('DELETE', '/v1/specs/:specID/productassignments/:productID', { 'specID': specID, 'productID': productID }, null);
				}
				function _saveproductassignment(productAssignment) {
					return makeApiCall('POST', '/v1/specs/productassignments', null, productAssignment);
				}
				function _createoption(specID, option) {
					return makeApiCall('POST', '/v1/specs/:specID/options', { 'specID': specID }, option);
				}
				function _listoptions(specID, search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/specs/:specID/options', { 'specID': specID, 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _updateoption(specID, optionID, option) {
					return makeApiCall('PUT', '/v1/specs/:specID/options/:optionID', { 'specID': specID, 'optionID': optionID }, option);
				}
				function _patchoption(specID, optionID, option) {
					return makeApiCall('PATCH', '/v1/specs/:specID/options/:optionID', { 'specID': specID, 'optionID': optionID }, option);
				}
				function _getoption(specID, optionID) {
					return makeApiCall('GET', '/v1/specs/:specID/options/:optionID', { 'specID': specID, 'optionID': optionID }, null);
				}
				function _deleteoption(specID, optionID) {
					return makeApiCall('DELETE', '/v1/specs/:specID/options/:optionID', { 'specID': specID, 'optionID': optionID }, null);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(userGroupID, buyerID) {
					if (!userGroupID) {
						var errMessage = 'userGroupID is a required field for OrderCloud.UserGroups.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups/:userGroupID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userGroupID': userGroupID }, null);
				}
				function _update(userGroupID, group, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/usergroups/:userGroupID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userGroupID': userGroupID }, group);
				}
				function _patch(userGroupID, group, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/usergroups/:userGroupID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userGroupID': userGroupID }, group);
				}
				function _create(group, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/usergroups', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, group);
				}
				function _delete(userGroupID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/usergroups/:userGroupID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userGroupID': userGroupID }, null);
				}
				function _listuserassignments(userGroupID, userID, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userGroupID': userGroupID, 'userID': userID, 'page': page, 'pageSize': pageSize }, null);
				}
				function _deleteuserassignment(userGroupID, userID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/usergroups/:userGroupID/assignments/:userID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userGroupID': userGroupID, 'userID': userID }, null);
				}
				function _saveuserassignment(userGroupAssignment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/usergroups/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, userGroupAssignment);
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
					}
				;
				function _get(orderID, lineItemID, buyerID) {
					if (!orderID || !lineItemID) {
						var errMessage = 'orderID and lineItemID are required fields for OrderCloud.LineItems.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, null);
				}
				function _list(orderID, search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/lineitems', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _create(orderID, lineItem, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/lineitems', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, lineItem);
				}
				function _update(orderID, lineItemID, lineItem, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, lineItem);
				}
				function _patch(orderID, lineItemID, partialLineItem, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, partialLineItem);
				}
				function _delete(orderID, lineItemID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, null);
				}
				function _setshippingaddress(orderID, lineItemID, address, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID/shipto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, address);
				}
				function _patchshippingaddress(orderID, lineItemID, address, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID/shipto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, address);
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
					'ListCoupons': _listcoupons,
					'GetCoupon': _getcoupon,
					'CreateFromTempUser': _createfromtempuser
					}
				;
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
					return makeApiCall('GET', '/v1/me/costcenters', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _listusergroups(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/me/usergroups', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _listaddresses(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/me/addresses', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _createaddress(address) {
					return makeApiCall('POST', '/v1/me/addresses', null, address);
				}
				function _getaddress(addressID) {
					return makeApiCall('GET', '/v1/me/addresses/:addressID', { 'addressID': addressID }, null);
				}
				function _updateaddress(addressID, address) {
					return makeApiCall('PUT', '/v1/me/addresses/:addressID', { 'addressID': addressID }, address);
				}
				function _patchaddress(addressID, address) {
					return makeApiCall('PATCH', '/v1/me/addresses/:addressID', { 'addressID': addressID }, address);
				}
				function _deleteaddress(addressID) {
					return makeApiCall('DELETE', '/v1/me/addresses/:addressID', { 'addressID': addressID }, null);
				}
				function _createcreditcard(creditCard) {
					return makeApiCall('POST', '/v1/me/creditcards', null, creditCard);
				}
				function _listcreditcards(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/me/creditcards', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _getcreditcard(creditcardID) {
					return makeApiCall('GET', '/v1/me/creditcards/:creditcardID', { 'creditcardID': creditcardID }, null);
				}
				function _updatecreditcard(creditcardID, creditCard) {
					return makeApiCall('PUT', '/v1/me/creditcards/:creditcardID', { 'creditcardID': creditcardID }, creditCard);
				}
				function _patchcreditcard(creditcardID, creditCard) {
					return makeApiCall('PATCH', '/v1/me/creditcards/:creditcardID', { 'creditcardID': creditcardID }, creditCard);
				}
				function _deletecreditcard(creditcardID) {
					return makeApiCall('DELETE', '/v1/me/creditcards/:creditcardID', { 'creditcardID': creditcardID }, null);
				}
				function _listcategories(search, page, pageSize, searchOn, sortBy, filters, depth) {
					return makeApiCall('GET', '/v1/me/categories', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters, 'depth': depth }, null);
				}
				function _listsubcategories(search, page, pageSize, searchOn, sortBy, filters, parentID, depth) {
					return makeApiCall('GET', '/v1/me/categories/:parentID/categories', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters, 'parentID': parentID, 'depth': depth }, null);
				}
				function _listproducts(search, page, pageSize, searchOn, sortBy, filters, categoryID) {
					return makeApiCall('GET', '/v1/me/products', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters, 'categoryID': categoryID }, null);
				}
				function _getproduct(productID) {
					return makeApiCall('GET', '/v1/me/products/:productID', { 'productID': productID }, null);
				}
				function _listspecs(productID, search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/me/products/:productID/specs', { 'productID': productID, 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _getspec(productID, specID) {
					return makeApiCall('GET', '/v1/me/products/:productID/specs/:specID', { 'productID': productID, 'specID': specID }, null);
				}
				function _listoutgoingorders(search, page, pageSize, searchOn, sortBy, filters, from, to) {
					return makeApiCall('GET', '/v1/me/orders/outgoing', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters, 'from': from, 'to': to }, null);
				}
				function _listincomingorders(search, page, pageSize, searchOn, sortBy, filters, from, to) {
					return makeApiCall('GET', '/v1/me/orders/incoming', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters, 'from': from, 'to': to }, null);
				}
				function _getorder(orderID) {
					return makeApiCall('GET', '/v1/me/orders/:orderID', { 'orderID': orderID }, null);
				}
				function _listcoupons(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/me/coupons', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _getcoupon(couponID) {
					return makeApiCall('GET', '/v1/me/coupons/:couponID', { 'couponID': couponID }, null);
				}
				function _createfromtempuser(user, tempUserToken) {
					return makeApiCall('PUT', '/v1/me', { 'tempUserToken': tempUserToken }, user);
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
					}
				;
				function _get(orderID, buyerID) {
					if (!orderID) {
						var errMessage = 'orderID is a required field for OrderCloud.Orders.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, null);
				}
				function _listoutgoing(from, to, search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/orders/outgoing', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'from': from, 'to': to, 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _listincoming(from, to, search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/orders/incoming', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'from': from, 'to': to, 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _create(order, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, order);
				}
				function _update(orderID, order, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, order);
				}
				function _patch(orderID, partialOrder, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, partialOrder);
				}
				function _delete(orderID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, null);
				}
				function _submit(orderID, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/submit', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, null);
				}
				function _approve(orderID, comments, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/approve', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'comments': comments }, null);
				}
				function _decline(orderID, comments, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/decline', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'comments': comments }, null);
				}
				function _cancel(orderID, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/cancel', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, null);
				}
				function _ship(orderID, shipment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/ship', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, shipment);
				}
				function _setshippingaddress(orderID, address, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/shipto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, address);
				}
				function _patchshippingaddress(orderID, address, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/shipto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, address);
				}
				function _setbillingaddress(orderID, address, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/billto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, address);
				}
				function _patchbillingaddress(orderID, address, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/billto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, address);
				}
				function _transfertempuserorder(tempUserToken, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/orders', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'tempUserToken': tempUserToken }, null);
				}
			}
			function PasswordResets() {
				return {
					'SendVerificationCode': _sendverificationcode,
					'ResetPassword': _resetpassword
					}
				;
				function _sendverificationcode(passwordResetRequest) {
					return makeApiCall('POST', '/v1/password/reset', null, passwordResetRequest);
				}
				function _resetpassword(verificationCode, passwordReset) {
					return makeApiCall('PUT', '/v1/password/reset/:verificationCode', { 'verificationCode': verificationCode }, passwordReset);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/priceschedules', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(priceScheduleID) {
					if (!priceScheduleID) {
						var errMessage = 'priceScheduleID is a required field for OrderCloud.PriceSchedules.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/priceschedules/:priceScheduleID', { 'priceScheduleID': priceScheduleID }, null);
				}
				function _create(priceSchedule) {
					return makeApiCall('POST', '/v1/priceschedules', null, priceSchedule);
				}
				function _patch(priceScheduleID, priceSchedule) {
					return makeApiCall('PATCH', '/v1/priceschedules/:priceScheduleID', { 'priceScheduleID': priceScheduleID }, priceSchedule);
				}
				function _update(priceScheduleID, priceSchedule) {
					return makeApiCall('PUT', '/v1/priceschedules/:priceScheduleID', { 'priceScheduleID': priceScheduleID }, priceSchedule);
				}
				function _delete(priceScheduleID) {
					return makeApiCall('DELETE', '/v1/priceschedules/:priceScheduleID', { 'priceScheduleID': priceScheduleID }, null);
				}
				function _savepricebreak(priceScheduleID, priceBreak) {
					return makeApiCall('POST', '/v1/priceschedules/:priceScheduleID/PriceBreaks', { 'priceScheduleID': priceScheduleID }, priceBreak);
				}
				function _deletepricebreak(priceScheduleID, quantity) {
					return makeApiCall('DELETE', '/v1/priceschedules/:priceScheduleID/PriceBreaks', { 'priceScheduleID': priceScheduleID, 'quantity': quantity }, null);
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
					}
				;
				function _get(shipmentID, buyerID) {
					if (!shipmentID) {
						var errMessage = 'shipmentID is a required field for OrderCloud.Shipments.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/shipments/:shipmentID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'shipmentID': shipmentID }, null);
				}
				function _list(orderID, search, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/shipments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID, 'search': search, 'page': page, 'pageSize': pageSize }, null);
				}
				function _create(shipment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/shipments', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, shipment);
				}
				function _update(shipmentID, shipment, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/shipments/:shipmentID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'shipmentID': shipmentID }, shipment);
				}
				function _patch(shipmentID, shipment, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/shipments/:shipmentID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'shipmentID': shipmentID }, shipment);
				}
				function _delete(shipmentID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/shipments/:shipmentID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'shipmentID': shipmentID }, null);
				}
				function _saveitem(shipmentID, item, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/shipments/:shipmentID/items', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'shipmentID': shipmentID }, item);
				}
				function _deleteitem(shipmentID, orderID, lineItemID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/shipments/:shipmentID/items/:orderID/:lineItemID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'shipmentID': shipmentID, 'orderID': orderID, 'lineItemID': lineItemID }, null);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(spendingAccountID, buyerID) {
					if (!spendingAccountID) {
						var errMessage = 'spendingAccountID is a required field for OrderCloud.SpendingAccounts.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'spendingAccountID': spendingAccountID }, null);
				}
				function _create(spendingAccount, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/spendingaccounts', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, spendingAccount);
				}
				function _update(spendingAccountID, spendingAccount, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'spendingAccountID': spendingAccountID }, spendingAccount);
				}
				function _delete(spendingAccountID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'spendingAccountID': spendingAccountID }, null);
				}
				function _listassignments(spendingAccountID, userID, userGroupID, level, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'spendingAccountID': spendingAccountID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize }, null);
				}
				function _saveassignment(assignment, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/spendingaccounts/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, assignment);
				}
				function _deleteassignment(spendingAccountID, userID, userGroupID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID/assignments', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'spendingAccountID': spendingAccountID, 'userID': userID, 'userGroupID': userGroupID }, null);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters) {
					return makeApiCall('GET', '/v1/products', { 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(productID) {
					if (!productID) {
						var errMessage = 'productID is a required field for OrderCloud.Products.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/products/:productID', { 'productID': productID }, null);
				}
				function _update(productID, product) {
					return makeApiCall('PUT', '/v1/products/:productID', { 'productID': productID }, product);
				}
				function _patch(productID, product) {
					return makeApiCall('PATCH', '/v1/products/:productID', { 'productID': productID }, product);
				}
				function _create(product) {
					return makeApiCall('POST', '/v1/products', null, product);
				}
				function _delete(productID) {
					return makeApiCall('DELETE', '/v1/products/:productID', { 'productID': productID }, null);
				}
				function _generatevariants(productID, overwriteExisting) {
					return makeApiCall('POST', '/v1/products/:productID/variants/generate', { 'productID': productID, 'overwriteExisting': overwriteExisting }, null);
				}
				function _listvariants(productID, page, pageSize) {
					return makeApiCall('GET', '/v1/products/:productID/variants', { 'productID': productID, 'page': page, 'pageSize': pageSize }, null);
				}
				function _listvariantinventory(productID, page, pageSize) {
					return makeApiCall('GET', '/v1/products/:productID/variants/inventory', { 'productID': productID, 'page': page, 'pageSize': pageSize }, null);
				}
				function _getvariantinventory(productID, variantID) {
					return makeApiCall('GET', '/v1/products/:productID/variants/inventory/:variantID', { 'productID': productID, 'variantID': variantID }, null);
				}
				function _updatevariantinventory(productID, variantID, inventory) {
					return makeApiCall('PUT', '/v1/products/:productID/variants/inventory/:variantID/:inventory', { 'productID': productID, 'variantID': variantID, 'inventory': inventory }, null);
				}
				function _updatevariant(productID, variantID, variant) {
					return makeApiCall('PUT', '/v1/products/:productID/variants/:variantID', { 'productID': productID, 'variantID': variantID }, variant);
				}
				function _getvariant(productID, variantID) {
					return makeApiCall('GET', '/v1/products/:productID/variants/:variantID', { 'productID': productID, 'variantID': variantID }, null);
				}
				function _getinventory(productID) {
					return makeApiCall('GET', '/v1/products/:productID/inventory', { 'productID': productID }, null);
				}
				function _updateinventory(productID, inventory) {
					return makeApiCall('PUT', '/v1/products/:productID/inventory/:inventory', { 'productID': productID, 'inventory': inventory }, null);
				}
				function _saveassignment(productAssignment) {
					return makeApiCall('POST', '/v1/products/assignments', null, productAssignment);
				}
				function _listassignments(productID, userID, userGroupID, level, priceScheduleID, page, pageSize, buyerID) {
					return makeApiCall('GET', '/v1/products/assignments', { 'productID': productID, 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'priceScheduleID': priceScheduleID, 'page': page, 'pageSize': pageSize }, null);
				}
				function _deleteassignment(productID, userID, userGroupID, buyerID) {
					return makeApiCall('DELETE', '/v1/products/:productID/assignments/:buyerID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'productID': productID, 'userID': userID, 'userGroupID': userGroupID }, null);
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
					}
				;
				function _list(search, page, pageSize, searchOn, sortBy, filters, buyerID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/users', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'search': search, 'page': page, 'pageSize': pageSize, 'searchOn': searchOn, 'sortBy': sortBy, 'filters': filters }, null);
				}
				function _get(userID, buyerID) {
					if (!userID) {
						var errMessage = 'userID is a required field for OrderCloud.Users.Get';
						console.error(errMessage);
						var dfd = $q.defer();
						dfd.reject(errMessage);
						return dfd.promise;
					}
					return makeApiCall('GET', '/v1/buyers/:buyerID/users/:userID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userID': userID }, null);
				}
				function _update(userID, user, buyerID) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/users/:userID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userID': userID }, user);
				}
				function _create(user, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/users', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, user);
				}
				function _delete(userID, buyerID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/users/:userID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userID': userID }, null);
				}
				function _patch(userID, user, buyerID) {
					return makeApiCall('PATCH', '/v1/buyers/:buyerID/users/:userID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userID': userID }, user);
				}
				function _getaccesstoken(userID, tokenRequest, buyerID) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/users/:userID/accesstoken', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'userID': userID }, tokenRequest);
				}
			}
			/* INSERT FUNCTION MAKEAPICALL HERE */
			}
