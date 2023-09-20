# EvaluationsApi

All URIs are relative to *https://api.humanloop.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](EvaluationsApi.md#create) | **POST** /projects/{project_id}/evaluations | Create
[**get**](EvaluationsApi.md#get) | **GET** /evaluations/{id} | Get
[**listAllForProject**](EvaluationsApi.md#listAllForProject) | **GET** /projects/{project_id}/evaluations | List For Project
[**listTestcases**](EvaluationsApi.md#listTestcases) | **GET** /evaluations/{id}/testcases | List Testcases


# **create**

#### **POST** /projects/{project_id}/evaluations

### Description
Create an evaluation.

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

const createResponse = await humanloop.evaluations.create({
  projectId: "projectId_example",
  config_id: "config_id_example",
  evaluator_ids: ["evaluator_ids_example"],
  testset_id: "testset_id_example",
});

console.log(createResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEvaluationRequest** | **CreateEvaluationRequest**|  |
 **projectId** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined


### Return type

**EvaluationResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **get**

#### **GET** /evaluations/{id}

### Description
Get evaluation by ID.

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

const getResponse = await humanloop.evaluations.get({
  id: "id_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of evaluation run. Starts with `ev_`. | defaults to undefined
 **evaluatorAggregates** | [**boolean**] | Whether to include evaluator aggregates in the response. | (optional) defaults to undefined


### Return type

**EvaluationResponse**

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

#### **GET** /projects/{project_id}/evaluations

### Description
Get all the evaluations associated with your project.

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

const listAllForProjectResponse = await humanloop.evaluations.listAllForProject(
  {
    projectId: "projectId_example",
  }
);

console.log(listAllForProjectResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined
 **evaluatorAggregates** | [**boolean**] | Whether to include evaluator aggregates in the response. | (optional) defaults to undefined


### Return type

**Array<EvaluationResponse>**

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

#### **GET** /evaluations/{id}/testcases

### Description
Get testcases by evaluation ID.

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

let page = await humanloop.evaluations.listTestcases({
  id: "id_example",
  page: 1,
  size: 10,
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
 **id** | [**string**] | String ID of evaluation. Starts with `ev_`. | defaults to undefined
 **page** | [**number**] | Page to fetch. Starts from 1. | (optional) defaults to 1
 **size** | [**number**] | Number of evaluation results to retrieve. | (optional) defaults to 10


### Return type

**PaginatedDataEvaluationTestcaseSnapshotResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


