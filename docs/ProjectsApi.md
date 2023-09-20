# ProjectsApi

All URIs are relative to *https://api.humanloop.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ProjectsApi.md#create) | **POST** /projects | Create
[**createFeedbackType**](ProjectsApi.md#createFeedbackType) | **POST** /projects/{id}/feedback-types | Create Feedback Type
[**deactivateConfig**](ProjectsApi.md#deactivateConfig) | **DELETE** /projects/{id}/active-config | Deactivate Config
[**deactivateExperiment**](ProjectsApi.md#deactivateExperiment) | **DELETE** /projects/{id}/active-experiment | Deactivate Experiment
[**deleteDeployedConfig**](ProjectsApi.md#deleteDeployedConfig) | **DELETE** /projects/{project_id}/deployed-config/{environment_id} | Delete Deployed Config
[**deployConfig**](ProjectsApi.md#deployConfig) | **PATCH** /projects/{project_id}/deploy-config | Deploy Config
[**export**](ProjectsApi.md#export) | **POST** /projects/{id}/export | Export
[**get**](ProjectsApi.md#get) | **GET** /projects/{id} | Get
[**getActiveConfig**](ProjectsApi.md#getActiveConfig) | **GET** /projects/{id}/active-config | Get Active Config
[**list**](ProjectsApi.md#list) | **GET** /projects | List
[**listConfigs**](ProjectsApi.md#listConfigs) | **GET** /projects/{id}/configs | List Configs
[**listDeployedConfigs**](ProjectsApi.md#listDeployedConfigs) | **GET** /projects/{id}/deployed-configs | List Deployed Configs
[**update**](ProjectsApi.md#update) | **PATCH** /projects/{id} | Update
[**updateFeedbackTypes**](ProjectsApi.md#updateFeedbackTypes) | **PATCH** /projects/{id}/feedback-types | Update Feedback Types


# **create**

#### **POST** /projects

### Description
Create a new project.

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

const createResponse = await humanloop.projects.create({
  name: "name_example",
});

console.log(createResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProjectRequest** | **CreateProjectRequest**|  |


### Return type

**ProjectResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createFeedbackType**

#### **POST** /projects/{id}/feedback-types


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

const createFeedbackTypeResponse = await humanloop.projects.createFeedbackType({
  id: "id_example",
  type: "type_example",
});

console.log(createFeedbackTypeResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackTypeRequest** | **FeedbackTypeRequest**|  |
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined


### Return type

**FeedbackTypeModel**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deactivateConfig**

#### **DELETE** /projects/{id}/active-config

### Description
Remove the project's active config, if set.

This has no effect if the project does not have an active model config set.

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

const deactivateConfigResponse = await humanloop.projects.deactivateConfig({
  id: "id_example",
});

console.log(deactivateConfigResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined
 **environment** | [**string**] | Name for the environment. E.g. \'producton\'. If not provided, will delete the active config for the default environment. | (optional) defaults to undefined


### Return type

**ProjectResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deactivateExperiment**

#### **DELETE** /projects/{id}/active-experiment

### Description
Remove the project's active experiment, if set.

This has no effect if the project does not have an active experiment set.

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

const deactivateExperimentResponse =
  await humanloop.projects.deactivateExperiment({
    id: "id_example",
  });

console.log(deactivateExperimentResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined
 **environment** | [**string**] | Name for the environment. E.g. \'producton\'. If not provided, will return the experiment for the default environment. | (optional) defaults to undefined


### Return type

**ProjectResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteDeployedConfig**

#### **DELETE** /projects/{project_id}/deployed-config/{environment_id}

### Description
Remove the model config deployed to environment.

This has no effect if the project does not have an active model config set.

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

const deleteDeployedConfigResponse =
  await humanloop.projects.deleteDeployedConfig({
    projectId: "projectId_example",
    environmentId: "environmentId_example",
  });

console.log(deleteDeployedConfigResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] |  | defaults to undefined
 **environmentId** | [**string**] |  | defaults to undefined


### Return type

**object**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deployConfig**

#### **PATCH** /projects/{project_id}/deploy-config

### Description
Deploy a model config to an environment.

If the environment already has a model config deployed, it will be replaced.

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

const deployConfigResponse = await humanloop.projects.deployConfig({
  projectId: "projectId_example",
});

console.log(deployConfigResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentProjectConfigRequest** | **EnvironmentProjectConfigRequest**|  |
 **projectId** | [**string**] |  | defaults to undefined


### Return type

**Array<EnvironmentProjectConfigResponse>**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **export**

#### **POST** /projects/{id}/export

### Description
Export all logged datapoints associated to your project.

Results are paginated and sorts the datapoints based on `created_at` in
descending order.

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

let page = await humanloop.projects.export({
  id: "id_example",
  page: 0,
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
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined
 **page** | [**number**] | Page offset for pagination. | (optional) defaults to 0
 **size** | [**number**] | Page size for pagination. Number of logs to export. | (optional) defaults to 10


### Return type

**PaginatedDataLogResponse**

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

#### **GET** /projects/{id}

### Description
Get a specific project.

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

const getResponse = await humanloop.projects.get({
  id: "id_example",
});

console.log(getResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined


### Return type

**ProjectResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getActiveConfig**

#### **GET** /projects/{id}/active-config

### Description
Retrieves a config to use to execute your model.

A config will be selected based on the project's
active config/experiment settings.

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

const getActiveConfigResponse = await humanloop.projects.getActiveConfig({
  id: "id_example",
});

console.log(getActiveConfigResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined
 **environment** | [**string**] | Name for the environment. E.g. \'producton\'. If not provided, will return the active config for the default environment. | (optional) defaults to undefined


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

# **list**

#### **GET** /projects

### Description
Get a paginated list of projects.

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

let page = await humanloop.projects.list({
  page: 0,
  size: 10,
  organizationId: "string_example",
  filter: "string_example",
  userFilter: "string_example",
  sortBy: "string_example",
  order: "string_example",
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
 **page** | [**number**] | Page offset for pagination. | (optional) defaults to 0
 **size** | [**number**] | Page size for pagination. Number of projects to fetch. | (optional) defaults to 10
 **organizationId** | [**string**] | ID of organization that fetched projects belong to. Starts with `org_`. | (optional) defaults to undefined
 **filter** | [**string**] | Case-insensitive filter for project name. | (optional) defaults to undefined
 **userFilter** | [**string**] | Case-insensitive filter for users in the project. This filter matches against both email address and name of users. | (optional) defaults to undefined
 **sortBy** | **ProjectSortBy** | Field to sort projects by | (optional) defaults to undefined
 **order** | **SortOrder** | Direction to sort by. | (optional) defaults to undefined


### Return type

**PaginatedDataProjectResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listConfigs**

#### **GET** /projects/{id}/configs

### Description
Get an array of configs associated to your project.

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

const listConfigsResponse = await humanloop.projects.listConfigs({
  id: "id_example",
});

console.log(listConfigsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined
 **evaluationAggregates** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**Array<ProjectConfigResponse>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listDeployedConfigs**

#### **GET** /projects/{id}/deployed-configs

### Description
Get an array of environments with the deployed configs associated to your project.

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

const listDeployedConfigsResponse =
  await humanloop.projects.listDeployedConfigs({
    id: "id_example",
  });

console.log(listDeployedConfigsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined


### Return type

**Array<EnvironmentProjectConfigResponse>**

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

#### **PATCH** /projects/{id}

### Description
Update a specific project.

Set the project's active model config/experiment by passing either
`active_experiment_id` or `active_model_config_id`.
These will be set to the Default environment unless a list of environments
are also passed in specifically detailing which environments to assign the
active config or experiment.

Set the feedback labels to be treated as positive user feedback used in
calculating top-level project metrics by passing a list of labels in
`positive_labels`.

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

const updateResponse = await humanloop.projects.update({
  id: "id_example",
});

console.log(updateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProjectRequest** | **UpdateProjectRequest**|  |
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined


### Return type

**ProjectResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateFeedbackTypes**

#### **PATCH** /projects/{id}/feedback-types

### Description
Update feedback types.

Allows enabling the available feedback types and setting status of
feedback types/categorical values.

This behaves like an upsert; any feedback categorical values that do not
already exist in the project will be created.

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

const updateFeedbackTypesResponse =
  await humanloop.projects.updateFeedbackTypes({
    id: "id_example",
    requestBody: [
      {
        type: "type_example",
      },
    ],
  });

console.log(updateFeedbackTypesResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackTypeRequest** | **Array<FeedbackTypeRequest>**|  |
 **id** | [**string**] | String ID of project. Starts with `pr_`. | defaults to undefined


### Return type

**Array<FeedbackTypeModel>**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


