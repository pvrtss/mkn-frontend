/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_User } from '../models/ds_User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Login user
     * Login user
     * @returns ds_User OK
     * @throws ApiError
     */
    public static postLogin(): CancelablePromise<ds_User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Logout user
     * Logout user
     * @returns ds_User OK
     * @throws ApiError
     */
    public static getLogout(): CancelablePromise<ds_User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/logout',
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Signup user
     * Signup user
     * @returns ds_User OK
     * @throws ApiError
     */
    public static postSignup(): CancelablePromise<ds_User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/signup',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

}
