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

// May contain unused imports in some cases
// @ts-ignore
import { ConfigResponse } from './config-response';
// May contain unused imports in some cases
// @ts-ignore
import { EvaluationStatus } from './evaluation-status';
// May contain unused imports in some cases
// @ts-ignore
import { EvaluatorResponse } from './evaluator-response';
// May contain unused imports in some cases
// @ts-ignore
import { ModelConfigEvaluatorAggregateResponse } from './model-config-evaluator-aggregate-response';
// May contain unused imports in some cases
// @ts-ignore
import { TestsetResponse } from './testset-response';

/**
 * 
 * @export
 * @interface EvaluationResponse
 */
export interface EvaluationResponse {
    /**
     * Unique ID for the evaluation. Starts with `ev_`.
     * @type {string}
     * @memberof EvaluationResponse
     */
    'id': string;
    /**
     * 
     * @type {EvaluationStatus}
     * @memberof EvaluationResponse
     */
    'status': EvaluationStatus;
    /**
     * 
     * @type {ConfigResponse}
     * @memberof EvaluationResponse
     */
    'config': ConfigResponse;
    /**
     * 
     * @type {string}
     * @memberof EvaluationResponse
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof EvaluationResponse
     */
    'updated_at': string;
    /**
     * 
     * @type {Array<EvaluatorResponse>}
     * @memberof EvaluationResponse
     */
    'evaluators': Array<EvaluatorResponse>;
    /**
     * 
     * @type {TestsetResponse}
     * @memberof EvaluationResponse
     */
    'testset': TestsetResponse;
    /**
     * 
     * @type {TestsetResponse}
     * @memberof EvaluationResponse
     */
    'testset_snapshot'?: TestsetResponse;
    /**
     * 
     * @type {Array<ModelConfigEvaluatorAggregateResponse>}
     * @memberof EvaluationResponse
     */
    'evaluator_aggregates'?: Array<ModelConfigEvaluatorAggregateResponse>;
}

