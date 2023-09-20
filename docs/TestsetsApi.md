# TestsetsApi

All URIs are relative to *https://api.humanloop.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](TestsetsApi.md#create) | **POST** /projects/{project_id}/testsets | Create
[**createTestcase**](TestsetsApi.md#createTestcase) | **POST** /testsets/{testset_id}/testcases | Create Testcase
[**delete**](TestsetsApi.md#delete) | **DELETE** /testsets/{id} | Delete
[**get**](TestsetsApi.md#get) | **GET** /testsets/{id} | Get
[**listAllForProject**](TestsetsApi.md#listAllForProject) | **GET** /projects/{project_id}/testsets | List For Project
[**listTestcases**](TestsetsApi.md#listTestcases) | **GET** /testsets/{testset_id}/testcases | List Testcases
[**update**](TestsetsApi.md#update) | **PATCH** /testsets/{id} | Update


# **create**

#### **POST** /projects/{project_id}/testsets

### Description
Create a new testset for a project.

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

const createResponse = await humanloop.testsets.create({
  projectId: "projectId_example",
  description: "description_example",
  name: "name_example",
});

console.log(createResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTestsetRequest** | **CreateTestsetRequest**|  |
 **projectId** | [**string**] |  | defaults to undefined


### Return type

**TestsetResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createTestcase**

#### **POST** /testsets/{testset_id}/testcases

### Description
Create a new testcase for a testset.

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

const createTestcaseResponse = await humanloop.testsets.createTestcase({
  testsetId: "testset_id_example",
  requestBody: {
    datapoint_ids: ["datapoint_ids_example"],
  },
});

console.log(createTestcaseResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testsetsCreateTestcaseRequest** | **TestsetsCreateTestcaseRequest**|  |
 **testsetId** | [**string**] | String ID of testset. Starts with `evts_`. | defaults to undefined


### Return type

**Array<TestcaseResponse>**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **delete**

#### **DELETE** /testsets/{id}

### Description
Delete a testset by ID.

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

const deleteResponse = await humanloop.testsets.delete({
  id: "id_example",
});

console.log(deleteResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of testset. Starts with `evts_`. | defaults to undefined


### Return type

**TestsetResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **get**

#### **GET** /testsets/{id}

### Description
Get a single testset by ID.

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

const getResponse = await humanloop.testsets.get({
  id: "id_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of testset. Starts with `evts_`. | defaults to undefined


### Return type

**TestsetResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listAllForProject**

#### **GET** /projects/{project_id}/testsets

### Description
Get all testsets for a project.

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

const listAllForProjectResponse = await humanloop.testsets.listAllForProject({
  projectId: "projectId_example",
});

console.log(listAllForProjectResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] |  | defaults to undefined


### Return type

**Array<TestsetResponse>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listTestcases**

#### **GET** /testsets/{testset_id}/testcases

### Description
Get testcases for a testset.

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

let page = await humanloop.testsets.listTestcases({
  testsetId: "testset_id_example",
  page: 0,
  size: 50,
});
// Use .next() and .hasNext() to paginate forward
while (page.hasNext()) {
  page = await page.next();
  console.log(page.data);
}
// Use .previous() and .hasPrevious() to paginate backwards
while (page.hasPrevious()) {
  page = await page.previous();
  console.log(page.data);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testsetId** | [**string**] | String ID of testset. Starts with `evts_`. | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 0
 **size** | [**number**] |  | (optional) defaults to 50


### Return type

**PaginatedDataTestcaseResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **update**

#### **PATCH** /testsets/{id}

### Description
Update a testset by ID.

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

const updateResponse = await humanloop.testsets.update({
  id: "id_example",
});

console.log(updateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTestsetRequest** | **UpdateTestsetRequest**|  |
 **id** | [**string**] | String ID of testset. Starts with `evts_`. | defaults to undefined


### Return type

**TestsetResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


