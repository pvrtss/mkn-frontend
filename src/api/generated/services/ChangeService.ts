/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_FavoriteProject } from '../models/ds_FavoriteProject';
import type { ds_Notification } from '../models/ds_Notification';
import type { ds_Project } from '../models/ds_Project';
import type { ds_Section } from '../models/ds_Section';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChangeService {

    /**
     * Changes user email
     * Changes user email
     * @returns ds_FavoriteProject OK
     * @throws ApiError
     */
    public static putEmail(): CancelablePromise<Array<ds_FavoriteProject>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/email',
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update notifications
     * Update information about a specific notification according to the entered parameters
     * @param notificationId Notification ID
     * @returns ds_Notification OK
     * @throws ApiError
     */
    public static putProjectSectionNotification(
notificationId: string,
): CancelablePromise<Array<ds_Notification>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/project/section/notification/{notification_id}',
            path: {
                'notification_id': notificationId,
            },
            errors: {
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Updates section
     * Updates a section in the current project
     * @param sectionId Section ID
     * @returns ds_Section OK
     * @throws ApiError
     */
    public static putProjectSection(
sectionId: string,
): CancelablePromise<Array<ds_Section>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/project/section/{section_id}',
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
     * Update project
     * Updates a specific project according to the entered parameters
     * @param projectId Project ID
     * @returns ds_Project OK
     * @throws ApiError
     */
    public static putProject(
projectId: string,
): CancelablePromise<Array<ds_Project>> {
        return __request(OpenAPI, {
            method: 'PUT',
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

}
