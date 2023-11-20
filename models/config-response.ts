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

import { AgentConfigResponse } from './agent-config-response';
import { ChatMessage } from './chat-message';
import { GenericConfigResponse } from './generic-config-response';
import { ModelConfigProperty1 } from './model-config-property1';
import { ModelConfigResponse } from './model-config-response';
import { ModelEndpoints } from './model-endpoints';
import { ModelProviders } from './model-providers';
import { ResponseFormatProperty } from './response-format-property';
import { StopSequenceSProperty } from './stop-sequence-sproperty';
import { ToolConfigRequest } from './tool-config-request';
import { ToolConfigResponse } from './tool-config-response';

/**
 * @type ConfigResponse
 * @export
 */
export type ConfigResponse = { type: 'agent' } & AgentConfigResponse | { type: 'generic' } & GenericConfigResponse | { type: 'model' } & ModelConfigResponse | { type: 'tool' } & ToolConfigResponse;


