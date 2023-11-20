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
import { ModelConfigChatRequest } from './model-config-chat-request';
import { ModelConfigToolRequest } from './model-config-tool-request';
import { ModelEndpoints } from './model-endpoints';
import { ModelProviders } from './model-providers';
import { ResponseFormatProperty } from './response-format-property';
import { StopSequenceSProperty } from './stop-sequence-sproperty';

/**
 * The model configuration used to create a chat response.
 * @export
 * @interface ModelConfigurationProperty
 */
export interface ModelConfigurationProperty {
    /**
     * A description of the model config.
     * @type {string}
     * @memberof ModelConfigurationProperty
     */
    'description'?: string;
    /**
     * A friendly display name for the model config. If not provided, a name will be generated.
     * @type {string}
     * @memberof ModelConfigurationProperty
     */
    'name'?: string;
    /**
     * The company providing the underlying model service.
     * @type {ModelProviders}
     * @memberof ModelConfigurationProperty
     */
    'provider'?: ModelProviders;
    /**
     * The model instance used. E.g. text-davinci-002.
     * @type {string}
     * @memberof ModelConfigurationProperty
     */
    'model': string;
    /**
     * The maximum number of tokens to generate. Provide max_tokens=-1 to dynamically calculate the maximum number of tokens to generate given the length of the prompt
     * @type {number}
     * @memberof ModelConfigurationProperty
     */
    'max_tokens'?: number;
    /**
     * What sampling temperature to use when making a generation. Higher values means the model will be more creative.
     * @type {number}
     * @memberof ModelConfigurationProperty
     */
    'temperature'?: number;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
     * @type {number}
     * @memberof ModelConfigurationProperty
     */
    'top_p'?: number;
    /**
     * 
     * @type {StopSequenceSProperty}
     * @memberof ModelConfigurationProperty
     */
    'stop'?: StopSequenceSProperty;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the generation so far.
     * @type {number}
     * @memberof ModelConfigurationProperty
     */
    'presence_penalty'?: number;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on how frequently they appear in the generation so far.
     * @type {number}
     * @memberof ModelConfigurationProperty
     */
    'frequency_penalty'?: number;
    /**
     * Other parameter values to be passed to the provider call.
     * @type {object}
     * @memberof ModelConfigurationProperty
     */
    'other'?: object;
    /**
     * If specified, model will make a best effort to sample deterministically, but it is not guaranteed.
     * @type {number}
     * @memberof ModelConfigurationProperty
     */
    'seed'?: number;
    /**
     * The provider model endpoint used.
     * @type {ModelEndpoints}
     * @memberof ModelConfigurationProperty
     */
    'endpoint'?: ModelEndpoints;
    /**
     * Messages prepended to the list of messages sent to the provider. These messages that will take your specified inputs to form your final request to the provider model. Input variables within the template should be specified with syntax: {{INPUT_NAME}}.
     * @type {Array<ChatMessage>}
     * @memberof ModelConfigurationProperty
     */
    'chat_template'?: Array<ChatMessage>;
    /**
     * Make tools available to OpenAIs chat model as functions.
     * @type {Array<ModelConfigToolRequest>}
     * @memberof ModelConfigurationProperty
     */
    'tools'?: Array<ModelConfigToolRequest>;
    /**
     * 
     * @type {ResponseFormatProperty}
     * @memberof ModelConfigurationProperty
     */
    'response_format'?: ResponseFormatProperty;
}

