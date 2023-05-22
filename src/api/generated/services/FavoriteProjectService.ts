/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_FavoriteProject } from '../models/ds_FavoriteProject';
import type { ds_Project } from '../models/ds_Project';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FavoriteProjectService {

    /**
     * Add favorite project
     * Add favorite project
     * @param projectId Project ID
     * @returns ds_FavoriteProject OK
     * @throws ApiError
     */
    public static postApiFavorite(
        projectId: string,
    ): CancelablePromise<Array<ds_FavoriteProject>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/favorite',
            query: {
                'project_id': projectId,
            },
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Delete favorite project
     * Delete favorite user project
     * @param projectId Project ID
     * @returns ds_FavoriteProject OK
     * @throws ApiError
     */
    public static deleteApiFavorite(
        projectId: string,
    ): CancelablePromise<Array<ds_FavoriteProject>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/favorite/{project_id}',
            path: {
                'project_id': projectId,
            },
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Gets favorite projects
     * Returns favorite projects
     * @returns ds_Project OK
     * @throws ApiError
     */
    public static getApiFavorites(): CancelablePromise<Array<ds_Project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/favorites',
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

}
