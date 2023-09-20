# ExperimentsApi

All URIs are relative to *https://api.humanloop.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ExperimentsApi.md#create) | **POST** /projects/{project_id}/experiments | Create
[**delete**](ExperimentsApi.md#delete) | **DELETE** /experiments/{experiment_id} | Delete
[**list**](ExperimentsApi.md#list) | **GET** /projects/{project_id}/experiments | List
[**sample**](ExperimentsApi.md#sample) | **GET** /experiments/{experiment_id}/model-config | Sample
[**update**](ExperimentsApi.md#update) | **PATCH** /experiments/{experiment_id} | Update


# **create**

#### **POST** /projects/{project_id}/experiments

### Description
Create an experiment for your project.

You can optionally specify IDs of your project's model configs to include
in the experiment, along with a set of labels to consider as positive feedback
and whether the experiment should be set as active.

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

const createResponse = await humanloop.experiments.create({
  projectId: "projectId_example",
  name: "name_example",
  positive_labels: [
    {
      type: "type_example",
      value: "value_example",
    },
  ],
  set_active: false,
});

console.log(createResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createExperimentRequest** | **CreateExperimentRequest**|  |
 **projectId** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined


### Return type

**ExperimentResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **delete**

#### **DELETE** /experiments/{experiment_id}

### Description
Delete the experiment with the specified ID.

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

const deleteResponse = await humanloop.experiments.delete({
  experimentId: "experimentId_example",
});

console.log(deleteResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **experimentId** | [**string**] | String ID of experiment. Starts with `exp_`. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **list**

#### **GET** /projects/{project_id}/experiments

### Description
Get an array of experiments associated to your project.

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

const listResponse = await humanloop.experiments.list({
  projectId: "projectId_example",
});

console.log(listResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined


### Return type

**Array<ExperimentResponse>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **sample**

#### **GET** /experiments/{experiment_id}/model-config

### Description
Samples a model config from the experiment's active model configs.

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

const sampleResponse = await humanloop.experiments.sample({
  experimentId: "experimentId_example",
});

console.log(sampleResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **experimentId** | [**string**] | String ID of experiment. Starts with `exp_`. | defaults to undefined


### Return type

**GetModelConfigResponse**

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

#### **PATCH** /experiments/{experiment_id}

### Description
Update your experiment, including registering and de-registering
model configs.

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

const updateResponse = await humanloop.experiments.update({
  experimentId: "experimentId_example",
});

console.log(updateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateExperimentRequest** | **UpdateExperimentRequest**|  |
 **experimentId** | [**string**] | String ID of experiment. Starts with `exp_`. | defaults to undefined


### Return type

**ExperimentResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


