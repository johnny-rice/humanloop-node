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
import type * as buffer from "buffer"

import { ProviderAPIKeysProperty1 } from './provider-apikeys-property1';

/**
 * 
 * @export
 * @interface CreateEvaluationRequest
 */
export interface CreateEvaluationRequest {
    /**
     * ID of the config to evaluate. Starts with `config_`.
     * @type {string}
     * @memberof CreateEvaluationRequest
     */
    'config_id': string;
    /**
     * IDs of evaluators to run on the dataset. IDs start with `evfn_`
     * @type {Array<string>}
     * @memberof CreateEvaluationRequest
     */
    'evaluator_ids': Array<string>;
    /**
     * ID of the dataset to use in this evaluation. Starts with `evts_`.
     * @type {string}
     * @memberof CreateEvaluationRequest
     */
    'dataset_id': string;
    /**
     * 
     * @type {ProviderAPIKeysProperty1}
     * @memberof CreateEvaluationRequest
     */
    'provider_api_keys'?: ProviderAPIKeysProperty1;
    /**
     * The maximum number of concurrent generations to run. A higher value will result in faster completion of the evaluation but may place higher load on your provider rate-limits. 
     * @type {number}
     * @memberof CreateEvaluationRequest
     */
    'max_concurrency'?: number;
    /**
     * Whether the log generations for this evaluation should be performed by Humanloop. If `False`, the log generations should be submitted by the user via the API.
     * @type {boolean}
     * @memberof CreateEvaluationRequest
     */
    'hl_generated'?: boolean;
}

