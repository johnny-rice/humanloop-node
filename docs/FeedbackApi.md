# FeedbackApi

All URIs are relative to *https://api.humanloop.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feedback**](FeedbackApi.md#feedback) | **POST** /feedback | Feedback


# **feedback**

#### **POST** /feedback

### Description
Submit an array of feedback for existing `data_ids`

### Example


```typescript
import { Humanloop } from "humanloop";

const humanloop = new Humanloop({
  // Defining the base path is optional and defaults to https://api.humanloop.com/v4
  // basePath: "https://api.humanloop.com/v4",
  // Use native Fetch API instead of axios
  // useFetch: true,
  openaiApiKey: "openaiApiKey",
  openaiAzureApiKey: "openaiAzureApiKey",
  openaiAzureEndpointApiKey: "openaiAzureEndpointApiKey",
  cohereApiKey: "cohereApiKey",
  ai21ApiKey: "ai21ApiKey",
  mockApiKey: "mockApiKey",
  anthropicApiKey: "anthropicApiKey",
  apiKey: "API_KEY",
});

const feedbackResponse = await humanloop.feedback({
  type: "string_example",
});

console.log(feedbackResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackSubmitRequest** | **FeedbackSubmitRequest**|  |


### Return type

**FeedbackSubmitResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


