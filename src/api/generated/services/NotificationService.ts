/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_CreateNotificationRequest } from '../models/ds_CreateNotificationRequest';
import type { ds_Notification } from '../models/ds_Notification';
import type { ds_ResendNotificationRequest } from '../models/ds_ResendNotificationRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationService {

    /**
     * Resend notification
     * Resend notification
     * @param data Section information
     * @param notificationId Notification ID
     * @returns ds_Notification OK
     * @throws ApiError
     */
    public static putProjectSectionNotificationResend(
data: ds_ResendNotificationRequest,
notificationId: string,
): CancelablePromise<Array<ds_Notification>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/project/section/notification/resend/{notification_id}',
            path: {
                'notification_id': notificationId,
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
     * Gets Notification
     * Returns Notification by ID
     * @param notificationId Notification ID
     * @returns ds_Notification OK
     * @throws ApiError
     */
    public static getProjectSectionNotification(
notificationId: string,
): CancelablePromise<ds_Notification> {
        return __request(OpenAPI, {
            method: 'GET',
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
     * Delete notifications
     * Update information about a specific notification
     * @param notificationId Notification ID
     * @returns ds_Notification OK
     * @throws ApiError
     */
    public static deleteProjectSectionNotification(
notificationId: string,
): CancelablePromise<Array<ds_Notification>> {
        return __request(OpenAPI, {
            method: 'DELETE',
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
     * Creates notification
     * Creates notification in accordance with the entered parameters
     * @param sectionId Section ID
     * @param data Notification information
     * @returns ds_Notification OK
     * @throws ApiError
     */
    public static postProjectSectionNotification(
sectionId: string,
data: ds_CreateNotificationRequest,
): CancelablePromise<Array<ds_Notification>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project/section/{section_id}/notification',
            path: {
                'section_id': sectionId,
            },
            body: data,
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Gets All Notifications
     * Returns all notifications in the current section
     * @param sectionId Section ID
     * @returns ds_Notification OK
     * @throws ApiError
     */
    public static getProjectSectionNotifications(
sectionId: string,
): CancelablePromise<Array<ds_Notification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/section/{section_id}/notifications',
            path: {
                'section_id': sectionId,
            },
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Gets undelivired notifications
     * Allows the manager to view undelivered notifications
     * @returns ds_Notification OK
     * @throws ApiError
     */
    public static getUndeliveredNotifications(): CancelablePromise<Array<ds_Notification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/undelivered_notifications',
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Gets upcoming notifications
     * Returns upcoming notifications
     * @returns ds_Notification OK
     * @throws ApiError
     */
    public static getUpcoming(): CancelablePromise<Array<ds_Notification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/upcoming',
            errors: {
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

}
