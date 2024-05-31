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

import { EvaluationResultProperty } from './evaluation-result-property';

/**
 * Provide an externally performed evaluation result for a log in an evaluation.
 * @export
 * @interface CreateEvaluationResultLogRequest
 */
export interface CreateEvaluationResultLogRequest {
    /**
     * The log that was evaluated. Must have as its `source_datapoint_id` one of the datapoints in the dataset being evaluated.
     * @type {string}
     * @memberof CreateEvaluationResultLogRequest
     */
    'log_id': string;
    /**
     * ID of the evaluator that evaluated the log. Starts with `evfn_`. Must be one of the evaluator IDs associated with the evaluation run being logged to.
     * @type {string}
     * @memberof CreateEvaluationResultLogRequest
     */
    'evaluator_id': string;
    /**
     * 
     * @type {EvaluationResultProperty}
     * @memberof CreateEvaluationResultLogRequest
     */
    'result'?: EvaluationResultProperty;
    /**
     * An error that occurred during evaluation.
     * @type {string}
     * @memberof CreateEvaluationResultLogRequest
     */
    'error'?: string;
}

