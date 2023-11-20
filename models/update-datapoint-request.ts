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

import { ChatMessage } from './chat-message';
import { Target } from './target';

/**
 * 
 * @export
 * @interface UpdateDatapointRequest
 */
export interface UpdateDatapointRequest {
    /**
     * The inputs to the prompt template for this datapoint.
     * @type {{ [key: string]: string; }}
     * @memberof UpdateDatapointRequest
     */
    'inputs'?: { [key: string]: string; };
    /**
     * The chat messages for this datapoint.
     * @type {Array<ChatMessage>}
     * @memberof UpdateDatapointRequest
     */
    'messages'?: Array<ChatMessage>;
    /**
     * Object with criteria necessary to evaluate this datapoint.
     * @type {{ [key: string]: Target; }}
     * @memberof UpdateDatapointRequest
     */
    'target'?: { [key: string]: Target; };
}

