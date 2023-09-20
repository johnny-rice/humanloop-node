/* tslint:disable */
/* eslint-disable */
/**
 * Humanloop API
 * The Humanloop API allows you to interact with Humanloop from your product or service.  You can do this through HTTP requests from any language or via our official Python or TypeScript SDK.  To install the official [Python SDK](https://pypi.org/project/humanloop/), run the following command:  ```bash pip install humanloop ```  To install the official [TypeScript SDK](https://www.npmjs.com/package/humanloop), run the following command:  ```bash npm i humanloop ```  ---  Guides and further details about key concepts can be found in [our docs](https://docs.humanloop.com/).
 *
 * The version of the OpenAPI document: 4.0.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ChatMessage } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { Target } from '../models';
// @ts-ignore
import { TestcaseResponse } from '../models';
// @ts-ignore
import { UpdateTestcaseRequest } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TestcasesApi - axios parameter creator
 * @export
 */
export const TestcasesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a list of testsets by their IDs.
         * @summary Delete
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (requestBody: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('delete', 'requestBody', requestBody)
            const localVarPath = `/testcases`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: requestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a testcase by ID.
         * @summary Get
         * @param {string} id String ID of testcase. Starts with &#x60;evtc_&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('get', 'id', id)
            const localVarPath = `/testcases/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Edit the input, messages and criteria fields of a testcase. The fields passed in the request are the ones edited.  Passing `null` as a value for a field will delete that field. In order to signify not changing a field, it should be omitted from the request body.
         * @summary Update
         * @param {string} id String ID of testcase. Starts with &#x60;evtc_&#x60;.
         * @param {UpdateTestcaseRequest} updateTestcaseRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (id: string, updateTestcaseRequest: UpdateTestcaseRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update', 'id', id)
            // verify required parameter 'updateTestcaseRequest' is not null or undefined
            assertParamExists('update', 'updateTestcaseRequest', updateTestcaseRequest)
            const localVarPath = `/testcases/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateTestcaseRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateTestcaseRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TestcasesApi - functional programming interface
 * @export
 */
export const TestcasesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TestcasesApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a list of testsets by their IDs.
         * @summary Delete
         * @param {TestcasesApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: TestcasesApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a testcase by ID.
         * @summary Get
         * @param {TestcasesApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: TestcasesApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestcaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Edit the input, messages and criteria fields of a testcase. The fields passed in the request are the ones edited.  Passing `null` as a value for a field will delete that field. In order to signify not changing a field, it should be omitted from the request body.
         * @summary Update
         * @param {TestcasesApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(requestParameters: TestcasesApiUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestcaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(requestParameters.id, requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TestcasesApi - factory interface
 * @export
 */
export const TestcasesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TestcasesApiFp(configuration)
    return {
        /**
         * Delete a list of testsets by their IDs.
         * @summary Delete
         * @param {TestcasesApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: TestcasesApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a testcase by ID.
         * @summary Get
         * @param {TestcasesApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: TestcasesApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<TestcaseResponse> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Edit the input, messages and criteria fields of a testcase. The fields passed in the request are the ones edited.  Passing `null` as a value for a field will delete that field. In order to signify not changing a field, it should be omitted from the request body.
         * @summary Update
         * @param {TestcasesApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: TestcasesApiUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<TestcaseResponse> {
            return localVarFp.update(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for delete operation in TestcasesApi.
 * @export
 * @interface TestcasesApiDeleteRequest
 */
export type TestcasesApiDeleteRequest = {
    
} & Array<string>

/**
 * Request parameters for get operation in TestcasesApi.
 * @export
 * @interface TestcasesApiGetRequest
 */
export type TestcasesApiGetRequest = {
    
    /**
    * String ID of testcase. Starts with `evtc_`.
    * @type {string}
    * @memberof TestcasesApiGet
    */
    readonly id: string
    
}

/**
 * Request parameters for update operation in TestcasesApi.
 * @export
 * @interface TestcasesApiUpdateRequest
 */
export type TestcasesApiUpdateRequest = {
    
    /**
    * String ID of testcase. Starts with `evtc_`.
    * @type {string}
    * @memberof TestcasesApiUpdate
    */
    readonly id: string
    
} & UpdateTestcaseRequest

/**
 * TestcasesApiGenerated - object-oriented interface
 * @export
 * @class TestcasesApiGenerated
 * @extends {BaseAPI}
 */
export class TestcasesApiGenerated extends BaseAPI {
    /**
     * Delete a list of testsets by their IDs.
     * @summary Delete
     * @param {TestcasesApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestcasesApiGenerated
     */
    public delete(requestParameters: TestcasesApiDeleteRequest, options?: AxiosRequestConfig) {
        return TestcasesApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a testcase by ID.
     * @summary Get
     * @param {TestcasesApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestcasesApiGenerated
     */
    public get(requestParameters: TestcasesApiGetRequest, options?: AxiosRequestConfig) {
        return TestcasesApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Edit the input, messages and criteria fields of a testcase. The fields passed in the request are the ones edited.  Passing `null` as a value for a field will delete that field. In order to signify not changing a field, it should be omitted from the request body.
     * @summary Update
     * @param {TestcasesApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestcasesApiGenerated
     */
    public update(requestParameters: TestcasesApiUpdateRequest, options?: AxiosRequestConfig) {
        return TestcasesApiFp(this.configuration).update(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
