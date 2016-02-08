angular.module('orderCloud.newsdk', ['ngResource','ngCookies'])
.factory('OrderCloud', orderCloud);
function orderCloud( $q, $resource, $cookieStore, appname, apiurl, authurl, ocscope, clientid ) {
	var impersonating = false;
	return {
		/* INSERT FUNCTION DECLARATIONS HERE */
			'Addresses': Addresses(),
			'AdminUsers': AdminUsers(),
			'ApiClients': ApiClients(),
			'AdminApiClients': AdminApiClients(),
			'ApprovalRules': ApprovalRules(),
			'Buyers': Buyers(),
			'Categories': Categories(),
			'CostCenters': CostCenters(),
			'Coupons': Coupons(),
			'CreditCards': CreditCards(),
			'EmailTemplates': EmailTemplates(),
			'Files': Files(),
			'SecurityProfiles': SecurityProfiles(),
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
			}
		;
		/* INSERT FUNCTIONS HERE */
			function Addresses() {
				return {
					'List': _list,
					'Get': _get,
					'Create': _create,
					'Update': _update,
					'Delete': _delete,
					'ListAssignments': _listassignments,
					'DeleteAssignment': _deleteassignment,
					'SaveAssignment': _saveassignment
					}
				;
				function _list(search, page, pageSize) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/addresses', { 'buyerID': BuyerID().Get() }, { 'search': search, 'page': page, 'pageSize': pageSize });
				}
				function _get(addressID) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/addresses/:addressID', { 'buyerID': BuyerID().Get(), 'addressID': addressID }, null);
				}
				function _create(address) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/addresses', { 'buyerID': BuyerID().Get() }, address);
				}
				function _update(addressID, address) {
					return makeApiCall('PUT', '/v1/buyers/:buyerID/addresses/:addressID', { 'buyerID': BuyerID().Get(), 'addressID': addressID }, address);
				}
				function _delete(addressID, overrideOrderConflict) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/addresses/:addressID', { 'buyerID': BuyerID().Get(), 'addressID': addressID }, { 'overrideOrderConflict': overrideOrderConflict });
				}
				function _listassignments(addressID, userID, userGroupID, level, isShipping, isBilling, page, pageSize) {
					return makeApiCall('GET', '/v1/buyers/:buyerID/addresses/assignments', { 'buyerID': BuyerID().Get() }, { 'addressID': addressID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'isShipping': isShipping, 'isBilling': isBilling, 'page': page, 'pageSize': pageSize });
				}
				function _deleteassignment(addressID, userID, userGroupID) {
					return makeApiCall('DELETE', '/v1/buyers/:buyerID/addresses/:addressID/assignments', { 'buyerID': BuyerID().Get(), 'addressID': addressID }, { 'userID': userID, 'userGroupID': userGroupID });
				}
				function _saveassignment(assignment) {
					return makeApiCall('POST', '/v1/buyers/:buyerID/addresses/assignments', { 'buyerID': BuyerID().Get() }, assignment);
				}
			}
			function AdminUsers() {
				return {
					'Get': _get,
					'Update': _update,
					'List': _list,
					'Delete': _delete,
					'Create': _create
					}
				;
				function _get(userID) {
					return makeApiCall('GET', '/v1/adminusers/:userID', { 'userID': userID }, null);
				}
				function _update(userID, user) {
					return makeApiCall('PUT', '/v1/adminusers/:userID', { 'userID': userID }, user);
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
						return makeApiCall('GET', '/v1/adminusers', null, listArgs);
					}
					function _delete(userID) {
						return makeApiCall('DELETE', '/v1/adminusers/:userID', { 'userID': userID }, null);
					}
					function _create(user) {
						return makeApiCall('POST', '/v1/adminusers', null, user);
					}
				}
				function ApiClients() {
					return {
						'List': _list,
						'Get': _get,
						'Create': _create,
						'Update': _update,
						'Delete': _delete
						}
					;
					function _list(page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/apiclients', { 'buyerID': BuyerID().Get() }, { 'page': page, 'pageSize': pageSize });
					}
					function _get(clientID) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/apiclients/:clientID', { 'buyerID': BuyerID().Get(), 'clientID': clientID }, null);
					}
					function _create(api) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/apiclients', { 'buyerID': BuyerID().Get() }, api);
					}
					function _update(clientID, client) {
						return makeApiCall('PUT', '/v1/buyers/:buyerID/apiclients/:clientID', { 'buyerID': BuyerID().Get(), 'clientID': clientID }, client);
					}
					function _delete(clientID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/apiclients/:clientID', { 'buyerID': BuyerID().Get(), 'clientID': clientID }, null);
					}
				}
				function AdminApiClients() {
					return {
						'List': _list,
						'Get': _get,
						'Create': _create,
						'Update': _update,
						'Delete': _delete
						}
					;
					function _list(page, pageSize) {
						return makeApiCall('GET', '/v1/apiclient', null, { 'page': page, 'pageSize': pageSize });
					}
					function _get(clientID) {
						return makeApiCall('GET', '/v1/apiclient/:clientID', { 'clientID': clientID }, null);
					}
					function _create(client) {
						return makeApiCall('POST', '/v1/apiclient', null, client);
					}
					function _update(clientID, client) {
						return makeApiCall('PUT', '/v1/apiclient/:clientID', { 'clientID': clientID }, client);
					}
					function _delete(clientID) {
						return makeApiCall('DELETE', '/v1/apiclient/:clientID', { 'clientID': clientID }, null);
					}
				}
				function ApprovalRules() {
					return {
						'List': _list,
						'Get': _get,
						'Create': _create,
						'Update': _update,
						'Delete': _delete
						}
					;
					function _list(search, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/approvalrules', { 'buyerID': BuyerID().Get() }, { 'search': search, 'page': page, 'pageSize': pageSize });
					}
					function _get(approvalRuleID) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', { 'buyerID': BuyerID().Get(), 'approvalRuleID': approvalRuleID }, null);
					}
					function _create(approvalRule) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/approvalrules', { 'buyerID': BuyerID().Get() }, approvalRule);
					}
					function _update(approvalRuleID, approvalRule) {
						return makeApiCall('PUT', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', { 'buyerID': BuyerID().Get(), 'approvalRuleID': approvalRuleID }, approvalRule);
					}
					function _delete(approvalRuleID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/approvalrules/:approvalRuleID', { 'buyerID': BuyerID().Get(), 'approvalRuleID': approvalRuleID }, null);
					}
				}
				function Buyers() {
					return {
						'List': _list,
						'Get': _get,
						'Create': _create,
						'Update': _update
						}
					;
					function _list(search, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers', null, { 'search': search, 'page': page, 'pageSize': pageSize });
					}
					function _get(buyerID) {
						return makeApiCall('GET', '/v1/buyers/:buyerID', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, null);
					}
					function _create(company) {
						return makeApiCall('POST', '/v1/buyers', null, company);
					}
					function _update(buyerID, company) {
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
					function _list(search, depth, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/categories', { 'buyerID': BuyerID().Get() }, { 'search': search, 'depth': depth, 'page': page, 'pageSize': pageSize });
					}
					function _listchildren(parentID, search, depth, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/categories/:parentID/categories', { 'buyerID': BuyerID().Get(), 'parentID': parentID }, { 'search': search, 'depth': depth, 'page': page, 'pageSize': pageSize });
					}
					function _get(categoryID) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/categories/:categoryID', { 'buyerID': BuyerID().Get(), 'categoryID': categoryID }, null);
					}
					function _create(category) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/categories', { 'buyerID': BuyerID().Get() }, category);
					}
					function _update(categoryID, category) {
						return makeApiCall('PUT', '/v1/buyers/:buyerID/categories/:categoryID', { 'buyerID': BuyerID().Get(), 'categoryID': categoryID }, category);
					}
					function _delete(categoryID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID', { 'buyerID': BuyerID().Get(), 'categoryID': categoryID }, null);
					}
					function _patch(categoryID, category) {
						return makeApiCall('PATCH', '/v1/buyers/:buyerID/categories/:categoryID', { 'buyerID': BuyerID().Get(), 'categoryID': categoryID }, category);
					}
					function _listproductassignments(categoryID, productID, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/categories/productassignments', { 'buyerID': BuyerID().Get() }, { 'categoryID': categoryID, 'productID': productID, 'page': page, 'pageSize': pageSize });
					}
					function _saveproductassignment(productAssignment) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/categories/productassignments', { 'buyerID': BuyerID().Get() }, productAssignment);
					}
					function _deleteproductassignment(categoryID, productID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID/productassignments/:productID', { 'buyerID': BuyerID().Get(), 'categoryID': categoryID, 'productID': productID }, null);
					}
					function _listassignments(categoryID, userID, userGroupID, level, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/categories/assignments', { 'buyerID': BuyerID().Get() }, { 'categoryID': categoryID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize });
					}
					function _deleteassignment(categoryID, userID, userGroupID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/categories/:categoryID/assignments', { 'buyerID': BuyerID().Get(), 'categoryID': categoryID }, { 'userID': userID, 'userGroupID': userGroupID });
					}
					function _saveassignment(categoryAssignment) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/categories/assignments', { 'buyerID': BuyerID().Get() }, categoryAssignment);
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
						}
					;
					function _list(search, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters', { 'buyerID': BuyerID().Get() }, { 'search': search, 'page': page, 'pageSize': pageSize });
					}
					function _get(costCenterID) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters/:costCenterID', { 'buyerID': BuyerID().Get(), 'costCenterID': costCenterID }, null);
					}
					function _create(costCenter) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/costcenters', { 'buyerID': BuyerID().Get() }, costCenter);
					}
					function _update(costCenterID, costCenter) {
						return makeApiCall('PUT', '/v1/buyers/:buyerID/costcenters/:costCenterID', { 'buyerID': BuyerID().Get(), 'costCenterID': costCenterID }, costCenter);
					}
					function _delete(costCenterID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/costcenters/:costCenterID', { 'buyerID': BuyerID().Get(), 'costCenterID': costCenterID }, null);
					}
					function _listassignments(costCenterID, userID, userGroupID, level, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/costcenters/assignments', { 'buyerID': BuyerID().Get() }, { 'costCenterID': costCenterID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize });
					}
					function _deleteassignment(costCenterID, userID, userGroupID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/costcenters/:costCenterID/assignments', { 'buyerID': BuyerID().Get(), 'costCenterID': costCenterID }, { 'userID': userID, 'userGroupID': userGroupID });
					}
					function _saveassignment(assignment) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/costcenters/assignments', { 'buyerID': BuyerID().Get() }, assignment);
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
						}
					;
					function _list(search, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/coupons', { 'buyerID': BuyerID().Get() }, { 'search': search, 'page': page, 'pageSize': pageSize });
					}
					function _get(couponID) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/coupons/:couponID', { 'buyerID': BuyerID().Get(), 'couponID': couponID }, null);
					}
					function _create(coupon) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/coupons', { 'buyerID': BuyerID().Get() }, coupon);
					}
					function _update(couponID, coupon) {
						return makeApiCall('PUT', '/v1/buyers/:buyerID/coupons/:couponID', { 'buyerID': BuyerID().Get(), 'couponID': couponID }, coupon);
					}
					function _delete(couponID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/coupons/:couponID', { 'buyerID': BuyerID().Get(), 'couponID': couponID }, null);
					}
					function _listproductassignments(couponID, productID, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/coupons/productassignments', { 'buyerID': BuyerID().Get() }, { 'couponID': couponID, 'productID': productID, 'page': page, 'pageSize': pageSize });
					}
					function _saveproductassignment(productAssignment) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/coupons/productassignments', { 'buyerID': BuyerID().Get() }, productAssignment);
					}
					function _deleteproductassignment(couponID, productID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/coupons/:couponID/productassignments/:productID', { 'buyerID': BuyerID().Get(), 'couponID': couponID, 'productID': productID }, null);
					}
					function _listcategoryassignments(couponID, categoryID, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/coupons/categoryassignments', { 'buyerID': BuyerID().Get() }, { 'couponID': couponID, 'categoryID': categoryID, 'page': page, 'pageSize': pageSize });
					}
					function _savecategoryassignment(categoryAssignment) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/coupons/categoryassignments', { 'buyerID': BuyerID().Get() }, categoryAssignment);
					}
					function _deletecategoryassignment(couponID, categoryID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/coupons/:couponID/categoryassignments/:categoryID', { 'buyerID': BuyerID().Get(), 'couponID': couponID, 'categoryID': categoryID }, null);
					}
					function _listassignments(couponID, userID, userGroupID, level, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/coupons/assignments', { 'buyerID': BuyerID().Get() }, { 'couponID': couponID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize });
					}
					function _saveassignment(assignment) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/coupons/assignments', { 'buyerID': BuyerID().Get() }, assignment);
					}
					function _deleteassignment(couponID, userID, userGroupID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/coupons/:couponID/assignments', { 'buyerID': BuyerID().Get(), 'couponID': couponID }, { 'userID': userID, 'userGroupID': userGroupID });
					}
				}
				function CreditCards() {
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
					function _list(page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards', { 'buyerID': BuyerID().Get() }, { 'page': page, 'pageSize': pageSize });
					}
					function _get(creditCardID) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards/:creditCardID', { 'buyerID': BuyerID().Get(), 'creditCardID': creditCardID }, null);
					}
					function _create(card) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/creditcards', { 'buyerID': BuyerID().Get() }, card);
					}
					function _update(creditCardID, card) {
						return makeApiCall('PUT', '/v1/buyers/:buyerID/creditcards/:creditCardID', { 'buyerID': BuyerID().Get(), 'creditCardID': creditCardID }, card);
					}
					function _delete(creditCardID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/creditcards/:creditCardID', { 'buyerID': BuyerID().Get(), 'creditCardID': creditCardID }, null);
					}
					function _listassignments(creditCardID, userID, userGroupID, level, page, pageSize) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/creditcards/assignments', { 'buyerID': BuyerID().Get() }, { 'creditCardID': creditCardID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize });
					}
					function _saveassignment(assignment) {
						return makeApiCall('POST', '/v1/buyers/:buyerID/creditcards/assignments', { 'buyerID': BuyerID().Get() }, assignment);
					}
					function _deleteassignment(creditCardID, userID, userGroupID) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/creditcards/:creditCardID/assignments', { 'buyerID': BuyerID().Get(), 'creditCardID': creditCardID }, { 'userID': userID, 'userGroupID': userGroupID });
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
					function _get(emailTemplateType) {
						return makeApiCall('GET', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', { 'buyerID': BuyerID().Get(), 'emailTemplateType': emailTemplateType }, null);
					}
					function _update(emailTemplateType, emailTemplate) {
						return makeApiCall('PUT', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', { 'buyerID': BuyerID().Get(), 'emailTemplateType': emailTemplateType }, emailTemplate);
					}
					function _patch(emailTemplateType, emailTemplate) {
						return makeApiCall('PATCH', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', { 'buyerID': BuyerID().Get(), 'emailTemplateType': emailTemplateType }, emailTemplate);
					}
					function _resettodefault(emailTemplateType) {
						return makeApiCall('DELETE', '/v1/buyers/:buyerID/emailtemplates/:emailTemplateType', { 'buyerID': BuyerID().Get(), 'emailTemplateType': emailTemplateType }, null);
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
						return makeApiCall('GET', '/v1/files', null, { 'page': page, 'pageSize': pageSize });
					}
					function _get(fileID) {
						return makeApiCall('GET', '/v1/files/:fileID', { 'fileID': fileID }, null);
					}
					function _postfiledata(filename) {
						return makeApiCall('POST', '/v1/files', null, { 'filename': filename });
					}
				}
				function SecurityProfiles() {
					return {
						'List': _list,
						'Get': _get,
						'Create': _create,
						'Delete': _delete,
						'Update': _update,
						'Patch': _patch
						}
					;
					function _list(search, page, pageSize, searchOn, sortBy, filters) {
						var listArgs = {
							'search': search,
							'page': page,
							'pageSize': pageSize,
							'searchOn': searchOn,
							'sortBy': sortBy
							};
							if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
							return makeApiCall('GET', '/v1/securityprofiles', null, listArgs);
						}
						function _get(securityProfileID) {
							return makeApiCall('GET', '/v1/securityprofiles/:securityProfileID', { 'securityProfileID': securityProfileID }, null);
						}
						function _create(securityProfile) {
							return makeApiCall('POST', '/v1/securityprofiles', null, securityProfile);
						}
						function _delete(securityProfileID) {
							return makeApiCall('DELETE', '/v1/securityprofiles/:securityProfileID', { 'securityProfileID': securityProfileID }, null);
						}
						function _update(securityProfileID, securityProfile) {
							return makeApiCall('PUT', '/v1/securityprofiles/:securityProfileID', { 'securityProfileID': securityProfileID }, securityProfile);
						}
						function _patch(securityProfileID, securityProfile) {
							return makeApiCall('PATCH', '/v1/securityprofiles/:securityProfileID', { 'securityProfileID': securityProfileID }, securityProfile);
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
							'UpdateOption': _updateoption,
							'GetOption': _getoption,
							'DeleteOption': _deleteoption
							}
						;
						function _list(page, pageSize) {
							return makeApiCall('GET', '/v1/specs', null, { 'page': page, 'pageSize': pageSize });
						}
						function _get(specID) {
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
							return makeApiCall('GET', '/v1/specs/productassignments', null, { 'specID': specID, 'productID': productID, 'page': page, 'pageSize': pageSize });
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
						function _updateoption(specID, optionID, option) {
							return makeApiCall('PUT', '/v1/specs/:specID/options/:optionID', { 'specID': specID, 'optionID': optionID }, option);
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
						function _list(search, page, pageSize, searchOn, sortBy, filters) {
							var listArgs = {
								'search': search,
								'page': page,
								'pageSize': pageSize,
								'searchOn': searchOn,
								'sortBy': sortBy
								};
								if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
								return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups', { 'buyerID': BuyerID().Get() }, listArgs);
							}
							function _get(userGroupID) {
								return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups/:userGroupID', { 'buyerID': BuyerID().Get(), 'userGroupID': userGroupID }, null);
							}
							function _update(userGroupID, group) {
								return makeApiCall('PUT', '/v1/buyers/:buyerID/usergroups/:userGroupID', { 'buyerID': BuyerID().Get(), 'userGroupID': userGroupID }, group);
							}
							function _patch(userGroupID, group) {
								return makeApiCall('PATCH', '/v1/buyers/:buyerID/usergroups/:userGroupID', { 'buyerID': BuyerID().Get(), 'userGroupID': userGroupID }, group);
							}
							function _create(group) {
								return makeApiCall('POST', '/v1/buyers/:buyerID/usergroups', { 'buyerID': BuyerID().Get() }, group);
							}
							function _delete(userGroupID) {
								return makeApiCall('DELETE', '/v1/buyers/:buyerID/usergroups/:userGroupID', { 'buyerID': BuyerID().Get(), 'userGroupID': userGroupID }, null);
							}
							function _listuserassignments(userGroupID, userID, page, pageSize) {
								return makeApiCall('GET', '/v1/buyers/:buyerID/usergroups/assignments', { 'buyerID': BuyerID().Get() }, { 'userGroupID': userGroupID, 'userID': userID, 'page': page, 'pageSize': pageSize });
							}
							function _deleteuserassignment(userGroupID, userID) {
								return makeApiCall('DELETE', '/v1/buyers/:buyerID/usergroups/:userGroupID/assignments/:userID', { 'buyerID': BuyerID().Get(), 'userGroupID': userGroupID, 'userID': userID }, null);
							}
							function _saveuserassignment(userGroupAssignment) {
								return makeApiCall('POST', '/v1/buyers/:buyerID/usergroups/assignments', { 'buyerID': BuyerID().Get() }, userGroupAssignment);
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
							function _get(orderID, lineItemID) {
								return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', { 'buyerID': BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, null);
							}
							function _list(orderID, page, pageSize) {
								return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID/lineitems', { 'buyerID': BuyerID().Get(), 'orderID': orderID }, { 'page': page, 'pageSize': pageSize });
							}
							function _create(orderID, lineItem) {
								return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/lineitems', { 'buyerID': BuyerID().Get(), 'orderID': orderID }, lineItem);
							}
							function _update(orderID, lineItemID, lineItem) {
								return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', { 'buyerID': BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, lineItem);
							}
							function _patch(orderID, lineItemID, lineItem) {
								return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', { 'buyerID': BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, lineItem);
							}
							function _delete(orderID, lineItemID) {
								return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID', { 'buyerID': BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, null);
							}
							function _setshippingaddress(orderID, lineItemID, address) {
								return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID/shipto', { 'buyerID': BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, address);
							}
							function _patchshippingaddress(orderID, lineItemID, address) {
								return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/lineitems/:lineItemID/shipto', { 'buyerID': BuyerID().Get(), 'orderID': orderID, 'lineItemID': lineItemID }, address);
							}
						}
						function Me() {
							return {
								'Get': _get,
								'ListCostCenters': _listcostcenters,
								'ListUserGroups': _listusergroups,
								'ListAddresses': _listaddresses,
								'ListCreditCards': _listcreditcards,
								'ListCategories': _listcategories,
								'ListSubcategories': _listsubcategories,
								'ListProducts': _listproducts,
								'GetProduct': _getproduct
								}
							;
							function _get() {
								return makeApiCall('GET', '/v1/me', null, null);
							}
							function _listcostcenters(search, page, pageSize) {
								return makeApiCall('GET', '/v1/me/costcenters', null, { 'search': search, 'page': page, 'pageSize': pageSize });
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
									return makeApiCall('GET', '/v1/me/usergroups', null, listArgs);
								}
								function _listaddresses(page, pageSize) {
									return makeApiCall('GET', '/v1/me/addresses', null, { 'page': page, 'pageSize': pageSize });
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
										return makeApiCall('GET', '/v1/me/creditcards', null, listArgs);
									}
									function _listcategories(search, depth, page, pageSize) {
										return makeApiCall('GET', '/v1/me/categories', null, { 'search': search, 'depth': depth, 'page': page, 'pageSize': pageSize });
									}
									function _listsubcategories(parentID, search, depth, page, pageSize) {
										return makeApiCall('GET', '/v1/me/categories/:parentID/categories', { 'parentID': parentID }, { 'search': search, 'depth': depth, 'page': page, 'pageSize': pageSize });
									}
									function _listproducts(search, categoryID, page, pageSize) {
										return makeApiCall('GET', '/v1/me/products', null, { 'search': search, 'categoryID': categoryID, 'page': page, 'pageSize': pageSize });
									}
									function _getproduct(productID) {
										return makeApiCall('GET', '/v1/me/products/:productID', { 'productID': productID }, null);
									}
								}
								function Orders() {
									return {
										'Get': _get,
										'List': _list,
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
										'PatchBillingAddress': _patchbillingaddress
										}
									;
									function _get(buyerID, orderID) {
										return makeApiCall('GET', '/v1/buyers/:buyerID/orders/:orderID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, null);
									}
									function _list(direction, buyerID, from, to, search, page, pageSize, searchOn, sortBy, filters) {
										var listArgs = {
											'search': search,
											'page': page,
											'pageSize': pageSize,
											'searchOn': searchOn,
											'sortBy': sortBy
											};
											if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
											listArgs['direction'] = direction;
											listArgs['buyerID'] = BuyerID().Get();
											listArgs['from'] = from;
											listArgs['to'] = to;
											return makeApiCall('GET', '/v1/orders', null, listArgs);
										}
										function _create(buyerID, order) {
											return makeApiCall('POST', '/v1/buyers/:buyerID/orders', { 'buyerID': buyerID ? buyerID : BuyerID().Get() }, order);
										}
										function _update(buyerID, orderID, order) {
											return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, order);
										}
										function _patch(buyerID, orderID, partialOrder) {
											return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, partialOrder);
										}
										function _delete(buyerID, orderID) {
											return makeApiCall('DELETE', '/v1/buyers/:buyerID/orders/:orderID', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, null);
										}
										function _submit(buyerID, orderID) {
											return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/submit', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, null);
										}
										function _approve(buyerID, orderID, comments) {
											return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/approve', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, { 'comments': comments });
										}
										function _decline(buyerID, orderID, comments) {
											return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/decline', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, { 'comments': comments });
										}
										function _cancel(buyerID, orderID) {
											return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/cancel', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, null);
										}
										function _ship(buyerID, orderID, shipment) {
											return makeApiCall('POST', '/v1/buyers/:buyerID/orders/:orderID/ship', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, shipment);
										}
										function _setshippingaddress(buyerID, orderID, address) {
											return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/shipto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, address);
										}
										function _patchshippingaddress(buyerID, orderID, address) {
											return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/shipto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, address);
										}
										function _setbillingaddress(buyerID, orderID, address) {
											return makeApiCall('PUT', '/v1/buyers/:buyerID/orders/:orderID/billto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, address);
										}
										function _patchbillingaddress(buyerID, orderID, address) {
											return makeApiCall('PATCH', '/v1/buyers/:buyerID/orders/:orderID/billto', { 'buyerID': buyerID ? buyerID : BuyerID().Get(), 'orderID': orderID }, address);
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
										function _list(page, pageSize) {
											return makeApiCall('GET', '/v1/priceschedules', null, { 'page': page, 'pageSize': pageSize });
										}
										function _get(priceScheduleID) {
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
											return makeApiCall('DELETE', '/v1/priceschedules/:priceScheduleID/PriceBreaks', { 'priceScheduleID': priceScheduleID }, { 'quantity': quantity });
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
										function _get(shipmentID) {
											return makeApiCall('GET', '/v1/buyers/:buyerID/shipments/:shipmentID', { 'buyerID': BuyerID().Get(), 'shipmentID': shipmentID }, null);
										}
										function _list(orderID, search, page, pageSize) {
											return makeApiCall('GET', '/v1/buyers/:buyerID/shipments', { 'buyerID': BuyerID().Get() }, { 'orderID': orderID, 'search': search, 'page': page, 'pageSize': pageSize });
										}
										function _create(shipment) {
											return makeApiCall('POST', '/v1/buyers/:buyerID/shipments', { 'buyerID': BuyerID().Get() }, shipment);
										}
										function _update(shipmentID, shipment) {
											return makeApiCall('PUT', '/v1/buyers/:buyerID/shipments/:shipmentID', { 'buyerID': BuyerID().Get(), 'shipmentID': shipmentID }, shipment);
										}
										function _patch(shipmentID, shipment) {
											return makeApiCall('PATCH', '/v1/buyers/:buyerID/shipments/:shipmentID', { 'buyerID': BuyerID().Get(), 'shipmentID': shipmentID }, shipment);
										}
										function _delete(shipmentID) {
											return makeApiCall('DELETE', '/v1/buyers/:buyerID/shipments/:shipmentID', { 'buyerID': BuyerID().Get(), 'shipmentID': shipmentID }, null);
										}
										function _saveitem(shipmentID, item) {
											return makeApiCall('POST', '/v1/buyers/:buyerID/shipments/:shipmentID/items', { 'buyerID': BuyerID().Get(), 'shipmentID': shipmentID }, item);
										}
										function _deleteitem(shipmentID, orderID, lineItemID) {
											return makeApiCall('DELETE', '/v1/buyers/:buyerID/shipments/:shipmentID/items/:orderID/:lineItemID', { 'buyerID': BuyerID().Get(), 'shipmentID': shipmentID, 'orderID': orderID, 'lineItemID': lineItemID }, null);
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
										function _list(search, page, pageSize, searchOn, sortBy, filters) {
											var listArgs = {
												'search': search,
												'page': page,
												'pageSize': pageSize,
												'searchOn': searchOn,
												'sortBy': sortBy
												};
												if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
												return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts', { 'buyerID': BuyerID().Get() }, listArgs);
											}
											function _get(spendingAccountID) {
												return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', { 'buyerID': BuyerID().Get(), 'spendingAccountID': spendingAccountID }, null);
											}
											function _create(spendingAccount) {
												return makeApiCall('POST', '/v1/buyers/:buyerID/spendingaccounts', { 'buyerID': BuyerID().Get() }, spendingAccount);
											}
											function _update(spendingAccountID, spendingAccount) {
												return makeApiCall('PUT', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', { 'buyerID': BuyerID().Get(), 'spendingAccountID': spendingAccountID }, spendingAccount);
											}
											function _delete(spendingAccountID) {
												return makeApiCall('DELETE', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID', { 'buyerID': BuyerID().Get(), 'spendingAccountID': spendingAccountID }, null);
											}
											function _listassignments(spendingAccountID, userID, userGroupID, level, page, pageSize) {
												return makeApiCall('GET', '/v1/buyers/:buyerID/spendingaccounts/assignments', { 'buyerID': BuyerID().Get() }, { 'spendingAccountID': spendingAccountID, 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'page': page, 'pageSize': pageSize });
											}
											function _saveassignment(assignment) {
												return makeApiCall('POST', '/v1/buyers/:buyerID/spendingaccounts/assignments', { 'buyerID': BuyerID().Get() }, assignment);
											}
											function _deleteassignment(spendingAccountID, userID, userGroupID) {
												return makeApiCall('DELETE', '/v1/buyers/:buyerID/spendingaccounts/:spendingAccountID/assignments', { 'buyerID': BuyerID().Get(), 'spendingAccountID': spendingAccountID }, { 'userID': userID, 'userGroupID': userGroupID });
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
												var listArgs = {
													'search': search,
													'page': page,
													'pageSize': pageSize,
													'searchOn': searchOn,
													'sortBy': sortBy
													};
													if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
													return makeApiCall('GET', '/v1/products', null, listArgs);
												}
												function _get(productID) {
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
												function _listvariants(productID, page, pageSize) {
													return makeApiCall('GET', '/v1/products/:productID/variants', { 'productID': productID }, { 'page': page, 'pageSize': pageSize });
												}
												function _listvariantinventory(productID, page, pageSize) {
													return makeApiCall('GET', '/v1/products/:productID/variants/inventory', { 'productID': productID }, { 'page': page, 'pageSize': pageSize });
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
												function _listassignments(productID, userID, userGroupID, level, priceScheduleID, page, pageSize) {
													return makeApiCall('GET', '/v1/products/assignments', null, { 'productID': productID, 'buyerID': BuyerID().Get(), 'userID': userID, 'userGroupID': userGroupID, 'level': level, 'priceScheduleID': priceScheduleID, 'page': page, 'pageSize': pageSize });
												}
												function _deleteassignment(productID, userID, userGroupID) {
													return makeApiCall('DELETE', '/v1/products/:productID/assignments/:buyerID', { 'buyerID': BuyerID().Get(), 'productID': productID }, { 'userID': userID, 'userGroupID': userGroupID });
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
												function _list(search, page, pageSize, searchOn, sortBy, filters) {
													var listArgs = {
														'search': search,
														'page': page,
														'pageSize': pageSize,
														'searchOn': searchOn,
														'sortBy': sortBy
														};
														if (filters && typeof(filters) == 'object') listArgs = angular.extend({}, filters, listArgs);
														return makeApiCall('GET', '/v1/buyers/:buyerID/users', { 'buyerID': BuyerID().Get() }, listArgs);
													}
													function _get(userID) {
														return makeApiCall('GET', '/v1/buyers/:buyerID/users/:userID', { 'buyerID': BuyerID().Get(), 'userID': userID }, null);
													}
													function _update(userID, user) {
														return makeApiCall('PUT', '/v1/buyers/:buyerID/users/:userID', { 'buyerID': BuyerID().Get(), 'userID': userID }, user);
													}
													function _create(user) {
														return makeApiCall('POST', '/v1/buyers/:buyerID/users', { 'buyerID': BuyerID().Get() }, user);
													}
													function _delete(userID) {
														return makeApiCall('DELETE', '/v1/buyers/:buyerID/users/:userID', { 'buyerID': BuyerID().Get(), 'userID': userID }, null);
													}
													function _patch(userID, user) {
														return makeApiCall('PATCH', '/v1/buyers/:buyerID/users/:userID', { 'buyerID': BuyerID().Get(), 'userID': userID }, user);
													}
													function _getaccesstoken(userID, tokenRequest) {
														return makeApiCall('POST', '/v1/buyers/:buyerID/users/:userID/accesstoken', { 'buyerID': BuyerID().Get(), 'userID': userID }, tokenRequest);
													}
												}
												/* INSERT FUNCTION MAKEAPICALL HERE */
												}
