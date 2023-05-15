/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_CreateProjectRequest } from '../models/ds_CreateProjectRequest';
import type { ds_Project } from '../models/ds_Project';
import type { ds_UpdateProjectRequest } from '../models/ds_UpdateProjectRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProjectService {

    /**
     * Creates project
     * Creates project
     * @param data Project data
     * @returns ds_Project OK
     * @throws ApiError
     */
    public static postProject(
data: ds_CreateProjectRequest,
): CancelablePromise<ds_Project> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project',
            body: data,
            errors: {
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update project
     * Updates a specific project according to the entered parameters and returns all owned projects
     * @param projectId Project ID
     * @param data New project information
     * @returns ds_Project OK
     * @throws ApiError
     */
    public static putProject(
projectId: string,
data: ds_UpdateProjectRequest,
): CancelablePromise<Array<ds_Project>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/project/{project_id}',
            path: {
                'project_id': projectId,
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
     * Deletes project
     * Deletes a specific project and returns all owned projects
     * @param projectId Project ID
     * @returns ds_Project OK
     * @throws ApiError
     */
    public static deleteProject(
projectId: string,
): CancelablePromise<Array<ds_Project>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/project/{project_id}',
            path: {
                'project_id': projectId,
            },
            errors: {
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Gets all projects
     * Returns all projects
     * @returns ds_Project OK
     * @throws ApiError
     */
    public static getProjects(): CancelablePromise<Array<ds_Project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects',
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns last 6 projects
     * Returns the last six projects by last edit time
     * @returns ds_Project OK
     * @throws ApiError
     */
    public static getProjectsLatest(): CancelablePromise<Array<ds_Project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/latest',
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Gets all owned project
     * Gets all owned project
     * @returns ds_Project OK
     * @throws ApiError
     */
    public static getProjectsOwned(): CancelablePromise<Array<ds_Project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/owned',
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

}
