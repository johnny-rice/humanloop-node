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

import { DatasetProperty } from './dataset-property';
import { FineTuningConfigProperty } from './fine-tuning-config-property';

/**
 * 
 * @export
 * @interface FinetuneResponse
 */
export interface FinetuneResponse {
    /**
     * Unique identifier for fine-tuned model.
     * @type {string}
     * @memberof FinetuneResponse
     */
    'id': string;
    /**
     * User defined friendly name for a fine-tuning run
     * @type {string}
     * @memberof FinetuneResponse
     */
    'name': string;
    /**
     * The fine-tuning process is run async and so the resultingfine-tuned model won\'t be available for generations until it has completed.
     * @type {string}
     * @memberof FinetuneResponse
     */
    'status': string;
    /**
     * Unique reference for the fine-tuned required to make calls to the provider.
     * @type {string}
     * @memberof FinetuneResponse
     */
    'model_name'?: string;
    /**
     * Any additional metadata that you would like to log for reference.
     * @type {object}
     * @memberof FinetuneResponse
     */
    'metadata'?: object;
    /**
     * Unique ID for the fine-tuned model required to make calls to the provider\'s API.
     * @type {string}
     * @memberof FinetuneResponse
     */
    'provider_id'?: string;
    /**
     * Provider specific fine-tuning results.
     * @type {object}
     * @memberof FinetuneResponse
     */
    'provider_details'?: object;
    /**
     * Summary stats about the data used for finetuning.
     * @type {object}
     * @memberof FinetuneResponse
     */
    'data_summary'?: object;
    /**
     * 
     * @type {FineTuningConfigProperty}
     * @memberof FinetuneResponse
     */
    'config': FineTuningConfigProperty;
    /**
     * 
     * @type {DatasetProperty}
     * @memberof FinetuneResponse
     */
    'dataset': DatasetProperty;
    /**
     * 
     * @type {string}
     * @memberof FinetuneResponse
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof FinetuneResponse
     */
    'updated_at': string;
}

