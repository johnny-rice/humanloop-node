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


/**
 * Summary of a finetuning dataset.
 * @export
 * @interface FinetuneDataSummary
 */
export interface FinetuneDataSummary {
    /**
     * 
     * @type {number}
     * @memberof FinetuneDataSummary
     */
    'data_count': number;
    /**
     * 
     * @type {number}
     * @memberof FinetuneDataSummary
     */
    'error_count': number;
    /**
     * 
     * @type {number}
     * @memberof FinetuneDataSummary
     */
    'truncated_data_count': number;
    /**
     * 
     * @type {number}
     * @memberof FinetuneDataSummary
     */
    'token_count': number;
    /**
     * 
     * @type {number}
     * @memberof FinetuneDataSummary
     */
    'truncated_token_count': number;
    /**
     * 
     * @type {number}
     * @memberof FinetuneDataSummary
     */
    'cost': number;
    /**
     * 
     * @type {Array<object>}
     * @memberof FinetuneDataSummary
     */
    'errors': Array<object>;
    /**
     * 
     * @type {string}
     * @memberof FinetuneDataSummary
     */
    'dataset_name': string;
    /**
     * 
     * @type {string}
     * @memberof FinetuneDataSummary
     */
    'dataset_id': string;
}

