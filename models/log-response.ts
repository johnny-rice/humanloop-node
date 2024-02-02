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
import { ConfigResponse } from './config-response';
import { EvaluationResultResponse } from './evaluation-result-response';
import { FeedbackResponse } from './feedback-response';
import { MetricValueResponse } from './metric-value-response';
import { ObservabilityStatus } from './observability-status';
import { OutputMessageProperty } from './output-message-property';
import { ToolChoiceProperty } from './tool-choice-property';
import { ToolResultResponse } from './tool-result-response';

/**
 * Request model for logging a datapoint.
 * @export
 * @interface LogResponse
 */
export interface LogResponse {
    /**
     * The name of the project associated with this log
     * @type {string}
     * @memberof LogResponse
     */
    'project'?: string;
    /**
     * The unique ID of the project associated with this log.
     * @type {string}
     * @memberof LogResponse
     */
    'project_id'?: string;
    /**
     * ID of the session to associate the datapoint.
     * @type {string}
     * @memberof LogResponse
     */
    'session_id'?: string;
    /**
     * A unique string identifying the session to associate the datapoint to. Allows you to log multiple datapoints to a session (using an ID kept by your internal systems) by passing the same `session_reference_id` in subsequent log requests. Specify at most one of this or `session_id`.
     * @type {string}
     * @memberof LogResponse
     */
    'session_reference_id'?: string;
    /**
     * ID associated to the parent datapoint in a session.
     * @type {string}
     * @memberof LogResponse
     */
    'parent_id'?: string;
    /**
     * A unique string identifying the previously-logged parent datapoint in a session. Allows you to log nested datapoints with your internal system IDs by passing the same reference ID as `parent_id` in a prior log request. Specify at most one of this or `parent_id`. Note that this cannot refer to a datapoint being logged in the same request.
     * @type {string}
     * @memberof LogResponse
     */
    'parent_reference_id'?: string;
    /**
     * The inputs passed to the prompt template.
     * @type {object}
     * @memberof LogResponse
     */
    'inputs'?: object;
    /**
     * Identifies where the model was called from.
     * @type {string}
     * @memberof LogResponse
     */
    'source'?: string;
    /**
     * Any additional metadata to record.
     * @type {object}
     * @memberof LogResponse
     */
    'metadata'?: object;
    /**
     * Whether the request/response payloads will be stored on Humanloop.
     * @type {boolean}
     * @memberof LogResponse
     */
    'save'?: boolean;
    /**
     * ID of the source datapoint if this is a log derived from a datapoint in a dataset.
     * @type {string}
     * @memberof LogResponse
     */
    'source_datapoint_id'?: string;
    /**
     * String ID of logged datapoint. Starts with `data_`.
     * @type {string}
     * @memberof LogResponse
     */
    'id': string;
    /**
     * Unique user-provided string identifying the datapoint.
     * @type {string}
     * @memberof LogResponse
     */
    'reference_id'?: string;
    /**
     * Unique ID of an experiment trial to associate to the log.
     * @type {string}
     * @memberof LogResponse
     */
    'trial_id'?: string;
    /**
     * The messages passed to the to provider chat endpoint.
     * @type {Array<ChatMessage>}
     * @memberof LogResponse
     */
    'messages'?: Array<ChatMessage>;
    /**
     * Generated output from your model for the provided inputs. Can be `None` if logging an error, or if logging a parent datapoint with the intention to populate it later
     * @type {string}
     * @memberof LogResponse
     */
    'output'?: string;
    /**
     * Unique ID of a config to associate to the log.
     * @type {string}
     * @memberof LogResponse
     */
    'config_id'?: string;
    /**
     * 
     * @type {ConfigResponse}
     * @memberof LogResponse
     */
    'config': ConfigResponse;
    /**
     * The environment name used to create the log.
     * @type {string}
     * @memberof LogResponse
     */
    'environment'?: string;
    /**
     * 
     * @type {Array<FeedbackResponse>}
     * @memberof LogResponse
     */
    'feedback'?: Array<FeedbackResponse>;
    /**
     * User defined timestamp for when the log was created. 
     * @type {string}
     * @memberof LogResponse
     */
    'created_at'?: string;
    /**
     * Error message if the log is an error.
     * @type {string}
     * @memberof LogResponse
     */
    'error'?: string;
    /**
     * Duration of the logged event in seconds.
     * @type {number}
     * @memberof LogResponse
     */
    'duration'?: number;
    /**
     * 
     * @type {OutputMessageProperty}
     * @memberof LogResponse
     */
    'output_message'?: OutputMessageProperty;
    /**
     * Number of tokens in the prompt used to generate the output.
     * @type {number}
     * @memberof LogResponse
     */
    'prompt_tokens'?: number;
    /**
     * Number of tokens in the output generated by the model.
     * @type {number}
     * @memberof LogResponse
     */
    'output_tokens'?: number;
    /**
     * Raw request sent to provider.
     * @type {object}
     * @memberof LogResponse
     */
    'provider_request'?: object;
    /**
     * Raw response received the provider.
     * @type {object}
     * @memberof LogResponse
     */
    'provider_response'?: object;
    /**
     * User email address provided when creating the datapoint.
     * @type {string}
     * @memberof LogResponse
     */
    'user'?: string;
    /**
     * Latency of provider response.
     * @type {number}
     * @memberof LogResponse
     */
    'provider_latency'?: number;
    /**
     * Total number of tokens in the prompt and output.
     * @type {number}
     * @memberof LogResponse
     */
    'tokens'?: number;
    /**
     * Raw output from the provider.
     * @type {string}
     * @memberof LogResponse
     */
    'raw_output'?: string;
    /**
     * Reason the generation finished.
     * @type {string}
     * @memberof LogResponse
     */
    'finish_reason'?: string;
    /**
     * 
     * @type {Array<MetricValueResponse>}
     * @memberof LogResponse
     */
    'metric_values'?: Array<MetricValueResponse>;
    /**
     * 
     * @type {Array<ToolResultResponse>}
     * @memberof LogResponse
     */
    'tools'?: Array<ToolResultResponse>;
    /**
     * 
     * @type {ToolChoiceProperty}
     * @memberof LogResponse
     */
    'tool_choice'?: ToolChoiceProperty;
    /**
     * 
     * @type {Array<EvaluationResultResponse>}
     * @memberof LogResponse
     */
    'evaluation_results': Array<EvaluationResultResponse>;
    /**
     * Status of a project datum for observability.
     * @type {ObservabilityStatus}
     * @memberof LogResponse
     */
    'observability_status': ObservabilityStatus;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'updated_at': string;
}

