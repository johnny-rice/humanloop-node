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

import { UserResponse } from './user-response';

/**
 * The user who created the config.
 * @export
 * @interface CreatedByProperty
 */
export interface CreatedByProperty {
    /**
     * String ID of user. Starts with `usr_`.
     * @type {string}
     * @memberof CreatedByProperty
     */
    'id': string;
    /**
     * The user\'s email address.
     * @type {string}
     * @memberof CreatedByProperty
     */
    'email_address': string;
    /**
     * The user\'s full name.
     * @type {string}
     * @memberof CreatedByProperty
     */
    'full_name'?: string;
    /**
     * Whether the user has verified their email address.
     * @type {boolean}
     * @memberof CreatedByProperty
     */
    'verified': boolean;
}

