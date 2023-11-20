/* tslint:disable */
/* eslint-disable */
/*
Humanloop API

The Humanloop API allows you to interact with Humanloop from your product or service.

You can do this through HTTP requests from any language or via our official Python or TypeScript SDK.

To install the official [Python SDK](https://pypi.org/project/humanloop/), run the following command:

```bash
pip install humanloop
```

To install the official [TypeScript SDK](https://www.npmjs.com/package/humanloop), run the following command:

```bash
npm i humanloop
```

---

Guides and further details about key concepts can be found in [our docs](https://docs.humanloop.com/).

The version of the OpenAPI document: 4.0.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ChatDeployedRequest } from '../models';
// @ts-ignore
import { ChatExperimentRequest } from '../models';
// @ts-ignore
import { ChatMessage } from '../models';
// @ts-ignore
import { ChatModelConfigRequest } from '../models';
// @ts-ignore
import { ChatRequest } from '../models';
// @ts-ignore
import { ChatResponse } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { ModelConfigurationProperty } from '../models';
// @ts-ignore
import { ProviderAPIKeysProperty } from '../models';
// @ts-ignore
import { ResponseFormatProperty } from '../models';
// @ts-ignore
import { ToolCallProperty1 } from '../models';
// @ts-ignore
import { ToolChoiceProperty } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ChatsApi - axios parameter creator
 * @export
 */
export const ChatsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a chat response by providing details of the model configuration in the request.
         * @summary Chat
         * @param {ChatRequest} chatRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (chatRequest: ChatRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatRequest' is not null or undefined
            assertParamExists('create', 'chatRequest', chatRequest)
            const localVarPath = `/chat`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: chatRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(chatRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a chat response using the project\'s active deployment.  The active deployment can be a specific model configuration or an experiment.
         * @summary Chat Deployed
         * @param {ChatDeployedRequest} chatDeployedRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDeployed: async (chatDeployedRequest: ChatDeployedRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatDeployedRequest' is not null or undefined
            assertParamExists('createDeployed', 'chatDeployedRequest', chatDeployedRequest)
            const localVarPath = `/chat-deployed`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: chatDeployedRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(chatDeployedRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a chat response for a specific experiment.
         * @summary Chat Experiment
         * @param {ChatExperimentRequest} chatExperimentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExperiment: async (chatExperimentRequest: ChatExperimentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatExperimentRequest' is not null or undefined
            assertParamExists('createExperiment', 'chatExperimentRequest', chatExperimentRequest)
            const localVarPath = `/chat-experiment`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: chatExperimentRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(chatExperimentRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get chat response for a specific model configuration.
         * @summary Chat Model Config
         * @param {ChatModelConfigRequest} chatModelConfigRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createModelConfig: async (chatModelConfigRequest: ChatModelConfigRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatModelConfigRequest' is not null or undefined
            assertParamExists('createModelConfig', 'chatModelConfigRequest', chatModelConfigRequest)
            const localVarPath = `/chat-model-config`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: chatModelConfigRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(chatModelConfigRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChatsApi - functional programming interface
 * @export
 */
export const ChatsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChatsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a chat response by providing details of the model configuration in the request.
         * @summary Chat
         * @param {ChatsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: ChatsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a chat response using the project\'s active deployment.  The active deployment can be a specific model configuration or an experiment.
         * @summary Chat Deployed
         * @param {ChatsApiCreateDeployedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDeployed(requestParameters: ChatsApiCreateDeployedRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDeployed(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a chat response for a specific experiment.
         * @summary Chat Experiment
         * @param {ChatsApiCreateExperimentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createExperiment(requestParameters: ChatsApiCreateExperimentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createExperiment(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get chat response for a specific model configuration.
         * @summary Chat Model Config
         * @param {ChatsApiCreateModelConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createModelConfig(requestParameters: ChatsApiCreateModelConfigRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createModelConfig(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChatsApi - factory interface
 * @export
 */
export const ChatsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChatsApiFp(configuration)
    return {
        /**
         * Get a chat response by providing details of the model configuration in the request.
         * @summary Chat
         * @param {ChatsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: ChatsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<ChatResponse> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a chat response using the project\'s active deployment.  The active deployment can be a specific model configuration or an experiment.
         * @summary Chat Deployed
         * @param {ChatsApiCreateDeployedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDeployed(requestParameters: ChatsApiCreateDeployedRequest, options?: AxiosRequestConfig): AxiosPromise<ChatResponse> {
            return localVarFp.createDeployed(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a chat response for a specific experiment.
         * @summary Chat Experiment
         * @param {ChatsApiCreateExperimentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExperiment(requestParameters: ChatsApiCreateExperimentRequest, options?: AxiosRequestConfig): AxiosPromise<ChatResponse> {
            return localVarFp.createExperiment(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get chat response for a specific model configuration.
         * @summary Chat Model Config
         * @param {ChatsApiCreateModelConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createModelConfig(requestParameters: ChatsApiCreateModelConfigRequest, options?: AxiosRequestConfig): AxiosPromise<ChatResponse> {
            return localVarFp.createModelConfig(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in ChatsApi.
 * @export
 * @interface ChatsApiCreateRequest
 */
export type ChatsApiCreateRequest = {
    
} & ChatRequest

/**
 * Request parameters for createDeployed operation in ChatsApi.
 * @export
 * @interface ChatsApiCreateDeployedRequest
 */
export type ChatsApiCreateDeployedRequest = {
    
} & ChatDeployedRequest

/**
 * Request parameters for createExperiment operation in ChatsApi.
 * @export
 * @interface ChatsApiCreateExperimentRequest
 */
export type ChatsApiCreateExperimentRequest = {
    
} & ChatExperimentRequest

/**
 * Request parameters for createModelConfig operation in ChatsApi.
 * @export
 * @interface ChatsApiCreateModelConfigRequest
 */
export type ChatsApiCreateModelConfigRequest = {
    
} & ChatModelConfigRequest

/**
 * ChatsApiGenerated - object-oriented interface
 * @export
 * @class ChatsApiGenerated
 * @extends {BaseAPI}
 */
export class ChatsApiGenerated extends BaseAPI {
    /**
     * Get a chat response by providing details of the model configuration in the request.
     * @summary Chat
     * @param {ChatsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApiGenerated
     */
    public create(requestParameters: ChatsApiCreateRequest, options?: AxiosRequestConfig) {
        return ChatsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a chat response using the project\'s active deployment.  The active deployment can be a specific model configuration or an experiment.
     * @summary Chat Deployed
     * @param {ChatsApiCreateDeployedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApiGenerated
     */
    public createDeployed(requestParameters: ChatsApiCreateDeployedRequest, options?: AxiosRequestConfig) {
        return ChatsApiFp(this.configuration).createDeployed(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a chat response for a specific experiment.
     * @summary Chat Experiment
     * @param {ChatsApiCreateExperimentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApiGenerated
     */
    public createExperiment(requestParameters: ChatsApiCreateExperimentRequest, options?: AxiosRequestConfig) {
        return ChatsApiFp(this.configuration).createExperiment(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get chat response for a specific model configuration.
     * @summary Chat Model Config
     * @param {ChatsApiCreateModelConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApiGenerated
     */
    public createModelConfig(requestParameters: ChatsApiCreateModelConfigRequest, options?: AxiosRequestConfig) {
        return ChatsApiFp(this.configuration).createModelConfig(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
