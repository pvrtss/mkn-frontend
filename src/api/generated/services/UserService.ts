/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_ChangeEmailRequest } from '../models/ds_ChangeEmailRequest';
import type { ds_User } from '../models/ds_User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Changes user email
     * Changes user email
     * @param data New user email
     * @returns ds_User OK
     * @throws ApiError
     */
    public static putApiEmail(
        data: ds_ChangeEmailRequest,
    ): CancelablePromise<ds_User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/email',
            body: data,
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

}
