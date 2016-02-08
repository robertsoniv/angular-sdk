# OrderCloud SDK

An AngularJs SDK for OrderCloud API
***

# Table of Contents

- [Getting Started](#getting-started)

- [Requirements](#requirements)

- [Cache](#cache)

- [SecurityProfiles](#securityprofiles)

  - [Get a Single Security Profile](#get-a-single-security-profile)

  - [Get a List of Security Profiles](#get-a-list-of-security-profiles)

  - [Create New Security Profile](#create-new-security-profile)

  - [Create or Update Security Profile](#create-or-update-security-profile)

  - [Delete Security Profile](#delete-security-profile)

  - [Partially Update Security Profile](#partially-update-security-profile)

- [ForgottenPassword](#forgottenpassword)

  - [Send Verification Code](#send-verification-code)

  - [Reset Password](#reset-password)

- [BuyerAPIClient](#buyerapiclient)

  - [Get a Single Buyer API Client](#get-a-single-buyer-api-client)

  - [Get a List of Buyer API Clients](#get-a-list-of-buyer-api-clients)

  - [Create New Buyer API Client](#create-new-buyer-api-client)

  - [Create or Update Buyer API Client](#create-or-update-buyer-api-client)

  - [Delete Buyer API Client](#delete-buyer-api-client)

- [AdminAPIClient](#adminapiclient)

  - [Get a Single Admin API Client](#get-a-single-admin-api-client)

  - [Get a List of Admin API Clients](#get-a-list-of-admin-api-clients)

  - [Create New Admin API Client](#create-new-admin-api-client)

  - [Create or Update Admin API Client](#create-or-update-admin-api-client)

  - [Delete Admin API Client](#delete-admin-api-client)

- [Me](#me)

  - [Get the Current Authenticated User](#get-the-current-authenticated-user)

  - [List Cost Centers](#list-cost-centers)

  - [List User Groups](#list-user-groups)

  - [List Addresses](#list-addresses)

  - [List Credit Cards](#list-credit-cards)

  - [List Categories](#list-categories)

  - [List Subcategories](#list-subcategories)

  - [List Products](#list-products)

  - [Get Product](#get-product)

- [Orders](#orders)

  - [Get a Single Order](#get-a-single-order)

  - [Get a List of Orders](#get-a-list-of-orders)

  - [Create New Order](#create-new-order)

  - [Create or Update Order](#create-or-update-order)

  - [Delete Order](#delete-order)

  - [Partially Update Order](#partially-update-order)

  - [Submit Order](#submit-order)

  - [Approve Order](#approve-order)

  - [Decline Order](#decline-order)

  - [Cancel Order](#cancel-order)

  - [Ship Order](#ship-order)

  - [Set Shipping Address](#set-shipping-address)

  - [Patch Shipping Address](#patch-shipping-address)

  - [Set Billing Address](#set-billing-address)

  - [Patch Billing Address](#patch-billing-address)

- [LineItems](#lineitems)

  - [Get a Single Line Item](#get-a-single-line-item)

  - [Get a List of Line Items](#get-a-list-of-line-items)

  - [Create New Line Item](#create-new-line-item)

  - [Create or Update Line Item](#create-or-update-line-item)

  - [Delete Line Item](#delete-line-item)

  - [Partially Update Line Item](#partially-update-line-item)

  - [Set Shipping Address](#set-shipping-address)

  - [Patch Shipping Address](#patch-shipping-address)

- [Shipments](#shipments)

  - [Get a Single Shipment](#get-a-single-shipment)

  - [Get a List of Shipments](#get-a-list-of-shipments)

  - [Create New Shipment](#create-new-shipment)

  - [Create or Update Shipment](#create-or-update-shipment)

  - [Delete Shipment](#delete-shipment)

  - [Partially Update Shipment](#partially-update-shipment)

  - [Save Item](#save-item)

  - [Delete Item](#delete-item)

- [Products](#products)

  - [Get a Single Product](#get-a-single-product)

  - [Get a List of Products](#get-a-list-of-products)

  - [Create New Product](#create-new-product)

  - [Create or Update Product](#create-or-update-product)

  - [Delete Product](#delete-product)

  - [Partially Update Product](#partially-update-product)

  - [List Variants](#list-variants)

  - [List Variant Inventory](#list-variant-inventory)

  - [Get Variant Inventory](#get-variant-inventory)

  - [Update Variant Inventory](#update-variant-inventory)

  - [Update Variant](#update-variant)

  - [Get Variant](#get-variant)

  - [Get Inventory](#get-inventory)

  - [Update Inventory](#update-inventory)

  - [Save Assignment](#save-assignment)

  - [List Assignments](#list-assignments)

  - [Delete Assignment](#delete-assignment)

- [PriceSchedules](#priceschedules)

  - [Get a Single Price Schedule](#get-a-single-price-schedule)

  - [Get a List of Price Schedules](#get-a-list-of-price-schedules)

  - [Create New Price Schedule](#create-new-price-schedule)

  - [Create or Update Price Schedule](#create-or-update-price-schedule)

  - [Delete Price Schedule](#delete-price-schedule)

  - [Partially Update Price Schedule](#partially-update-price-schedule)

  - [Save Price Break](#save-price-break)

  - [Delete Price Break](#delete-price-break)

- [Specs](#specs)

  - [Get a Single Spec](#get-a-single-spec)

  - [Get a List of Specs](#get-a-list-of-specs)

  - [Create New Spec](#create-new-spec)

  - [Create or Update Spec](#create-or-update-spec)

  - [Delete Spec](#delete-spec)

  - [Partially Update Spec](#partially-update-spec)

  - [List Product Assignments](#list-product-assignments)

  - [Delete Product Assignment](#delete-product-assignment)

  - [Save Product Assignment](#save-product-assignment)

  - [Create Option](#create-option)

  - [Update Option](#update-option)

  - [Get Option](#get-option)

  - [Delete Option](#delete-option)

- [Categories](#categories)

  - [Get a Single Category](#get-a-single-category)

  - [Get a List of Categories](#get-a-list-of-categories)

  - [Create New Category](#create-new-category)

  - [Create or Update Category](#create-or-update-category)

  - [Delete Category](#delete-category)

  - [List Children](#list-children)

  - [Partially Update Category](#partially-update-category)

  - [List Product Assignments](#list-product-assignments)

  - [Save Product Assignment](#save-product-assignment)

  - [Delete Product Assignment](#delete-product-assignment)

  - [List Assignments](#list-assignments)

  - [Delete Assignment](#delete-assignment)

  - [Save Assignment](#save-assignment)

- [Buyers](#buyers)

  - [Get a Single Buyer](#get-a-single-buyer)

  - [Get a List of Buyers](#get-a-list-of-buyers)

  - [Create New Buyer](#create-new-buyer)

  - [Create or Update Buyer](#create-or-update-buyer)

- [Users](#users)

  - [Get a Single User](#get-a-single-user)

  - [Get a List of Users](#get-a-list-of-users)

  - [Create New User](#create-new-user)

  - [Create or Update User](#create-or-update-user)

  - [Delete User](#delete-user)

  - [Partially Update User](#partially-update-user)

  - [Get Access Token](#get-access-token)

- [UserGroups](#usergroups)

  - [Get a Single User Group](#get-a-single-user-group)

  - [Get a List of User Groups](#get-a-list-of-user-groups)

  - [Create New User Group](#create-new-user-group)

  - [Create or Update User Group](#create-or-update-user-group)

  - [Delete User Group](#delete-user-group)

  - [Partially Update User Group](#partially-update-user-group)

  - [List User Assignments](#list-user-assignments)

  - [Delete User Assignment](#delete-user-assignment)

  - [Save User Assignment](#save-user-assignment)

- [Addresses](#addresses)

  - [Get a Single Address](#get-a-single-address)

  - [Get a List of Addresses](#get-a-list-of-addresses)

  - [Create New Address](#create-new-address)

  - [Create or Update Address](#create-or-update-address)

  - [Delete Address](#delete-address)

  - [List Assignments](#list-assignments)

  - [Delete Assignment](#delete-assignment)

  - [Save Assignment](#save-assignment)

- [SpendingAccounts](#spendingaccounts)

  - [Get a Single Spending Account](#get-a-single-spending-account)

  - [Get a List of Spending Accounts](#get-a-list-of-spending-accounts)

  - [Create New Spending Account](#create-new-spending-account)

  - [Create or Update Spending Account](#create-or-update-spending-account)

  - [Delete Spending Account](#delete-spending-account)

  - [List Assignments](#list-assignments)

  - [Save Assignment](#save-assignment)

  - [Delete Assignment](#delete-assignment)

- [AdminUsers](#adminusers)

  - [Get a Single Admin User](#get-a-single-admin-user)

  - [Get a List of Admin Users](#get-a-list-of-admin-users)

  - [Create New Admin User](#create-new-admin-user)

  - [Create or Update Admin User](#create-or-update-admin-user)

  - [Delete Admin User](#delete-admin-user)

- [Coupons](#coupons)

  - [Get a Single Coupon](#get-a-single-coupon)

  - [Get a List of Coupons](#get-a-list-of-coupons)

  - [Create New Coupon](#create-new-coupon)

  - [Create or Update Coupon](#create-or-update-coupon)

  - [Delete Coupon](#delete-coupon)

  - [List Product Assignments](#list-product-assignments)

  - [Save Product Assignment](#save-product-assignment)

  - [Delete Product Assignment](#delete-product-assignment)

  - [List Category Assignments](#list-category-assignments)

  - [Save Category Assignment](#save-category-assignment)

  - [Delete Category Assignment](#delete-category-assignment)

  - [List Assignments](#list-assignments)

  - [Save Assignment](#save-assignment)

  - [Delete Assignment](#delete-assignment)

- [CostCenters](#costcenters)

  - [Get a Single Cost Center](#get-a-single-cost-center)

  - [Get a List of Cost Centers](#get-a-list-of-cost-centers)

  - [Create New Cost Center](#create-new-cost-center)

  - [Create or Update Cost Center](#create-or-update-cost-center)

  - [Delete Cost Center](#delete-cost-center)

  - [List Assignments](#list-assignments)

  - [Delete Assignment](#delete-assignment)

  - [Save Assignment](#save-assignment)

- [ApprovalRules](#approvalrules)

  - [Get a Single Approval Rule](#get-a-single-approval-rule)

  - [Get a List of Approval Rules](#get-a-list-of-approval-rules)

  - [Create New Approval Rule](#create-new-approval-rule)

  - [Create or Update Approval Rule](#create-or-update-approval-rule)

  - [Delete Approval Rule](#delete-approval-rule)

- [CreditCards](#creditcards)

  - [Get a Single Credit Card](#get-a-single-credit-card)

  - [Get a List of Credit Cards](#get-a-list-of-credit-cards)

  - [Create New Credit Card](#create-new-credit-card)

  - [Create or Update Credit Card](#create-or-update-credit-card)

  - [Delete Credit Card](#delete-credit-card)

  - [List Assignments](#list-assignments)

  - [Save Assignment](#save-assignment)

  - [Delete Assignment](#delete-assignment)

- [Files](#files)

  - [Get a Single File](#get-a-single-file)

  - [Get a List of Files](#get-a-list-of-files)

  - [Post File Data](#post-file-data)

- [EmailTemplates](#emailtemplates)

  - [Get a Single Email Template](#get-a-single-email-template)

  - [Create or Update Email Template](#create-or-update-email-template)

  - [Partially Update Email Template](#partially-update-email-template)

  - [Reset To Default](#reset-to-default)

- [Extending the OrderCloud Data Model](#extending-the-ordercloud-data-model)

***

# Getting Started

```js
$ bower install ordercloud-angular-sdk --save-dev
```

Or just include the output in the dist folder directly in your project.

# REQUIREMENTS

This sdk is to always be used in conjunction with another angular project.
You must also define some variable constants in the referecing application.

```js
angular.module('orderCloud', [])
.constant('clientid', '...')
.constant('authurl', '...')
.constant('apiurl', '...')
```

In some cases, your app will need to access multiple buyer companies, so the buyerid is not stored as a constant. Instead, the buyerid is stored in an AngularJS factory named BuyerID within this sdk.
In order to set an initial/default buyerid, add a run function in addition to the above constants.

```js
.run(function(BuyerID) { OrderCloud.BuyerID.Set('BUYERIDHERE'); })
```

The BuyerID function can be used within any AngularJS controller and/or factory within your application in order to change which buyerid should be used.
Simply inject the BuyerID factory into your controller or factory and call OrderCloud.BuyerID.Set('NEWIDHERE');.
If needed, OrderCloud.BuyerID().Get() will return the buyerid that is currently set.

***

# API RESOURCES AND METHODS

***

# SecurityProfiles

```js
angular.module('orderCloud.sdk).factory(SecurityProfiles, SecurityProfilesFactory)
```


## Get a Single Security Profile

```js
OrderCloud.SecurityProfiles.Get(securityProfileID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|securityProfileID|string|ID of the security profile.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "FullAccess": false,
  "ProductAdmin": false,
  "ProductReader": false,
  "InventoryAdmin": false,
  "ProductAssignmentAdmin": false,
  "BuyerAdmin": false,
  "BuyerReader": false,
  "CategoryAdmin": false,
  "CategoryReader": false,
  "AddressAdmin": false,
  "AddressReader": false,
  "CostCenterAdmin": false,
  "CostCenterReader": false,
  "CouponAdmin": false,
  "CouponReader": false,
  "CreditCardAdmin": false,
  "CreditCardReader": false,
  "EmailTemplateAdmin": false,
  "EmailTemplateReader": false,
  "PriceScheduleAdmin": false,
  "PriceScheduleReader": false,
  "SpendingAccountAdmin": false,
  "SpendingAccountReader": false,
  "BuyerUserAdmin": false,
  "BuyerUserReader": false,
  "UserGroupAdmin": false,
  "UserGroupReader": false,
  "ApprovalRuleAdmin": false,
  "ApprovalRuleReader": false,
  "PermissionAdmin": false,
  "OverrideUnitPrice": false,
  "ChangeCreditCardOrders": false,
  "ChangeNonCreditCardOrders": false,
  "OverrideShipping": false,
  "OverrideTax": false,
  "ApproveAllOrders": false,
  "SecurityProfileAdmin": false
}
```

## Get a List of Security Profiles

```js
OrderCloud.SecurityProfiles.List(listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "FullAccess": false,
      "ProductAdmin": false,
      "ProductReader": false,
      "InventoryAdmin": false,
      "ProductAssignmentAdmin": false,
      "BuyerAdmin": false,
      "BuyerReader": false,
      "CategoryAdmin": false,
      "CategoryReader": false,
      "AddressAdmin": false,
      "AddressReader": false,
      "CostCenterAdmin": false,
      "CostCenterReader": false,
      "CouponAdmin": false,
      "CouponReader": false,
      "CreditCardAdmin": false,
      "CreditCardReader": false,
      "EmailTemplateAdmin": false,
      "EmailTemplateReader": false,
      "PriceScheduleAdmin": false,
      "PriceScheduleReader": false,
      "SpendingAccountAdmin": false,
      "SpendingAccountReader": false,
      "BuyerUserAdmin": false,
      "BuyerUserReader": false,
      "UserGroupAdmin": false,
      "UserGroupReader": false,
      "ApprovalRuleAdmin": false,
      "ApprovalRuleReader": false,
      "PermissionAdmin": false,
      "OverrideUnitPrice": false,
      "ChangeCreditCardOrders": false,
      "ChangeNonCreditCardOrders": false,
      "OverrideShipping": false,
      "OverrideTax": false,
      "ApproveAllOrders": false,
      "SecurityProfileAdmin": false
    }
  ]
}
```

## Create New Security Profile

```js
OrderCloud.SecurityProfiles.Create(securityProfile).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "FullAccess": false,
  "ProductAdmin": false,
  "ProductReader": false,
  "InventoryAdmin": false,
  "ProductAssignmentAdmin": false,
  "BuyerAdmin": false,
  "BuyerReader": false,
  "CategoryAdmin": false,
  "CategoryReader": false,
  "AddressAdmin": false,
  "AddressReader": false,
  "CostCenterAdmin": false,
  "CostCenterReader": false,
  "CouponAdmin": false,
  "CouponReader": false,
  "CreditCardAdmin": false,
  "CreditCardReader": false,
  "EmailTemplateAdmin": false,
  "EmailTemplateReader": false,
  "PriceScheduleAdmin": false,
  "PriceScheduleReader": false,
  "SpendingAccountAdmin": false,
  "SpendingAccountReader": false,
  "BuyerUserAdmin": false,
  "BuyerUserReader": false,
  "UserGroupAdmin": false,
  "UserGroupReader": false,
  "ApprovalRuleAdmin": false,
  "ApprovalRuleReader": false,
  "PermissionAdmin": false,
  "OverrideUnitPrice": false,
  "ChangeCreditCardOrders": false,
  "ChangeNonCreditCardOrders": false,
  "OverrideShipping": false,
  "OverrideTax": false,
  "ApproveAllOrders": false,
  "SecurityProfileAdmin": false
}
```

## Create or Update Security Profile

```js
OrderCloud.SecurityProfiles.Update(securityProfileID,securityProfile).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|securityProfileID|string|ID of the security profile.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "FullAccess": false,
  "ProductAdmin": false,
  "ProductReader": false,
  "InventoryAdmin": false,
  "ProductAssignmentAdmin": false,
  "BuyerAdmin": false,
  "BuyerReader": false,
  "CategoryAdmin": false,
  "CategoryReader": false,
  "AddressAdmin": false,
  "AddressReader": false,
  "CostCenterAdmin": false,
  "CostCenterReader": false,
  "CouponAdmin": false,
  "CouponReader": false,
  "CreditCardAdmin": false,
  "CreditCardReader": false,
  "EmailTemplateAdmin": false,
  "EmailTemplateReader": false,
  "PriceScheduleAdmin": false,
  "PriceScheduleReader": false,
  "SpendingAccountAdmin": false,
  "SpendingAccountReader": false,
  "BuyerUserAdmin": false,
  "BuyerUserReader": false,
  "UserGroupAdmin": false,
  "UserGroupReader": false,
  "ApprovalRuleAdmin": false,
  "ApprovalRuleReader": false,
  "PermissionAdmin": false,
  "OverrideUnitPrice": false,
  "ChangeCreditCardOrders": false,
  "ChangeNonCreditCardOrders": false,
  "OverrideShipping": false,
  "OverrideTax": false,
  "ApproveAllOrders": false,
  "SecurityProfileAdmin": false
}
```

## Delete Security Profile

```js
OrderCloud.SecurityProfiles.Delete(securityProfileID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|securityProfileID|string|ID of the security profile.|
## Partially Update Security Profile

```js
OrderCloud.SecurityProfiles.Patch(securityProfileID,securityProfile).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|securityProfileID|string|ID of the security profile.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "FullAccess": false,
  "ProductAdmin": false,
  "ProductReader": false,
  "InventoryAdmin": false,
  "ProductAssignmentAdmin": false,
  "BuyerAdmin": false,
  "BuyerReader": false,
  "CategoryAdmin": false,
  "CategoryReader": false,
  "AddressAdmin": false,
  "AddressReader": false,
  "CostCenterAdmin": false,
  "CostCenterReader": false,
  "CouponAdmin": false,
  "CouponReader": false,
  "CreditCardAdmin": false,
  "CreditCardReader": false,
  "EmailTemplateAdmin": false,
  "EmailTemplateReader": false,
  "PriceScheduleAdmin": false,
  "PriceScheduleReader": false,
  "SpendingAccountAdmin": false,
  "SpendingAccountReader": false,
  "BuyerUserAdmin": false,
  "BuyerUserReader": false,
  "UserGroupAdmin": false,
  "UserGroupReader": false,
  "ApprovalRuleAdmin": false,
  "ApprovalRuleReader": false,
  "PermissionAdmin": false,
  "OverrideUnitPrice": false,
  "ChangeCreditCardOrders": false,
  "ChangeNonCreditCardOrders": false,
  "OverrideShipping": false,
  "OverrideTax": false,
  "ApproveAllOrders": false,
  "SecurityProfileAdmin": false
}
```

# ForgottenPassword

```js
angular.module('orderCloud.sdk).factory(ForgottenPassword, ForgottenPasswordFactory)
```


## Send Verification Code

```js
OrderCloud.ForgottenPassword.SendVerificationCode(passwordResetRequest).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ClientID": "…",
  "Email": "…",
  "Username": "…",
  "URL": "…"
}
```

## Reset Password

```js
OrderCloud.ForgottenPassword.ResetPassword(verificationCode,passwordReset).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|verificationCode|string|Verification code of the forgotten password.|
### Request Body Sample

```json
{
  "ClientID": "…",
  "Username": "…",
  "Password": "…"
}
```

# BuyerAPIClient

```js
angular.module('orderCloud.sdk).factory(BuyerAPIClient, BuyerAPIClientFactory)
```


## Get a Single Buyer API Client

```js
OrderCloud.BuyerAPIClient.Get(clientID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|clientID|string|ID of the API client|
### Response Body Sample

```json
{
  "ID": "…",
  "ClientSecret": "…",
  "AccessTokenDuration": 0,
  "Active": false,
  "AppName": "…",
  "Claims": [
    "FullAccess"
  ],
  "RefreshTokenDuration": 0,
  "DefaultUserContextID": "…"
}
```

## Get a List of Buyer API Clients

```js
OrderCloud.BuyerAPIClient.List(page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "ClientSecret": "…",
      "AccessTokenDuration": 0,
      "Active": false,
      "AppName": "…",
      "Claims": [
        "FullAccess"
      ],
      "RefreshTokenDuration": 0,
      "DefaultUserContextID": "…"
    }
  ]
}
```

## Create New Buyer API Client

```js
OrderCloud.BuyerAPIClient.Create(api).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ClientSecret": "…",
  "AccessTokenDuration": 0,
  "Active": false,
  "AppName": "…",
  "Claims": [
    "FullAccess"
  ],
  "RefreshTokenDuration": 0,
  "DefaultUserContextID": "…"
}
```

## Create or Update Buyer API Client

```js
OrderCloud.BuyerAPIClient.Update(clientID,client).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|clientID|string|ID of the API client|
### Request Body Sample

```json
{
  "ClientSecret": "…",
  "AccessTokenDuration": 0,
  "Active": false,
  "AppName": "…",
  "Claims": [
    "FullAccess"
  ],
  "RefreshTokenDuration": 0,
  "DefaultUserContextID": "…"
}
```

## Delete Buyer API Client

```js
OrderCloud.BuyerAPIClient.Delete(clientID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|clientID|string|ID of the API client|
# AdminAPIClient

```js
angular.module('orderCloud.sdk).factory(AdminAPIClient, AdminAPIClientFactory)
```


## Get a Single Admin API Client

```js
OrderCloud.AdminAPIClient.Get(clientID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|clientID|string|ID of the API client|
### Response Body Sample

```json
{
  "ID": "…",
  "ClientSecret": "…",
  "AccessTokenDuration": 0,
  "Active": false,
  "AppName": "…",
  "Claims": [
    "FullAccess"
  ],
  "RefreshTokenDuration": 0,
  "DefaultUserContextID": "…"
}
```

## Get a List of Admin API Clients

```js
OrderCloud.AdminAPIClient.List(page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "ClientSecret": "…",
      "AccessTokenDuration": 0,
      "Active": false,
      "AppName": "…",
      "Claims": [
        "FullAccess"
      ],
      "RefreshTokenDuration": 0,
      "DefaultUserContextID": "…"
    }
  ]
}
```

## Create New Admin API Client

```js
OrderCloud.AdminAPIClient.Create(client).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ClientSecret": "…",
  "AccessTokenDuration": 0,
  "Active": false,
  "AppName": "…",
  "Claims": [
    "FullAccess"
  ],
  "RefreshTokenDuration": 0,
  "DefaultUserContextID": "…"
}
```

## Create or Update Admin API Client

```js
OrderCloud.AdminAPIClient.Update(clientID,client).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|clientID|string|ID of the API client|
### Request Body Sample

```json
{
  "ClientSecret": "…",
  "AccessTokenDuration": 0,
  "Active": false,
  "AppName": "…",
  "Claims": [
    "FullAccess"
  ],
  "RefreshTokenDuration": 0,
  "DefaultUserContextID": "…"
}
```

## Delete Admin API Client

```js
OrderCloud.AdminAPIClient.Delete(clientID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|clientID|string|ID of the API client|
# Me

```js
angular.module('orderCloud.sdk).factory(Me, MeFactory)
```

"Me" is a container for read-only endpoints that return a filtered view of things that the current buyer user is allowed to see, i.e. things that they are assigned to either directly or as a member of a buyer organization or user group.

## Get the Current Authenticated User

```js
OrderCloud.Me.Get().then(successFn).catch(errorFn);
```

### Response Body Sample

```json
{
  "ID": "…",
  "Username": "…",
  "FirstName": "…",
  "LastName": "…",
  "Email": "…",
  "Phone": "…",
  "TermsAccepted": null,
  "Active": false,
  "xp": null,
  "SecurityProfileID": "…"
}
```

## List Cost Centers

```js
OrderCloud.Me.ListCostCenters(search,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…"
    }
  ]
}
```

## List User Groups

```js
OrderCloud.Me.ListUserGroups(listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "IsReportingGroup": false,
      "xp": null
    }
  ]
}
```

## List Addresses

```js
OrderCloud.Me.ListAddresses(page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "Shipping": false,
      "Biling": false,
      "ID": "…",
      "CompanyName": "…",
      "FirstName": "…",
      "LastName": "…",
      "Street1": "…",
      "Street2": "…",
      "City": "…",
      "State": "…",
      "Zip": "…",
      "Country": "…",
      "Phone": "…",
      "AddressName": "…"
    }
  ]
}
```

## List Credit Cards

```js
OrderCloud.Me.ListCreditCards(listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Token": "…",
      "CardType": "…",
      "PartialAccountNumber": "…",
      "CardholderName": "…",
      "ExpirationDate": null,
      "xp": null
    }
  ]
}
```

## List Categories

```js
OrderCloud.Me.ListCategories(search,depth,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|depth|string|Depth of the me.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "xp": null,
      "ListOrder": 1,
      "Active": false,
      "ParentID": "…",
      "ChildCount": 0
    }
  ]
}
```

## List Subcategories

```js
OrderCloud.Me.ListSubcategories(parentID,search,depth,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|parentID|string|ID of the parent.|
|search|string|Word or phrase to search for.|
|depth|string|Depth of the me.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "xp": null,
      "ListOrder": 1,
      "Active": false,
      "ParentID": "…",
      "ChildCount": 0
    }
  ]
}
```

## List Products

```js
OrderCloud.Me.ListProducts(search,categoryID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|categoryID|string|ID of the category.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ReplenishmentPriceSchedule": {
        "ID": "…",
        "Name": "…",
        "ApplyTax": false,
        "ApplyShipping": false,
        "MinQuantity": null,
        "MaxQuantity": null,
        "UseCumulativeQuantity": false,
        "RestrictedQuantity": false,
        "OrderType": "Standard",
        "PriceBreaks": [
          {
            "Quantity": 0,
            "Price": 0.0
          }
        ],
        "xp": null
      },
      "StandardPriceSchedule": {
        "ID": "…",
        "Name": "…",
        "ApplyTax": false,
        "ApplyShipping": false,
        "MinQuantity": null,
        "MaxQuantity": null,
        "UseCumulativeQuantity": false,
        "RestrictedQuantity": false,
        "OrderType": "Standard",
        "PriceBreaks": [
          {
            "Quantity": 0,
            "Price": 0.0
          }
        ],
        "xp": null
      },
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "QuantityMultiplier": 0,
      "ShipWeight": null,
      "Active": false,
      "Type": "Static",
      "InventoryEnabled": false,
      "InventoryNotificationPoint": null,
      "VariantLevelInventory": false,
      "xp": null,
      "AllowOrderExceedInventory": false,
      "DisplayInventory": false
    }
  ]
}
```

## Get Product

```js
OrderCloud.Me.GetProduct(productID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
### Response Body Sample

```json
{
  "ReplenishmentPriceSchedule": {
    "ID": "…",
    "Name": "…",
    "ApplyTax": false,
    "ApplyShipping": false,
    "MinQuantity": null,
    "MaxQuantity": null,
    "UseCumulativeQuantity": false,
    "RestrictedQuantity": false,
    "OrderType": "Standard",
    "PriceBreaks": [
      {
        "Quantity": 0,
        "Price": 0.0
      }
    ],
    "xp": null
  },
  "StandardPriceSchedule": {
    "ID": "…",
    "Name": "…",
    "ApplyTax": false,
    "ApplyShipping": false,
    "MinQuantity": null,
    "MaxQuantity": null,
    "UseCumulativeQuantity": false,
    "RestrictedQuantity": false,
    "OrderType": "Standard",
    "PriceBreaks": [
      {
        "Quantity": 0,
        "Price": 0.0
      }
    ],
    "xp": null
  },
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "QuantityMultiplier": 0,
  "ShipWeight": null,
  "Active": false,
  "Type": "Static",
  "InventoryEnabled": false,
  "InventoryNotificationPoint": null,
  "VariantLevelInventory": false,
  "xp": null,
  "AllowOrderExceedInventory": false,
  "DisplayInventory": false
}
```

# Orders

```js
angular.module('orderCloud.sdk).factory(Orders, OrdersFactory)
```

An Order represents a business transaction between two parties. It typically consists of a collection of Line Items, a Payment Method, Tax and Shipping information, etc. The OrderCloud platform defines various "actions" that can be performed against Orders, such as Submit, Approve, Ship, etc. These actions transform the state of the order and often trigger external events such as financial transactions.

## Get a Single Order

```js
OrderCloud.Orders.Get(orderID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Response Body Sample

```json
{
  "ID": "…",
  "Type": "Standard",
  "FromUserID": "…",
  "FromUserFirstName": "…",
  "FromUserLastName": "…",
  "BillingAddress": {
    "ID": "…",
    "CompanyName": "…",
    "FirstName": "…",
    "LastName": "…",
    "Street1": "…",
    "Street2": "…",
    "City": "…",
    "State": "…",
    "Zip": "…",
    "Country": "…",
    "Phone": "…",
    "AddressName": "…"
  },
  "SpendingAccountID": "…",
  "Comments": "…",
  "PaymentMethod": null,
  "CreditCardID": "…",
  "CreditCard": {
    "ID": "…",
    "Token": "…",
    "CardType": "…",
    "PartialAccountNumber": "…",
    "CardholderName": "…",
    "ExpirationDate": null,
    "xp": null
  },
  "Approvals": [
    {
      "Status": "Pending",
      "DateCreated": "0001-01-01T00:00:00+00:00",
      "DateApproved": null,
      "DateDeclined": null,
      "ApprovedByUserID": "…",
      "ApprovedByFirstName": "…",
      "ApprovedByLastName": "…",
      "Reasons": [
        "…"
      ],
      "Comments": "…"
    }
  ],
  "Status": "Unsubmitted",
  "DateCreated": null,
  "DateSubmitted": null,
  "DateApproved": null,
  "DateDeclined": null,
  "DateCanceled": null,
  "DateCompleted": null,
  "Subtotal": 0.0,
  "ShippingCost": null,
  "TaxCost": null,
  "CouponDiscount": 0.0,
  "Total": 0.0,
  "xp": null
}
```

## Get a List of Orders

```js
OrderCloud.Orders.List(direction,from,to,listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|direction|string|Direction of the order. Possible values: Incoming, Outgoing.|
|from|date|Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).|
|to|date|Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).|
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Type": "Standard",
      "FromUserID": "…",
      "FromUserFirstName": "…",
      "FromUserLastName": "…",
      "BillingAddress": {
        "ID": "…",
        "CompanyName": "…",
        "FirstName": "…",
        "LastName": "…",
        "Street1": "…",
        "Street2": "…",
        "City": "…",
        "State": "…",
        "Zip": "…",
        "Country": "…",
        "Phone": "…",
        "AddressName": "…"
      },
      "SpendingAccountID": "…",
      "Comments": "…",
      "PaymentMethod": null,
      "CreditCardID": "…",
      "CreditCard": {
        "ID": "…",
        "Token": "…",
        "CardType": "…",
        "PartialAccountNumber": "…",
        "CardholderName": "…",
        "ExpirationDate": null,
        "xp": null
      },
      "Approvals": [
        {
          "Status": "Pending",
          "DateCreated": "0001-01-01T00:00:00+00:00",
          "DateApproved": null,
          "DateDeclined": null,
          "ApprovedByUserID": "…",
          "ApprovedByFirstName": "…",
          "ApprovedByLastName": "…",
          "Reasons": [
            "…"
          ],
          "Comments": "…"
        }
      ],
      "Status": "Unsubmitted",
      "DateCreated": null,
      "DateSubmitted": null,
      "DateApproved": null,
      "DateDeclined": null,
      "DateCanceled": null,
      "DateCompleted": null,
      "Subtotal": 0.0,
      "ShippingCost": null,
      "TaxCost": null,
      "CouponDiscount": 0.0,
      "Total": 0.0,
      "xp": null
    }
  ]
}
```

## Create New Order

```js
OrderCloud.Orders.Create(order).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Type": "Standard",
  "FromUserID": "…",
  "BillingAddressID": "…",
  "ShippingAddressID": "…",
  "SpendingAccountID": "…",
  "Comments": "…",
  "PaymentMethod": null,
  "CreditCardID": "…",
  "ShippingCost": null,
  "TaxCost": null,
  "xp": null
}
```

## Create or Update Order

```js
OrderCloud.Orders.Update(orderID,order).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Request Body Sample

```json
{
  "ID": "…",
  "Type": "Standard",
  "FromUserID": "…",
  "BillingAddressID": "…",
  "ShippingAddressID": "…",
  "SpendingAccountID": "…",
  "Comments": "…",
  "PaymentMethod": null,
  "CreditCardID": "…",
  "ShippingCost": null,
  "TaxCost": null,
  "xp": null
}
```

## Delete Order

```js
OrderCloud.Orders.Delete(orderID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
## Partially Update Order

```js
OrderCloud.Orders.Patch(orderID,partialOrder).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Request Body Sample

```json
{
  "ID": "…",
  "Type": "Standard",
  "FromUserID": "…",
  "BillingAddressID": "…",
  "ShippingAddressID": "…",
  "SpendingAccountID": "…",
  "Comments": "…",
  "PaymentMethod": null,
  "CreditCardID": "…",
  "ShippingCost": null,
  "TaxCost": null,
  "xp": null
}
```

## Submit Order

```js
OrderCloud.Orders.Submit(orderID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Response Body Sample

```json
{
  "ID": "…",
  "Type": "Standard",
  "FromUserID": "…",
  "FromUserFirstName": "…",
  "FromUserLastName": "…",
  "BillingAddress": {
    "ID": "…",
    "CompanyName": "…",
    "FirstName": "…",
    "LastName": "…",
    "Street1": "…",
    "Street2": "…",
    "City": "…",
    "State": "…",
    "Zip": "…",
    "Country": "…",
    "Phone": "…",
    "AddressName": "…"
  },
  "SpendingAccountID": "…",
  "Comments": "…",
  "PaymentMethod": null,
  "CreditCardID": "…",
  "CreditCard": {
    "ID": "…",
    "Token": "…",
    "CardType": "…",
    "PartialAccountNumber": "…",
    "CardholderName": "…",
    "ExpirationDate": null,
    "xp": null
  },
  "Approvals": [
    {
      "Status": "Pending",
      "DateCreated": "0001-01-01T00:00:00+00:00",
      "DateApproved": null,
      "DateDeclined": null,
      "ApprovedByUserID": "…",
      "ApprovedByFirstName": "…",
      "ApprovedByLastName": "…",
      "Reasons": [
        "…"
      ],
      "Comments": "…"
    }
  ],
  "Status": "Unsubmitted",
  "DateCreated": null,
  "DateSubmitted": null,
  "DateApproved": null,
  "DateDeclined": null,
  "DateCanceled": null,
  "DateCompleted": null,
  "Subtotal": 0.0,
  "ShippingCost": null,
  "TaxCost": null,
  "CouponDiscount": 0.0,
  "Total": 0.0,
  "xp": null
}
```

## Approve Order

```js
OrderCloud.Orders.Approve(orderID,comments).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|comments|string|Comments to be saved with the order approval.|
### Response Body Sample

```json
{
  "ID": "…",
  "Type": "Standard",
  "FromUserID": "…",
  "FromUserFirstName": "…",
  "FromUserLastName": "…",
  "BillingAddress": {
    "ID": "…",
    "CompanyName": "…",
    "FirstName": "…",
    "LastName": "…",
    "Street1": "…",
    "Street2": "…",
    "City": "…",
    "State": "…",
    "Zip": "…",
    "Country": "…",
    "Phone": "…",
    "AddressName": "…"
  },
  "SpendingAccountID": "…",
  "Comments": "…",
  "PaymentMethod": null,
  "CreditCardID": "…",
  "CreditCard": {
    "ID": "…",
    "Token": "…",
    "CardType": "…",
    "PartialAccountNumber": "…",
    "CardholderName": "…",
    "ExpirationDate": null,
    "xp": null
  },
  "Approvals": [
    {
      "Status": "Pending",
      "DateCreated": "0001-01-01T00:00:00+00:00",
      "DateApproved": null,
      "DateDeclined": null,
      "ApprovedByUserID": "…",
      "ApprovedByFirstName": "…",
      "ApprovedByLastName": "…",
      "Reasons": [
        "…"
      ],
      "Comments": "…"
    }
  ],
  "Status": "Unsubmitted",
  "DateCreated": null,
  "DateSubmitted": null,
  "DateApproved": null,
  "DateDeclined": null,
  "DateCanceled": null,
  "DateCompleted": null,
  "Subtotal": 0.0,
  "ShippingCost": null,
  "TaxCost": null,
  "CouponDiscount": 0.0,
  "Total": 0.0,
  "xp": null
}
```

## Decline Order

```js
OrderCloud.Orders.Decline(orderID,comments).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|comments|string|Comments to be saved with the order denial.|
### Response Body Sample

```json
{
  "ID": "…",
  "Type": "Standard",
  "FromUserID": "…",
  "FromUserFirstName": "…",
  "FromUserLastName": "…",
  "BillingAddress": {
    "ID": "…",
    "CompanyName": "…",
    "FirstName": "…",
    "LastName": "…",
    "Street1": "…",
    "Street2": "…",
    "City": "…",
    "State": "…",
    "Zip": "…",
    "Country": "…",
    "Phone": "…",
    "AddressName": "…"
  },
  "SpendingAccountID": "…",
  "Comments": "…",
  "PaymentMethod": null,
  "CreditCardID": "…",
  "CreditCard": {
    "ID": "…",
    "Token": "…",
    "CardType": "…",
    "PartialAccountNumber": "…",
    "CardholderName": "…",
    "ExpirationDate": null,
    "xp": null
  },
  "Approvals": [
    {
      "Status": "Pending",
      "DateCreated": "0001-01-01T00:00:00+00:00",
      "DateApproved": null,
      "DateDeclined": null,
      "ApprovedByUserID": "…",
      "ApprovedByFirstName": "…",
      "ApprovedByLastName": "…",
      "Reasons": [
        "…"
      ],
      "Comments": "…"
    }
  ],
  "Status": "Unsubmitted",
  "DateCreated": null,
  "DateSubmitted": null,
  "DateApproved": null,
  "DateDeclined": null,
  "DateCanceled": null,
  "DateCompleted": null,
  "Subtotal": 0.0,
  "ShippingCost": null,
  "TaxCost": null,
  "CouponDiscount": 0.0,
  "Total": 0.0,
  "xp": null
}
```

## Cancel Order

```js
OrderCloud.Orders.Cancel(orderID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Response Body Sample

```json
{
  "ID": "…",
  "Type": "Standard",
  "FromUserID": "…",
  "FromUserFirstName": "…",
  "FromUserLastName": "…",
  "BillingAddress": {
    "ID": "…",
    "CompanyName": "…",
    "FirstName": "…",
    "LastName": "…",
    "Street1": "…",
    "Street2": "…",
    "City": "…",
    "State": "…",
    "Zip": "…",
    "Country": "…",
    "Phone": "…",
    "AddressName": "…"
  },
  "SpendingAccountID": "…",
  "Comments": "…",
  "PaymentMethod": null,
  "CreditCardID": "…",
  "CreditCard": {
    "ID": "…",
    "Token": "…",
    "CardType": "…",
    "PartialAccountNumber": "…",
    "CardholderName": "…",
    "ExpirationDate": null,
    "xp": null
  },
  "Approvals": [
    {
      "Status": "Pending",
      "DateCreated": "0001-01-01T00:00:00+00:00",
      "DateApproved": null,
      "DateDeclined": null,
      "ApprovedByUserID": "…",
      "ApprovedByFirstName": "…",
      "ApprovedByLastName": "…",
      "Reasons": [
        "…"
      ],
      "Comments": "…"
    }
  ],
  "Status": "Unsubmitted",
  "DateCreated": null,
  "DateSubmitted": null,
  "DateApproved": null,
  "DateDeclined": null,
  "DateCanceled": null,
  "DateCompleted": null,
  "Subtotal": 0.0,
  "ShippingCost": null,
  "TaxCost": null,
  "CouponDiscount": 0.0,
  "Total": 0.0,
  "xp": null
}
```

## Ship Order

```js
OrderCloud.Orders.Ship(orderID,shipment).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Request Body Sample

```json
{
  "ID": "…",
  "Shipper": "…",
  "DateShipped": null,
  "TrackingNumber": "…",
  "Cost": null,
  "Items": [
    {
      "OrderID": "…",
      "LineItemId": "…",
      "QuantityShipped": 0
    }
  ]
}
```

## Set Shipping Address

```js
OrderCloud.Orders.SetShippingAddress(orderID,address).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Request Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

## Patch Shipping Address

```js
OrderCloud.Orders.PatchShippingAddress(orderID,address).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Request Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

## Set Billing Address

```js
OrderCloud.Orders.SetBillingAddress(orderID,address).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Request Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

## Patch Billing Address

```js
OrderCloud.Orders.PatchBillingAddress(orderID,address).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Request Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

# LineItems

```js
angular.module('orderCloud.sdk).factory(LineItems, LineItemsFactory)
```

A Line Item represents a single line on an Order. At a minimum, it contains a single Product SKU and a quantity. A line item may also include Spec values, a Cost Center, shipping details, date needed, and other custom information.

## Get a Single Line Item

```js
OrderCloud.LineItems.Get(orderID,lineItemID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|lineItemID|string|ID of the line item.|
### Response Body Sample

```json
{
  "OrderID": "…",
  "ID": "…",
  "ProductID": "…",
  "Quantity": 0,
  "QuantityShipped": 0,
  "UnitPrice": null,
  "LineTotal": 0.0,
  "CostCenter": "…",
  "DateNeeded": null,
  "PriceScheduleID": "…",
  "ShippingAccount": "…",
  "ShippingAddress": {
    "ID": "…",
    "CompanyName": "…",
    "FirstName": "…",
    "LastName": "…",
    "Street1": "…",
    "Street2": "…",
    "City": "…",
    "State": "…",
    "Zip": "…",
    "Country": "…",
    "Phone": "…",
    "AddressName": "…"
  },
  "ShipperID": "…",
  "ShipperName": "…",
  "Specs": [
    {
      "SpecID": "…",
      "Name": "…",
      "OptionID": "…",
      "Value": "…"
    }
  ],
  "xp": null
}
```

## Get a List of Line Items

```js
OrderCloud.LineItems.List(orderID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "OrderID": "…",
      "ID": "…",
      "ProductID": "…",
      "Quantity": 0,
      "QuantityShipped": 0,
      "UnitPrice": null,
      "LineTotal": 0.0,
      "CostCenter": "…",
      "DateNeeded": null,
      "PriceScheduleID": "…",
      "ShippingAccount": "…",
      "ShippingAddress": {
        "ID": "…",
        "CompanyName": "…",
        "FirstName": "…",
        "LastName": "…",
        "Street1": "…",
        "Street2": "…",
        "City": "…",
        "State": "…",
        "Zip": "…",
        "Country": "…",
        "Phone": "…",
        "AddressName": "…"
      },
      "ShipperID": "…",
      "ShipperName": "…",
      "Specs": [
        {
          "SpecID": "…",
          "Name": "…",
          "OptionID": "…",
          "Value": "…"
        }
      ],
      "xp": null
    }
  ]
}
```

## Create New Line Item

```js
OrderCloud.LineItems.Create(orderID,lineItem).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
### Request Body Sample

```json
{
  "ID": "…",
  "ProductID": "…",
  "Quantity": 0,
  "UnitPrice": null,
  "CostCenter": "…",
  "DateNeeded": null,
  "ShippingAccount": "…",
  "ShippingAddressID": "…",
  "ShipperID": "…",
  "Specs": [
    {
      "SpecID": "…",
      "OptionID": "…",
      "Value": "…"
    }
  ],
  "xp": null
}
```

## Create or Update Line Item

```js
OrderCloud.LineItems.Update(orderID,lineItemID,lineItem).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|lineItemID|string|ID of the line item.|
### Request Body Sample

```json
{
  "ID": "…",
  "ProductID": "…",
  "Quantity": 0,
  "UnitPrice": null,
  "CostCenter": "…",
  "DateNeeded": null,
  "ShippingAccount": "…",
  "ShippingAddressID": "…",
  "ShipperID": "…",
  "Specs": [
    {
      "SpecID": "…",
      "OptionID": "…",
      "Value": "…"
    }
  ],
  "xp": null
}
```

## Delete Line Item

```js
OrderCloud.LineItems.Delete(orderID,lineItemID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|lineItemID|string|ID of the line item.|
## Partially Update Line Item

```js
OrderCloud.LineItems.Patch(orderID,lineItemID,lineItem).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|lineItemID|string|ID of the line item.|
### Request Body Sample

```json
{
  "ID": "…",
  "ProductID": "…",
  "Quantity": 0,
  "UnitPrice": null,
  "CostCenter": "…",
  "DateNeeded": null,
  "ShippingAccount": "…",
  "ShippingAddressID": "…",
  "ShipperID": "…",
  "Specs": [
    {
      "SpecID": "…",
      "OptionID": "…",
      "Value": "…"
    }
  ],
  "xp": null
}
```

## Set Shipping Address

```js
OrderCloud.LineItems.SetShippingAddress(orderID,lineItemID,address).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|lineItemID|string|ID of the line item.|
### Request Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

## Patch Shipping Address

```js
OrderCloud.LineItems.PatchShippingAddress(orderID,lineItemID,address).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|lineItemID|string|ID of the line item.|
### Request Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

# Shipments

```js
angular.module('orderCloud.sdk).factory(Shipments, ShipmentsFactory)
```

A Shipment is a grouping of Line Items from one or more Orders that is physically packaged and delivered to the Buyer as a single unit. It is typically created by the Seller after the Order is submitted as part of the fulfillment process.

## Get a Single Shipment

```js
OrderCloud.Shipments.Get(shipmentID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|shipmentID|string|ID of the shipment.|
### Response Body Sample

```json
{
  "ID": "…",
  "Shipper": "…",
  "DateShipped": null,
  "TrackingNumber": "…",
  "Cost": null,
  "Items": [
    {
      "OrderID": "…",
      "LineItemId": "…",
      "QuantityShipped": 0
    }
  ]
}
```

## Get a List of Shipments

```js
OrderCloud.Shipments.List(orderID,search,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|orderID|string|ID of the order.|
|search|string|Word or phrase to search for.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Shipper": "…",
      "DateShipped": null,
      "TrackingNumber": "…",
      "Cost": null,
      "Items": [
        {
          "OrderID": "…",
          "LineItemId": "…",
          "QuantityShipped": 0
        }
      ]
    }
  ]
}
```

## Create New Shipment

```js
OrderCloud.Shipments.Create(shipment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Shipper": "…",
  "DateShipped": null,
  "TrackingNumber": "…",
  "Cost": null,
  "Items": [
    {
      "OrderID": "…",
      "LineItemId": "…",
      "QuantityShipped": 0
    }
  ]
}
```

## Create or Update Shipment

```js
OrderCloud.Shipments.Update(shipmentID,shipment).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|shipmentID|string|ID of the shipment.|
### Request Body Sample

```json
{
  "ID": "…",
  "Shipper": "…",
  "DateShipped": null,
  "TrackingNumber": "…",
  "Cost": null,
  "Items": [
    {
      "OrderID": "…",
      "LineItemId": "…",
      "QuantityShipped": 0
    }
  ]
}
```

## Delete Shipment

```js
OrderCloud.Shipments.Delete(shipmentID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|shipmentID|string|ID of the shipment.|
## Partially Update Shipment

```js
OrderCloud.Shipments.Patch(shipmentID,shipment).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|shipmentID|string|ID of the shipment.|
### Request Body Sample

```json
{
  "ID": "…",
  "Shipper": "…",
  "DateShipped": null,
  "TrackingNumber": "…",
  "Cost": null,
  "Items": [
    {
      "OrderID": "…",
      "LineItemId": "…",
      "QuantityShipped": 0
    }
  ]
}
```

## Save Item

```js
OrderCloud.Shipments.SaveItem(shipmentID,item).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|shipmentID|string|ID of the shipment.|
### Request Body Sample

```json
{
  "OrderID": "…",
  "LineItemId": "…",
  "QuantityShipped": 0
}
```

## Delete Item

```js
OrderCloud.Shipments.DeleteItem(shipmentID,orderID,lineItemID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|shipmentID|string|ID of the shipment.|
|orderID|string|ID of the order.|
|lineItemID|string|ID of the line item.|
### Response Body Sample

```json
{
  "ID": "…",
  "Shipper": "…",
  "DateShipped": null,
  "TrackingNumber": "…",
  "Cost": null,
  "Items": [
    {
      "OrderID": "…",
      "LineItemId": "…",
      "QuantityShipped": 0
    }
  ]
}
```

# Products

```js
angular.module('orderCloud.sdk).factory(Products, ProductsFactory)
```

A Product represents a physical, digital, or absract good that is offered for sale by a seller organization and is purchase-able by Buyer Users via an Order. 
Products can be a static SKU or a version of a static SKU, known as a Variant.  For example, a variant is often a size or color choice that drives a different product SKU.
Products may also have inventory associated with them and various inventory attributes like quantity available and re-order notifications.

## Get a Single Product

```js
OrderCloud.Products.Get(productID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "QuantityMultiplier": 0,
  "ShipWeight": null,
  "Active": false,
  "Type": "Static",
  "InventoryEnabled": false,
  "InventoryNotificationPoint": null,
  "VariantLevelInventory": false,
  "xp": null,
  "AllowOrderExceedInventory": false,
  "DisplayInventory": false
}
```

## Get a List of Products

```js
OrderCloud.Products.List(listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "QuantityMultiplier": 0,
      "ShipWeight": null,
      "Active": false,
      "Type": "Static",
      "InventoryEnabled": false,
      "InventoryNotificationPoint": null,
      "VariantLevelInventory": false,
      "xp": null,
      "AllowOrderExceedInventory": false,
      "DisplayInventory": false
    }
  ]
}
```

## Create New Product

```js
OrderCloud.Products.Create(product).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "QuantityMultiplier": 0,
  "ShipWeight": null,
  "Active": false,
  "Type": "Static",
  "InventoryEnabled": false,
  "InventoryNotificationPoint": null,
  "VariantLevelInventory": false,
  "xp": null,
  "AllowOrderExceedInventory": false,
  "DisplayInventory": false
}
```

## Create or Update Product

```js
OrderCloud.Products.Update(productID,product).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "QuantityMultiplier": 0,
  "ShipWeight": null,
  "Active": false,
  "Type": "Static",
  "InventoryEnabled": false,
  "InventoryNotificationPoint": null,
  "VariantLevelInventory": false,
  "xp": null,
  "AllowOrderExceedInventory": false,
  "DisplayInventory": false
}
```

## Delete Product

```js
OrderCloud.Products.Delete(productID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
## Partially Update Product

```js
OrderCloud.Products.Patch(productID,product).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "QuantityMultiplier": 0,
  "ShipWeight": null,
  "Active": false,
  "Type": "Static",
  "InventoryEnabled": false,
  "InventoryNotificationPoint": null,
  "VariantLevelInventory": false,
  "xp": null,
  "AllowOrderExceedInventory": false,
  "DisplayInventory": false
}
```

## List Variants

```js
OrderCloud.Products.ListVariants(productID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "Active": false
    }
  ]
}
```

## List Variant Inventory

```js
OrderCloud.Products.ListVariantInventory(productID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Available": null,
      "Reserved": null,
      "LastUpdated": null
    }
  ]
}
```

## Get Variant Inventory

```js
OrderCloud.Products.GetVariantInventory(productID,variantID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|variantID|string|ID of the variant.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Available": null,
  "Reserved": null,
  "LastUpdated": null
}
```

## Update Variant Inventory

```js
OrderCloud.Products.UpdateVariantInventory(productID,variantID,inventory).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|variantID|string|ID of the variant.|
|inventory|integer|Inventory of the product.|
## Update Variant

```js
OrderCloud.Products.UpdateVariant(productID,variantID,variant).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|variantID|string|ID of the variant.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "Active": false
}
```

## Get Variant

```js
OrderCloud.Products.GetVariant(productID,variantID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|variantID|string|ID of the variant.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "Active": false
}
```

## Get Inventory

```js
OrderCloud.Products.GetInventory(productID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Available": null,
  "Reserved": null,
  "LastUpdated": null
}
```

## Update Inventory

```js
OrderCloud.Products.UpdateInventory(productID,inventory).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|inventory|integer|Inventory of the product.|
## Save Assignment

```js
OrderCloud.Products.SaveAssignment(productAssignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ProductID": "…",
  "StandardPriceScheduleID": "…",
  "ReplenishmentPriceScheduleID": "…",
  "UserID": "…",
  "UserGroupID": "…",
  "BuyerID": "…"
}
```

## List Assignments

```js
OrderCloud.Products.ListAssignments(productID,userID,userGroupID,level,priceScheduleID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
|level|string|Level of the product.|
|priceScheduleID|string|ID of the price schedule.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ProductID": "…",
      "StandardPriceScheduleID": "…",
      "ReplenishmentPriceScheduleID": "…",
      "UserID": "…",
      "UserGroupID": "…",
      "BuyerID": "…"
    }
  ]
}
```

## Delete Assignment

```js
OrderCloud.Products.DeleteAssignment(productID,userID,userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|productID|string|ID of the product.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
# PriceSchedules

```js
angular.module('orderCloud.sdk).factory(PriceSchedules, PriceSchedulesFactory)
```

Price schedules allow the same product to be sold across multiple channels.  A price schedule may include quantity price breaks, min and max quantity per order, whether to apply tax or shipping calculations, or to what type of order the price schedule applies.

## Get a Single Price Schedule

```js
OrderCloud.PriceSchedules.Get(priceScheduleID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|priceScheduleID|string|ID of the price schedule.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "ApplyTax": false,
  "ApplyShipping": false,
  "MinQuantity": null,
  "MaxQuantity": null,
  "UseCumulativeQuantity": false,
  "RestrictedQuantity": false,
  "OrderType": "Standard",
  "PriceBreaks": [
    {
      "Quantity": 0,
      "Price": 0.0
    }
  ],
  "xp": null
}
```

## Get a List of Price Schedules

```js
OrderCloud.PriceSchedules.List(page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "ApplyTax": false,
      "ApplyShipping": false,
      "MinQuantity": null,
      "MaxQuantity": null,
      "UseCumulativeQuantity": false,
      "RestrictedQuantity": false,
      "OrderType": "Standard",
      "PriceBreaks": [
        {
          "Quantity": 0,
          "Price": 0.0
        }
      ],
      "xp": null
    }
  ]
}
```

## Create New Price Schedule

```js
OrderCloud.PriceSchedules.Create(priceSchedule).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "ApplyTax": false,
  "ApplyShipping": false,
  "MinQuantity": null,
  "MaxQuantity": null,
  "UseCumulativeQuantity": false,
  "RestrictedQuantity": false,
  "OrderType": "Standard",
  "PriceBreaks": [
    {
      "Quantity": 0,
      "Price": 0.0
    }
  ],
  "xp": null
}
```

## Create or Update Price Schedule

```js
OrderCloud.PriceSchedules.Update(priceScheduleID,priceSchedule).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|priceScheduleID|string|ID of the price schedule.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "ApplyTax": false,
  "ApplyShipping": false,
  "MinQuantity": null,
  "MaxQuantity": null,
  "UseCumulativeQuantity": false,
  "RestrictedQuantity": false,
  "OrderType": "Standard",
  "PriceBreaks": [
    {
      "Quantity": 0,
      "Price": 0.0
    }
  ],
  "xp": null
}
```

## Delete Price Schedule

```js
OrderCloud.PriceSchedules.Delete(priceScheduleID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|priceScheduleID|string|ID of the price schedule.|
## Partially Update Price Schedule

```js
OrderCloud.PriceSchedules.Patch(priceScheduleID,priceSchedule).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|priceScheduleID|string|ID of the price schedule.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "ApplyTax": false,
  "ApplyShipping": false,
  "MinQuantity": null,
  "MaxQuantity": null,
  "UseCumulativeQuantity": false,
  "RestrictedQuantity": false,
  "OrderType": "Standard",
  "PriceBreaks": [
    {
      "Quantity": 0,
      "Price": 0.0
    }
  ],
  "xp": null
}
```

## Save Price Break

```js
OrderCloud.PriceSchedules.SavePriceBreak(priceScheduleID,priceBreak).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|priceScheduleID|string|ID of the price schedule.|
### Request Body Sample

```json
{
  "Quantity": 0,
  "Price": 0.0
}
```

## Delete Price Break

```js
OrderCloud.PriceSchedules.DeletePriceBreak(priceScheduleID,quantity).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|priceScheduleID|string|ID of the price schedule.|
|quantity|integer|Quantity of the price schedule.|
# Specs

```js
angular.module('orderCloud.sdk).factory(Specs, SpecsFactory)
```

Specs are used to capture user input when adding a Product to an Order. At its simplest, a spec is a name/value pair. A spec value may have a price markup or markdown associated with it. In more advanced scenarios, specs can drive the product SKU. For example, a product may be available in 3 colors and 3 sizes and therefore have a total of 9 SKUs. **The OrderCloud platform will choose the correct SKU based on the user-selected color and size specs**.
There are three different types of Specs: Text, Selection, and File.
**Text Specs** are custom text options for a product. For example, if you have a pencil (the product), that can have customized text on it, that's what a text spec is for.
**Selection Specs** are a limited selection of options for a product. For example, if your pencil (that product again) can come in green, red, or blue, or with one pre-set slogan or another, that would be a selection spec.
**File Specs** are when a user can upload a file with something in it to customize a product. For example, if that pencil can have a custom logo on it, the user can upload the logo image as a JPG file.

## Get a Single Spec

```js
OrderCloud.Specs.Get(specID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
### Response Body Sample

```json
{
  "ID": "…",
  "ListOrder": 0,
  "Name": "…",
  "DefaultValue": "…",
  "Required": false,
  "DefinesVariant": false,
  "AllowOpenText": false,
  "DefaultOptionID": "…",
  "Options": [
    {
      "ID": "…",
      "Value": "…",
      "ListOrder": 0,
      "IsOpenText": false,
      "PriceMarkupType": null,
      "PriceMarkup": null,
      "xp": null
    }
  ],
  "xp": null
}
```

## Get a List of Specs

```js
OrderCloud.Specs.List(page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "ListOrder": 0,
      "Name": "…",
      "DefaultValue": "…",
      "Required": false,
      "DefinesVariant": false,
      "AllowOpenText": false,
      "DefaultOptionID": "…",
      "Options": [
        {
          "ID": "…",
          "Value": "…",
          "ListOrder": 0,
          "IsOpenText": false,
          "PriceMarkupType": null,
          "PriceMarkup": null,
          "xp": null
        }
      ],
      "xp": null
    }
  ]
}
```

## Create New Spec

```js
OrderCloud.Specs.Create(spec).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "ListOrder": 0,
  "Name": "…",
  "DefaultValue": "…",
  "Required": false,
  "DefinesVariant": false,
  "AllowOpenText": false,
  "DefaultOptionID": "…",
  "xp": null
}
```

## Create or Update Spec

```js
OrderCloud.Specs.Update(specID,spec).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
### Request Body Sample

```json
{
  "ID": "…",
  "ListOrder": 0,
  "Name": "…",
  "DefaultValue": "…",
  "Required": false,
  "DefinesVariant": false,
  "AllowOpenText": false,
  "DefaultOptionID": "…",
  "xp": null
}
```

## Delete Spec

```js
OrderCloud.Specs.Delete(specID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
## Partially Update Spec

```js
OrderCloud.Specs.Patch(specID,spec).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
### Request Body Sample

```json
{
  "ID": "…",
  "ListOrder": 0,
  "Name": "…",
  "DefaultValue": "…",
  "Required": false,
  "DefinesVariant": false,
  "AllowOpenText": false,
  "DefaultOptionID": "…",
  "xp": null
}
```

## List Product Assignments

```js
OrderCloud.Specs.ListProductAssignments(specID,productID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
|productID|string|ID of the product.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "SpecID": "…",
      "ProductID": "…"
    }
  ]
}
```

## Delete Product Assignment

```js
OrderCloud.Specs.DeleteProductAssignment(specID,productID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
|productID|string|ID of the product.|
## Save Product Assignment

```js
OrderCloud.Specs.SaveProductAssignment(productAssignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "SpecID": "…",
  "ProductID": "…"
}
```

## Create Option

```js
OrderCloud.Specs.CreateOption(specID,option).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
### Request Body Sample

```json
{
  "ID": "…",
  "Value": "…",
  "ListOrder": 0,
  "IsOpenText": false,
  "PriceMarkupType": null,
  "PriceMarkup": null,
  "xp": null
}
```

## Update Option

```js
OrderCloud.Specs.UpdateOption(specID,optionID,option).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
|optionID|string|ID of the option.|
### Request Body Sample

```json
{
  "ID": "…",
  "Value": "…",
  "ListOrder": 0,
  "IsOpenText": false,
  "PriceMarkupType": null,
  "PriceMarkup": null,
  "xp": null
}
```

## Get Option

```js
OrderCloud.Specs.GetOption(specID,optionID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
|optionID|string|ID of the option.|
### Response Body Sample

```json
{
  "ID": "…",
  "Value": "…",
  "ListOrder": 0,
  "IsOpenText": false,
  "PriceMarkupType": null,
  "PriceMarkup": null,
  "xp": null
}
```

## Delete Option

```js
OrderCloud.Specs.DeleteOption(specID,optionID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|specID|string|ID of the spec.|
|optionID|string|ID of the option.|
# Categories

```js
angular.module('orderCloud.sdk).factory(Categories, CategoriesFactory)
```

Categories are used within a catalog to group and place content for a specific audience. Content can be in the form of another category, nested categories, products or HTML.

## Get a Single Category

```js
OrderCloud.Categories.Get(categoryID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|categoryID|string|ID of the category.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "xp": null,
  "ListOrder": 1,
  "Active": false,
  "ParentID": "…",
  "ChildCount": 0
}
```

## Get a List of Categories

```js
OrderCloud.Categories.List(search,depth,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|depth|string|Depth of the category.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "xp": null,
      "ListOrder": 1,
      "Active": false,
      "ParentID": "…",
      "ChildCount": 0
    }
  ]
}
```

## Create New Category

```js
OrderCloud.Categories.Create(category).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "xp": null,
  "ListOrder": 1,
  "Active": false,
  "ParentID": "…"
}
```

## Create or Update Category

```js
OrderCloud.Categories.Update(categoryID,category).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|categoryID|string|ID of the category.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "xp": null,
  "ListOrder": 1,
  "Active": false,
  "ParentID": "…"
}
```

## Delete Category

```js
OrderCloud.Categories.Delete(categoryID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|categoryID|string|ID of the category.|
## List Children

```js
OrderCloud.Categories.ListChildren(parentID,search,depth,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|parentID|string|ID of the parent.|
|search|string|Word or phrase to search for.|
|depth|string|Depth of the category.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "xp": null,
      "ListOrder": 1,
      "Active": false,
      "ParentID": "…",
      "ChildCount": 0
    }
  ]
}
```

## Partially Update Category

```js
OrderCloud.Categories.Patch(categoryID,category).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|categoryID|string|ID of the category.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "xp": null,
  "ListOrder": 1,
  "Active": false,
  "ParentID": "…"
}
```

## List Product Assignments

```js
OrderCloud.Categories.ListProductAssignments(categoryID,productID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|categoryID|string|ID of the category.|
|productID|string|ID of the product.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "CategoryID": "…",
      "ProductID": "…",
      "ListOrder": null
    }
  ]
}
```

## Save Product Assignment

```js
OrderCloud.Categories.SaveProductAssignment(productAssignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "CategoryID": "…",
  "ProductID": "…",
  "ListOrder": null
}
```

## Delete Product Assignment

```js
OrderCloud.Categories.DeleteProductAssignment(categoryID,productID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|categoryID|string|ID of the category.|
|productID|string|ID of the product.|
## List Assignments

```js
OrderCloud.Categories.ListAssignments(categoryID,userID,userGroupID,level,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|categoryID|string|ID of the category.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
|level|string|Level of the category.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "UserID": "…",
      "UserGroupID": "…",
      "CategoryID": "…"
    }
  ]
}
```

## Delete Assignment

```js
OrderCloud.Categories.DeleteAssignment(categoryID,userID,userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|categoryID|string|ID of the category.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
## Save Assignment

```js
OrderCloud.Categories.SaveAssignment(categoryAssignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "UserID": "…",
  "UserGroupID": "…",
  "CategoryID": "…"
}
```

# Buyers

```js
angular.module('orderCloud.sdk).factory(Buyers, BuyersFactory)
```

Buyers, or customers, are the organizations that view the categories and products and place orders.

## Get a Single Buyer

```js
OrderCloud.Buyers.Get().then(successFn).catch(errorFn);
```

### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Active": false,
  "xp": null
}
```

## Get a List of Buyers

```js
OrderCloud.Buyers.List(search,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Active": false,
      "xp": null
    }
  ]
}
```

## Create New Buyer

```js
OrderCloud.Buyers.Create(company).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Active": false,
  "xp": null
}
```

## Create or Update Buyer

```js
OrderCloud.Buyers.Update(company).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Active": false,
  "xp": null
}
```

# Users

```js
angular.module('orderCloud.sdk).factory(Users, UsersFactory)
```

A user is a person with access to the application.  The properties of a user define who they are and what they are able to do with their login to the application.

## Get a Single User

```js
OrderCloud.Users.Get(userID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userID|string|ID of the user.|
### Response Body Sample

```json
{
  "ID": "…",
  "Username": "…",
  "FirstName": "…",
  "LastName": "…",
  "Email": "…",
  "Phone": "…",
  "TermsAccepted": null,
  "Active": false,
  "xp": null,
  "SecurityProfileID": "…"
}
```

## Get a List of Users

```js
OrderCloud.Users.List(listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Username": "…",
      "FirstName": "…",
      "LastName": "…",
      "Email": "…",
      "Phone": "…",
      "TermsAccepted": null,
      "Active": false,
      "xp": null,
      "SecurityProfileID": "…"
    }
  ]
}
```

## Create New User

```js
OrderCloud.Users.Create(user).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Username": "…",
  "Password": "…",
  "FirstName": "…",
  "LastName": "…",
  "Email": "…",
  "Phone": "…",
  "TermsAccepted": null,
  "Active": false,
  "xp": null,
  "SecurityProfileID": "…"
}
```

## Create or Update User

```js
OrderCloud.Users.Update(userID,user).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userID|string|ID of the user.|
### Request Body Sample

```json
{
  "ID": "…",
  "Username": "…",
  "Password": "…",
  "FirstName": "…",
  "LastName": "…",
  "Email": "…",
  "Phone": "…",
  "TermsAccepted": null,
  "Active": false,
  "xp": null,
  "SecurityProfileID": "…"
}
```

## Delete User

```js
OrderCloud.Users.Delete(userID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userID|string|ID of the user.|
## Partially Update User

```js
OrderCloud.Users.Patch(userID,user).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userID|string|ID of the user.|
### Request Body Sample

```json
{
  "ID": "…",
  "Username": "…",
  "Password": "…",
  "FirstName": "…",
  "LastName": "…",
  "Email": "…",
  "Phone": "…",
  "TermsAccepted": null,
  "Active": false,
  "xp": null,
  "SecurityProfileID": "…"
}
```

## Get Access Token

```js
OrderCloud.Users.GetAccessToken(userID,tokenRequest).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userID|string|ID of the user.|
### Request Body Sample

```json
{
  "ClientID": "…",
  "Claims": [
    "FullAccess"
  ]
}
```

# UserGroups

```js
angular.module('orderCloud.sdk).factory(UserGroups, UserGroupsFactory)
```

User Groups are used to streamline the management of users within an application.  By placing like users in groups, you can filter content, define order management rules, and manage changes much more easily than trying to account for individual users.

## Get a Single User Group

```js
OrderCloud.UserGroups.Get(userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userGroupID|string|ID of the user group.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "IsReportingGroup": false,
  "xp": null
}
```

## Get a List of User Groups

```js
OrderCloud.UserGroups.List(listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…",
      "IsReportingGroup": false,
      "xp": null
    }
  ]
}
```

## Create New User Group

```js
OrderCloud.UserGroups.Create(group).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "IsReportingGroup": false,
  "xp": null
}
```

## Create or Update User Group

```js
OrderCloud.UserGroups.Update(userGroupID,group).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userGroupID|string|ID of the user group.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "IsReportingGroup": false,
  "xp": null
}
```

## Delete User Group

```js
OrderCloud.UserGroups.Delete(userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userGroupID|string|ID of the user group.|
## Partially Update User Group

```js
OrderCloud.UserGroups.Patch(userGroupID,group).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userGroupID|string|ID of the user group.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…",
  "IsReportingGroup": false,
  "xp": null
}
```

## List User Assignments

```js
OrderCloud.UserGroups.ListUserAssignments(userGroupID,userID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userGroupID|string|ID of the user group.|
|userID|string|ID of the user.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "UserGroupID": "…",
      "UserID": "…",
      "BuyerID": "…"
    }
  ]
}
```

## Delete User Assignment

```js
OrderCloud.UserGroups.DeleteUserAssignment(userGroupID,userID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userGroupID|string|ID of the user group.|
|userID|string|ID of the user.|
## Save User Assignment

```js
OrderCloud.UserGroups.SaveUserAssignment(userGroupAssignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "UserGroupID": "…",
  "UserID": "…",
  "BuyerID": "…"
}
```

# Addresses

```js
angular.module('orderCloud.sdk).factory(Addresses, AddressesFactory)
```

Addresses are used for the purposes of billing and shipping an order.  An address may belong to a list that can be shared among many users if appropriate.

## Get a Single Address

```js
OrderCloud.Addresses.Get(addressID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|addressID|string|ID of the address.|
### Response Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

## Get a List of Addresses

```js
OrderCloud.Addresses.List(search,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "CompanyName": "…",
      "FirstName": "…",
      "LastName": "…",
      "Street1": "…",
      "Street2": "…",
      "City": "…",
      "State": "…",
      "Zip": "…",
      "Country": "…",
      "Phone": "…",
      "AddressName": "…"
    }
  ]
}
```

## Create New Address

```js
OrderCloud.Addresses.Create(address).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

## Create or Update Address

```js
OrderCloud.Addresses.Update(addressID,address).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|addressID|string|ID of the address.|
### Request Body Sample

```json
{
  "ID": "…",
  "CompanyName": "…",
  "FirstName": "…",
  "LastName": "…",
  "Street1": "…",
  "Street2": "…",
  "City": "…",
  "State": "…",
  "Zip": "…",
  "Country": "…",
  "Phone": "…",
  "AddressName": "…"
}
```

## Delete Address

```js
OrderCloud.Addresses.Delete(addressID,overrideOrderConflict).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|addressID|string|ID of the address.|
|overrideOrderConflict|boolean|Override order conflict of the address.|
## List Assignments

```js
OrderCloud.Addresses.ListAssignments(addressID,userID,userGroupID,level,isShipping,isBilling,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|addressID|string|ID of the address.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
|level|string|Level of the address.|
|isShipping|string|Is shipping of the address.|
|isBilling|string|Is billing of the address.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "UserID": "…",
      "UserGroupID": "…",
      "AddressID": "…",
      "IsShipping": false,
      "IsBilling": false
    }
  ]
}
```

## Delete Assignment

```js
OrderCloud.Addresses.DeleteAssignment(addressID,userID,userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|addressID|string|ID of the address.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
## Save Assignment

```js
OrderCloud.Addresses.SaveAssignment(assignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "UserID": "…",
  "UserGroupID": "…",
  "AddressID": "…",
  "IsShipping": false,
  "IsBilling": false
}
```

# SpendingAccounts

```js
angular.module('orderCloud.sdk).factory(SpendingAccounts, SpendingAccountsFactory)
```

Spending Accounts are funds given to users by a managing entity and are managed as part of a user's account.  These funds are generally used as "corporate dollars", "rewards dollars", or "gift cards".
They can be used to pay for all of or part of an order with parameters that control account expiration, balance available, balance renewal, user access and overdraft.
Multiple spending accounts can be assigned to a member of an organization and applied to all transactions, but only one can be used as a payment method.
When multiple Spending Accounts are used on a transaction each is deducted individually.

## Get a Single Spending Account

```js
OrderCloud.SpendingAccounts.Get(spendingAccountID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|spendingAccountID|string|ID of the spending account.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Balance": 0.0,
  "AllowAsPaymentMethod": false,
  "RedemptionCode": "…",
  "StartDate": null,
  "EndDate": null,
  "xp": null
}
```

## Get a List of Spending Accounts

```js
OrderCloud.SpendingAccounts.List(listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Balance": 0.0,
      "AllowAsPaymentMethod": false,
      "RedemptionCode": "…",
      "StartDate": null,
      "EndDate": null,
      "xp": null
    }
  ]
}
```

## Create New Spending Account

```js
OrderCloud.SpendingAccounts.Create(spendingAccount).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Balance": 0.0,
  "AllowAsPaymentMethod": false,
  "RedemptionCode": "…",
  "StartDate": null,
  "EndDate": null,
  "xp": null
}
```

## Create or Update Spending Account

```js
OrderCloud.SpendingAccounts.Update(spendingAccountID,spendingAccount).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|spendingAccountID|string|ID of the spending account.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Balance": 0.0,
  "AllowAsPaymentMethod": false,
  "RedemptionCode": "…",
  "StartDate": null,
  "EndDate": null,
  "xp": null
}
```

## Delete Spending Account

```js
OrderCloud.SpendingAccounts.Delete(spendingAccountID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|spendingAccountID|string|ID of the spending account.|
## List Assignments

```js
OrderCloud.SpendingAccounts.ListAssignments(spendingAccountID,userID,userGroupID,level,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|spendingAccountID|string|ID of the spending account.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
|level|string|Level of the spending account.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "SpendingAccountID": "…",
      "UserID": "…",
      "UserGroupID": "…",
      "AllowExceed": false
    }
  ]
}
```

## Save Assignment

```js
OrderCloud.SpendingAccounts.SaveAssignment(assignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "SpendingAccountID": "…",
  "UserID": "…",
  "UserGroupID": "…",
  "AllowExceed": false
}
```

## Delete Assignment

```js
OrderCloud.SpendingAccounts.DeleteAssignment(spendingAccountID,userID,userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|spendingAccountID|string|ID of the spending account.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
# AdminUsers

```js
angular.module('orderCloud.sdk).factory(AdminUsers, AdminUsersFactory)
```

Admin users are users that have administrative access to things like adding users, creating catalogs, processing orders or creating products.

## Get a Single Admin User

```js
OrderCloud.AdminUsers.Get(userID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userID|string|ID of the user.|
### Response Body Sample

```json
{
  "ID": "…",
  "Username": "…",
  "FirstName": "…",
  "LastName": "…",
  "Email": "…",
  "Phone": "…",
  "TermsAccepted": null,
  "Active": false,
  "xp": null,
  "SecurityProfileID": "…"
}
```

## Get a List of Admin Users

```js
OrderCloud.AdminUsers.List(listArgs).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|searchOn|string|Comma-delimited list of fields to search on.|
|sortBy|string|Comma-delimited list of fields to sort by.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
|filters||Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Username": "…",
      "FirstName": "…",
      "LastName": "…",
      "Email": "…",
      "Phone": "…",
      "TermsAccepted": null,
      "Active": false,
      "xp": null,
      "SecurityProfileID": "…"
    }
  ]
}
```

## Create New Admin User

```js
OrderCloud.AdminUsers.Create(user).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Username": "…",
  "Password": "…",
  "FirstName": "…",
  "LastName": "…",
  "Email": "…",
  "Phone": "…",
  "TermsAccepted": null,
  "Active": false,
  "xp": null,
  "SecurityProfileID": "…"
}
```

## Create or Update Admin User

```js
OrderCloud.AdminUsers.Update(userID,user).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userID|string|ID of the user.|
### Request Body Sample

```json
{
  "ID": "…",
  "Username": "…",
  "Password": "…",
  "FirstName": "…",
  "LastName": "…",
  "Email": "…",
  "Phone": "…",
  "TermsAccepted": null,
  "Active": false,
  "xp": null,
  "SecurityProfileID": "…"
}
```

## Delete Admin User

```js
OrderCloud.AdminUsers.Delete(userID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|userID|string|ID of the user.|
# Coupons

```js
angular.module('orderCloud.sdk).factory(Coupons, CouponsFactory)
```

Coupons are used to reduce the cost of a line item or an order.  Coupons can have redemption rules that can be applied for available dates, occurences and value.
Coupons can be assigned to Products, Categories, Buyers, UserGroups and Users for redemption.

## Get a Single Coupon

```js
OrderCloud.Coupons.Get(couponID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
### Response Body Sample

```json
{
  "ID": "…",
  "CouponCode": "…",
  "Label": "…",
  "Description": "…",
  "DiscountAmountType": "FlatAmountPerOrder",
  "Enabled": false,
  "RedeemLimit": 0,
  "StartDate": null,
  "ExpirationDate": null,
  "DiscountAmount": 0.0,
  "MinimumPurchase": 0.0,
  "CouponType": "Order",
  "ApplyToSubtotal": false,
  "ApplyToShipping": false,
  "ApplyToTax": false,
  "Status": "Active"
}
```

## Get a List of Coupons

```js
OrderCloud.Coupons.List(search,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "CouponCode": "…",
      "Label": "…",
      "Description": "…",
      "DiscountAmountType": "FlatAmountPerOrder",
      "Enabled": false,
      "RedeemLimit": 0,
      "StartDate": null,
      "ExpirationDate": null,
      "DiscountAmount": 0.0,
      "MinimumPurchase": 0.0,
      "CouponType": "Order",
      "ApplyToSubtotal": false,
      "ApplyToShipping": false,
      "ApplyToTax": false,
      "Status": "Active"
    }
  ]
}
```

## Create New Coupon

```js
OrderCloud.Coupons.Create(coupon).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "CouponCode": "…",
  "Label": "…",
  "Description": "…",
  "DiscountAmountType": "FlatAmountPerOrder",
  "Enabled": false,
  "RedeemLimit": 0,
  "StartDate": null,
  "ExpirationDate": null,
  "DiscountAmount": 0.0,
  "MinimumPurchase": 0.0,
  "CouponType": "Order",
  "ApplyToSubtotal": false,
  "ApplyToShipping": false,
  "ApplyToTax": false
}
```

## Create or Update Coupon

```js
OrderCloud.Coupons.Update(couponID,coupon).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
### Request Body Sample

```json
{
  "ID": "…",
  "CouponCode": "…",
  "Label": "…",
  "Description": "…",
  "DiscountAmountType": "FlatAmountPerOrder",
  "Enabled": false,
  "RedeemLimit": 0,
  "StartDate": null,
  "ExpirationDate": null,
  "DiscountAmount": 0.0,
  "MinimumPurchase": 0.0,
  "CouponType": "Order",
  "ApplyToSubtotal": false,
  "ApplyToShipping": false,
  "ApplyToTax": false
}
```

## Delete Coupon

```js
OrderCloud.Coupons.Delete(couponID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
## List Product Assignments

```js
OrderCloud.Coupons.ListProductAssignments(couponID,productID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
|productID|string|ID of the product.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "CouponID": "…",
      "ProductID": "…",
      "ListOrder": null
    }
  ]
}
```

## Save Product Assignment

```js
OrderCloud.Coupons.SaveProductAssignment(productAssignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "CouponID": "…",
  "ProductID": "…",
  "ListOrder": null
}
```

## Delete Product Assignment

```js
OrderCloud.Coupons.DeleteProductAssignment(couponID,productID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
|productID|string|ID of the product.|
## List Category Assignments

```js
OrderCloud.Coupons.ListCategoryAssignments(couponID,categoryID,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
|categoryID|string|ID of the category.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "CouponID": "…",
      "CategoryID": "…",
      "ListOrder": null
    }
  ]
}
```

## Save Category Assignment

```js
OrderCloud.Coupons.SaveCategoryAssignment(categoryAssignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "CouponID": "…",
  "CategoryID": "…",
  "ListOrder": null
}
```

## Delete Category Assignment

```js
OrderCloud.Coupons.DeleteCategoryAssignment(couponID,categoryID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
|categoryID|string|ID of the category.|
## List Assignments

```js
OrderCloud.Coupons.ListAssignments(couponID,userID,userGroupID,level,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
|level|string|Level of the coupon.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "CouponID": "…",
      "UserID": "…",
      "UserGroupID": "…"
    }
  ]
}
```

## Save Assignment

```js
OrderCloud.Coupons.SaveAssignment(assignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "CouponID": "…",
  "UserID": "…",
  "UserGroupID": "…"
}
```

## Delete Assignment

```js
OrderCloud.Coupons.DeleteAssignment(couponID,userID,userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|couponID|string|ID of the coupon.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
# CostCenters

```js
angular.module('orderCloud.sdk).factory(CostCenters, CostCentersFactory)
```

A cost center is used to allocate organizational expenditures.  Different businesses call these by different names such as "allocation codes" or "charge back codes", but the basic purpose is the same - to allocate an expense back to someone or some department of an organization.

## Get a Single Cost Center

```js
OrderCloud.CostCenters.Get(costCenterID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|costCenterID|string|ID of the cost center.|
### Response Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…"
}
```

## Get a List of Cost Centers

```js
OrderCloud.CostCenters.List(search,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Name": "…",
      "Description": "…"
    }
  ]
}
```

## Create New Cost Center

```js
OrderCloud.CostCenters.Create(costCenter).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…"
}
```

## Create or Update Cost Center

```js
OrderCloud.CostCenters.Update(costCenterID,costCenter).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|costCenterID|string|ID of the cost center.|
### Request Body Sample

```json
{
  "ID": "…",
  "Name": "…",
  "Description": "…"
}
```

## Delete Cost Center

```js
OrderCloud.CostCenters.Delete(costCenterID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|costCenterID|string|ID of the cost center.|
## List Assignments

```js
OrderCloud.CostCenters.ListAssignments(costCenterID,userID,userGroupID,level,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|costCenterID|string|ID of the cost center.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
|level|string|Level of the cost center.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "UserID": "…",
      "UserGroupID": "…",
      "CostCenterID": "…"
    }
  ]
}
```

## Delete Assignment

```js
OrderCloud.CostCenters.DeleteAssignment(costCenterID,userID,userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|costCenterID|string|ID of the cost center.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
## Save Assignment

```js
OrderCloud.CostCenters.SaveAssignment(assignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "UserID": "…",
  "UserGroupID": "…",
  "CostCenterID": "…"
}
```

# ApprovalRules

```js
angular.module('orderCloud.sdk).factory(ApprovalRules, ApprovalRulesFactory)
```

Approval rules are used to verify the integrity of an order.  Common examples include orders requiring managerial approval, approval for orders that contain a specific product category, approval for quantity thresholds or approval for orders that exceed a specific price.  Properties are also available to control the triggers and timing for processing approvals whether parallel to another rule, or in succession of a previous rule.

## Get a Single Approval Rule

```js
OrderCloud.ApprovalRules.Get(approvalRuleID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|approvalRuleID|string|ID of the approval rule.|
### Response Body Sample

```json
{
  "ID": "…",
  "SubmitType": "Approve",
  "Sequence": null,
  "SubmittingAssignment": {
    "BuyerID": "…",
    "UserID": "…",
    "UserGroupID": "…"
  },
  "ApprovingAssignment": {
    "BuyerID": "…",
    "UserID": "…",
    "UserGroupID": "…"
  },
  "Price": null,
  "CostCenterID": "…",
  "PaymentMethod": null,
  "CategoryID": "…",
  "Quantity": null,
  "Stage": 0,
  "MinutesAllowed": null,
  "ImplicitAction": "None",
  "SendShipNoticeEmail": false,
  "SendApprovalNoticeEmail": false
}
```

## Get a List of Approval Rules

```js
OrderCloud.ApprovalRules.List(search,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|search|string|Word or phrase to search for.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "SubmitType": "Approve",
      "Sequence": null,
      "SubmittingAssignment": {
        "BuyerID": "…",
        "UserID": "…",
        "UserGroupID": "…"
      },
      "ApprovingAssignment": {
        "BuyerID": "…",
        "UserID": "…",
        "UserGroupID": "…"
      },
      "Price": null,
      "CostCenterID": "…",
      "PaymentMethod": null,
      "CategoryID": "…",
      "Quantity": null,
      "Stage": 0,
      "MinutesAllowed": null,
      "ImplicitAction": "None",
      "SendShipNoticeEmail": false,
      "SendApprovalNoticeEmail": false
    }
  ]
}
```

## Create New Approval Rule

```js
OrderCloud.ApprovalRules.Create(approvalRule).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "SubmitType": "Approve",
  "Sequence": null,
  "SubmittingAssignment": {
    "BuyerID": "…",
    "UserID": "…",
    "UserGroupID": "…"
  },
  "ApprovingAssignment": {
    "BuyerID": "…",
    "UserID": "…",
    "UserGroupID": "…"
  },
  "Price": null,
  "CostCenterID": "…",
  "PaymentMethod": null,
  "CategoryID": "…",
  "Quantity": null,
  "Stage": 0,
  "MinutesAllowed": null,
  "ImplicitAction": "None",
  "SendShipNoticeEmail": false,
  "SendApprovalNoticeEmail": false
}
```

## Create or Update Approval Rule

```js
OrderCloud.ApprovalRules.Update(approvalRuleID,approvalRule).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|approvalRuleID|string|ID of the approval rule.|
### Request Body Sample

```json
{
  "ID": "…",
  "SubmitType": "Approve",
  "Sequence": null,
  "SubmittingAssignment": {
    "BuyerID": "…",
    "UserID": "…",
    "UserGroupID": "…"
  },
  "ApprovingAssignment": {
    "BuyerID": "…",
    "UserID": "…",
    "UserGroupID": "…"
  },
  "Price": null,
  "CostCenterID": "…",
  "PaymentMethod": null,
  "CategoryID": "…",
  "Quantity": null,
  "Stage": 0,
  "MinutesAllowed": null,
  "ImplicitAction": "None",
  "SendShipNoticeEmail": false,
  "SendApprovalNoticeEmail": false
}
```

## Delete Approval Rule

```js
OrderCloud.ApprovalRules.Delete(approvalRuleID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|approvalRuleID|string|ID of the approval rule.|
# CreditCards

```js
angular.module('orderCloud.sdk).factory(CreditCards, CreditCardsFactory)
```

Credit cards are used as a payment method for an order.  A user may have access to one or many credit cards for personal spend or group spending.
Credit Cards may be saved and assigned to members of an organization for use during purchase.

## Get a Single Credit Card

```js
OrderCloud.CreditCards.Get(creditCardID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|creditCardID|string|ID of the credit card.|
### Response Body Sample

```json
{
  "ID": "…",
  "Token": "…",
  "CardType": "…",
  "PartialAccountNumber": "…",
  "CardholderName": "…",
  "ExpirationDate": null,
  "xp": null
}
```

## Get a List of Credit Cards

```js
OrderCloud.CreditCards.List(page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "Token": "…",
      "CardType": "…",
      "PartialAccountNumber": "…",
      "CardholderName": "…",
      "ExpirationDate": null,
      "xp": null
    }
  ]
}
```

## Create New Credit Card

```js
OrderCloud.CreditCards.Create(card).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "ID": "…",
  "Token": "…",
  "CardType": "…",
  "PartialAccountNumber": "…",
  "CardholderName": "…",
  "ExpirationDate": null,
  "xp": null
}
```

## Create or Update Credit Card

```js
OrderCloud.CreditCards.Update(creditCardID,card).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|creditCardID|string|ID of the credit card.|
### Request Body Sample

```json
{
  "ID": "…",
  "Token": "…",
  "CardType": "…",
  "PartialAccountNumber": "…",
  "CardholderName": "…",
  "ExpirationDate": null,
  "xp": null
}
```

## Delete Credit Card

```js
OrderCloud.CreditCards.Delete(creditCardID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|creditCardID|string|ID of the credit card.|
## List Assignments

```js
OrderCloud.CreditCards.ListAssignments(creditCardID,userID,userGroupID,level,page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|creditCardID|string|ID of the credit card.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
|level|string|Level of the credit card.|
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "CreditCardID": "…",
      "UserID": "…",
      "UserGroupID": "…"
    }
  ]
}
```

## Save Assignment

```js
OrderCloud.CreditCards.SaveAssignment(assignment).then(successFn).catch(errorFn);
```

### Request Body Sample

```json
{
  "CreditCardID": "…",
  "UserID": "…",
  "UserGroupID": "…"
}
```

## Delete Assignment

```js
OrderCloud.CreditCards.DeleteAssignment(creditCardID,userID,userGroupID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|creditCardID|string|ID of the credit card.|
|userID|string|ID of the user.|
|userGroupID|string|ID of the user group.|
# Files

```js
angular.module('orderCloud.sdk).factory(Files, FilesFactory)
```


## Get a Single File

```js
OrderCloud.Files.Get(fileID).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|fileID|string|ID of the file.|
### Response Body Sample

```json
{
  "ID": "…",
  "OriginalName": "…",
  "URL": "…"
}
```

## Get a List of Files

```js
OrderCloud.Files.List(page,pageSize).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|page|integer|Page of results to return. Default: 1|
|pageSize|integer|Number of results to return per page. Default: 20, max: 100.|
### Response Body Sample

```json
{
  "Meta": {
    "Page": 1,
    "PageSize": 20,
    "TotalCount": 25,
    "TotalPages": 2,
    "ItemRange": [
      1,
      20
    ]
  },
  "Items": [
    {
      "ID": "…",
      "OriginalName": "…",
      "URL": "…"
    }
  ]
}
```

## Post File Data

```js
OrderCloud.Files.PostFileData(filename).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|filename|string|Filename of the file.|
### Response Body Sample

```json
{
  "ID": "…",
  "OriginalName": "…",
  "URL": "…"
}
```

# EmailTemplates

```js
angular.module('orderCloud.sdk).factory(EmailTemplates, EmailTemplatesFactory)
```

Typically, events within an application will trigger a specific email to be sent to a user.  Examples of this would be an order confirmation or a ship notification, among many others.  Email templates are used to define various system generated messages and the content in the To, From, Reply, Subject and Body.

## Get a Single Email Template

```js
OrderCloud.EmailTemplates.Get(emailTemplateType).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|emailTemplateType|string|Email template type of the email template. Possible values: OrderSubmittedForApproval, CustomerOrderSubmitted, OrderToApprove, OrderDeclined, OrderApproved, PriceRequestSubmitted, CustomerOrderShipped, ProductRequiresAttachment, InventoryPointReached, LineItemExceedsInventory, PriceRequestResponse, CustomerOrderUpdated, OrderCanceled, PriceRequestCanceled, NewOrderReceived, ApprovalNotification, EmailLoginVerificationCode.|
### Response Body Sample

```json
{
  "Subject": "…",
  "Body": "…",
  "ReplyEmail": "…",
  "SendMessageType": false,
  "EmailFormatType": "Html"
}
```

## Create or Update Email Template

```js
OrderCloud.EmailTemplates.Update(emailTemplateType,emailTemplate).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|emailTemplateType|string|Email template type of the email template. Possible values: OrderSubmittedForApproval, CustomerOrderSubmitted, OrderToApprove, OrderDeclined, OrderApproved, PriceRequestSubmitted, CustomerOrderShipped, ProductRequiresAttachment, InventoryPointReached, LineItemExceedsInventory, PriceRequestResponse, CustomerOrderUpdated, OrderCanceled, PriceRequestCanceled, NewOrderReceived, ApprovalNotification, EmailLoginVerificationCode.|
### Request Body Sample

```json
{
  "Subject": "…",
  "Body": "…",
  "ReplyEmail": "…",
  "SendMessageType": false,
  "EmailFormatType": "Html"
}
```

## Partially Update Email Template

```js
OrderCloud.EmailTemplates.Patch(emailTemplateType,emailTemplate).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|emailTemplateType|string|Email template type of the email template. Possible values: OrderSubmittedForApproval, CustomerOrderSubmitted, OrderToApprove, OrderDeclined, OrderApproved, PriceRequestSubmitted, CustomerOrderShipped, ProductRequiresAttachment, InventoryPointReached, LineItemExceedsInventory, PriceRequestResponse, CustomerOrderUpdated, OrderCanceled, PriceRequestCanceled, NewOrderReceived, ApprovalNotification, EmailLoginVerificationCode.|
### Request Body Sample

```json
{
  "Subject": "…",
  "Body": "…",
  "ReplyEmail": "…",
  "SendMessageType": false,
  "EmailFormatType": "Html"
}
```

## Reset To Default

```js
OrderCloud.EmailTemplates.ResetToDefault(emailTemplateType).then(successFn).catch(errorFn);
```

### Parameters

| Name | Type | Description |
| -------------- | ----------- | --------------- |
|emailTemplateType|string|Email template type of the email template. Possible values: OrderSubmittedForApproval, CustomerOrderSubmitted, OrderToApprove, OrderDeclined, OrderApproved, PriceRequestSubmitted, CustomerOrderShipped, ProductRequiresAttachment, InventoryPointReached, LineItemExceedsInventory, PriceRequestResponse, CustomerOrderUpdated, OrderCanceled, PriceRequestCanceled, NewOrderReceived, ApprovalNotification, EmailLoginVerificationCode.|
# Extending the OrderCloud Data Model

Many times, object(s) returned from the OrderCloud API require additional data points derived from the provided information in order to more easily and elegantly drive UI functionality. One simple example of this is to create a FullName property on User objects derived from the FirstName and LastName properties.
Similarly, another example would be to create a FullAddress property on an Address object by combining the AddressName, Street1, Street2, City, State, Zip, and Country properties. Additionally, functions can be extended onto data model objects in order to drive such AngularJS directives as ng-show, ng-if, etc.

When the $promise is returned from AngularJS' $resource factory, the OrderCloud-Angular-SDK will attempt to locate and inject an 'Extend' factory from your AngularJS application. If this factory exists and a method within the factory with the respective OrderCloud end point exists, you can proceed to extend the data model.
A list of available end points and a simple example are located below.

```js
angular.module('myApp', [])
.factory('Extend', extendFactory)

function extendFactory() {
    var service = {
        Users: _users
    };

    function _users(user) {
        user.FullName = user.FirstName + ' ' + user.LastName;
    }

    return service;
}
```

