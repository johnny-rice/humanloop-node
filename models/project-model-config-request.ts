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

import { ChatMessageWithToolCall } from './chat-message-with-tool-call';
import { ModelEndpoints } from './model-endpoints';
import { ModelProviders } from './model-providers';
import { ResponseFormat } from './response-format';
import { StopSequenceSProperty } from './stop-sequence-sproperty';
import { ToolsEquivalentToOpenAIFunctionsPropertyInner } from './tools-equivalent-to-open-aifunctions-property-inner';

/**
 * Model config request.  Contains fields that are common to all (i.e. both chat and complete) endpoints.
 * @export
 * @interface ProjectModelConfigRequest
 */
export interface ProjectModelConfigRequest {
    /**
     * A description of the model config.
     * @type {string}
     * @memberof ProjectModelConfigRequest
     */
    'description'?: string;
    /**
     * A friendly display name for the model config. If not provided, a name will be generated.
     * @type {string}
     * @memberof ProjectModelConfigRequest
     */
    'name'?: string;
    /**
     * The company providing the underlying model service.
     * @type {ModelProviders}
     * @memberof ProjectModelConfigRequest
     */
    'provider'?: ModelProviders;
    /**
     * The model instance used. E.g. text-davinci-002.
     * @type {string}
     * @memberof ProjectModelConfigRequest
     */
    'model': string;
    /**
     * The maximum number of tokens to generate. Provide max_tokens=-1 to dynamically calculate the maximum number of tokens to generate given the length of the prompt
     * @type {number}
     * @memberof ProjectModelConfigRequest
     */
    'max_tokens'?: number;
    /**
     * What sampling temperature to use when making a generation. Higher values means the model will be more creative.
     * @type {number}
     * @memberof ProjectModelConfigRequest
     */
    'temperature'?: number;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
     * @type {number}
     * @memberof ProjectModelConfigRequest
     */
    'top_p'?: number;
    /**
     * 
     * @type {StopSequenceSProperty}
     * @memberof ProjectModelConfigRequest
     */
    'stop'?: StopSequenceSProperty;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the generation so far.
     * @type {number}
     * @memberof ProjectModelConfigRequest
     */
    'presence_penalty'?: number;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on how frequently they appear in the generation so far.
     * @type {number}
     * @memberof ProjectModelConfigRequest
     */
    'frequency_penalty'?: number;
    /**
     * Other parameter values to be passed to the provider call.
     * @type {object}
     * @memberof ProjectModelConfigRequest
     */
    'other'?: object;
    /**
     * If specified, model will make a best effort to sample deterministically, but it is not guaranteed.
     * @type {number}
     * @memberof ProjectModelConfigRequest
     */
    'seed'?: number;
    /**
     * The format of the response. Only type json_object is currently supported for chat.
     * @type {ResponseFormat}
     * @memberof ProjectModelConfigRequest
     */
    'response_format'?: ResponseFormat;
    /**
     * Unique project name. If it does not exist, a new project will be created.
     * @type {string}
     * @memberof ProjectModelConfigRequest
     */
    'project'?: string;
    /**
     * Unique project ID
     * @type {string}
     * @memberof ProjectModelConfigRequest
     */
    'project_id'?: string;
    /**
     * Prompt template that will take your specified inputs to form your final request to the provider model. NB: Input variables within the prompt template should be specified with syntax: {{INPUT_NAME}}.
     * @type {string}
     * @memberof ProjectModelConfigRequest
     */
    'prompt_template'?: string;
    /**
     * Messages prepended to the list of messages sent to the provider. These messages that will take your specified inputs to form your final request to the provider model. NB: Input variables within the prompt template should be specified with syntax: {{INPUT_NAME}}.
     * @type {Array<ChatMessageWithToolCall>}
     * @memberof ProjectModelConfigRequest
     */
    'chat_template'?: Array<ChatMessageWithToolCall>;
    /**
     * Which of the providers model endpoints to use. For example Complete or Edit.
     * @type {ModelEndpoints}
     * @memberof ProjectModelConfigRequest
     */
    'endpoint'?: ModelEndpoints;
    /**
     * Make tools available to OpenAIs chat model as functions.
     * @type {Array<ToolsEquivalentToOpenAIFunctionsPropertyInner>}
     * @memberof ProjectModelConfigRequest
     */
    'tools'?: Array<ToolsEquivalentToOpenAIFunctionsPropertyInner>;
}

