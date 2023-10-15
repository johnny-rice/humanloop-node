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

import { ChatDataResponse } from './chat-data-response';
import { ChatMessage } from './chat-message';
import { ChatRole } from './chat-role';
import { ToolCallProperty } from './tool-call-property';
import { ToolCallProperty1 } from './tool-call-property1';
import { ToolResultResponse } from './tool-result-response';
import { UsageProperty } from './usage-property';

/**
 * Overwrite GenerateResponse for chat.
 * @export
 * @interface ChatResponse
 */
export interface ChatResponse {
    /**
     * Unique identifier of the parent project. Will not be provided if the request was made without providing a project name or id
     * @type {string}
     * @memberof ChatResponse
     */
    'project_id'?: string;
    /**
     * The number of chat responses.
     * @type {number}
     * @memberof ChatResponse
     */
    'num_samples'?: number;
    /**
     * Include the log probabilities of the top n tokens in the provider_response
     * @type {number}
     * @memberof ChatResponse
     */
    'logprobs'?: number;
    /**
     * The suffix that comes after a completion of inserted text. Useful for completions that act like inserts.
     * @type {string}
     * @memberof ChatResponse
     */
    'suffix'?: string;
    /**
     * End-user ID passed through to provider call.
     * @type {string}
     * @memberof ChatResponse
     */
    'user'?: string;
    /**
     * Array containing the chat responses.
     * @type {Array<ChatDataResponse>}
     * @memberof ChatResponse
     */
    'data': Array<ChatDataResponse>;
    /**
     * 
     * @type {UsageProperty}
     * @memberof ChatResponse
     */
    'usage'?: UsageProperty;
    /**
     * Any additional metadata to record.
     * @type {object}
     * @memberof ChatResponse
     */
    'metadata'?: object;
    /**
     * The raw responses returned by the model provider.
     * @type {Array<any>}
     * @memberof ChatResponse
     */
    'provider_responses': Array<any>;
    /**
     * 
     * @type {ToolCallProperty1}
     * @memberof ChatResponse
     */
    'tool_call'?: ToolCallProperty1;
}

