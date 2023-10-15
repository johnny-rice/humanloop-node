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

import { EvaluatorArgumentsType } from './evaluator-arguments-type';
import { EvaluatorReturnTypeEnum } from './evaluator-return-type-enum';

/**
 * 
 * @export
 * @interface UpdateEvaluatorRequest
 */
export interface UpdateEvaluatorRequest {
    /**
     * The description of the evaluator.
     * @type {string}
     * @memberof UpdateEvaluatorRequest
     */
    'description'?: string;
    /**
     * The name of the evaluator.
     * @type {string}
     * @memberof UpdateEvaluatorRequest
     */
    'name'?: string;
    /**
     * The code for the evaluator. This code will be executed in a sandboxed environment.
     * @type {string}
     * @memberof UpdateEvaluatorRequest
     */
    'code'?: string;
    /**
     * Whether this evaluator is target-free or target-required.
     * @type {EvaluatorArgumentsType}
     * @memberof UpdateEvaluatorRequest
     */
    'arguments_type'?: EvaluatorArgumentsType;
    /**
     * The type of the return value of the evaluator.
     * @type {EvaluatorReturnTypeEnum}
     * @memberof UpdateEvaluatorRequest
     */
    'return_type'?: EvaluatorReturnTypeEnum;
}

