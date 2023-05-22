/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_Collaboration } from '../models/ds_Collaboration';
import type { ds_User } from '../models/ds_User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollaborationsService {

    /**
     * Adds collaborators
     * Adds a collaborator to the current project and returns all collaborators of this project
     * @param collaboratorName Collaborator nickname
     * @param projectId Project ID
     * @returns ds_User OK
     * @throws ApiError
     */
    public static postApiProjectCollaborator(
        collaboratorName: string,
        projectId: string,
    ): CancelablePromise<Array<ds_User>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/project/{project_id}/collaborator',
            path: {
                'project_id': projectId,
            },
            query: {
                'collaborator_name': collaboratorName,
            },
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Deletes collaborator
     * Removes a collaborator from the current project and returns all collaborators of this project
     * @param collaboratorName Collaborator nickname
     * @param projectId Project ID
     * @returns ds_Collaboration OK
     * @throws ApiError
     */
    public static deleteApiProjectCollaborator(
        collaboratorName: string,
        projectId: string,
    ): CancelablePromise<Array<ds_Collaboration>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/project/{project_id}/collaborator',
            path: {
                'project_id': projectId,
            },
            query: {
                'collaborator_name': collaboratorName,
            },
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns collaborators
     * Returns all collaborators of the project
     * @param projectId Project ID
     * @returns ds_User OK
     * @throws ApiError
     */
    public static getApiProjectCollaborators(
        projectId: string,
    ): CancelablePromise<Array<ds_User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/project/{project_id}/collaborators',
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
