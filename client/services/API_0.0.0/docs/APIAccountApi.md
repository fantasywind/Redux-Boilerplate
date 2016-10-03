# Git4ucommonweb.APIAccountApi

All URIs are relative to *http://applyaccount.futureworldex.com:9527*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aPI001AccountLogin**](APIAccountApi.md#aPI001AccountLogin) | **POST** /api/API001Account/Login | 登入指定的帳號


<a name="aPI001AccountLogin"></a>
# **aPI001AccountLogin**
> LoginResponse aPI001AccountLogin(loginRequest)

登入指定的帳號

### Example
```javascript
var Git4ucommonweb = require('git4ucommonweb');

var apiInstance = new Git4ucommonweb.APIAccountApi();

var loginRequest = new Git4ucommonweb.LoginRequest(); // LoginRequest | 登入指定帳號的請求訊息


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.aPI001AccountLogin(loginRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | [**LoginRequest**](LoginRequest.md)| 登入指定帳號的請求訊息 | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

