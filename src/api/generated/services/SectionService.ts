/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_CreateSectionRequest } from '../models/ds_CreateSectionRequest';
import type { ds_Section } from '../models/ds_Section';
import type { ds_UpdateSectionRequest } from '../models/ds_UpdateSectionRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SectionService {

    /**
     * Updates section
     * Updates a section in the current project
     * @param data Section information
     * @param sectionId Section ID
     * @returns ds_Section OK
     * @throws ApiError
     */
    public static putApiProjectSection(
        data: ds_UpdateSectionRequest,
        sectionId: string,
    ): CancelablePromise<Array<ds_Section>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/project/section/{section_id}',
            path: {
                'section_id': sectionId,
            },
            body: data,
            errors: {
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Deletes section
     * Deletes section from current project
     * @param sectionId Section ID
     * @returns ds_Section OK
     * @throws ApiError
     */
    public static deleteApiProjectSection(
        sectionId: string,
    ): CancelablePromise<Array<ds_Section>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/project/section/{section_id}',
            path: {
                'section_id': sectionId,
            },
            errors: {
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Creates section
     * Creates a section in the project
     * @param projectId Project ID
     * @param data Section information
     * @returns ds_Section OK
     * @throws ApiError
     */
    public static postApiProjectSection(
        projectId: string,
        data: ds_CreateSectionRequest,
    ): CancelablePromise<Array<ds_Section>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/project/{project_id}/section',
            path: {
                'project_id': projectId,
            },
            body: data,
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns all sections
     * Returns all sections of the current project
     * @param projectId Project ID
     * @returns ds_Section OK
     * @throws ApiError
     */
    public static getApiProjectSections(
        projectId: string,
    ): CancelablePromise<Array<ds_Section>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/project/{project_id}/sections',
            path: {
                'project_id': projectId,
            },
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

}
