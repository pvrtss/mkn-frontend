/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ds_Collaboration } from "../models/ds_Collaboration";
import type { ds_FavoriteProject } from "../models/ds_FavoriteProject";
import type { ds_Notification } from "../models/ds_Notification";
import type { ds_Project } from "../models/ds_Project";
import type { ds_Section } from "../models/ds_Section";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DeleteService {
  /**
   * Delete favorite project
   * Delete favorite user project
   * @param projectId Project ID
   * @returns ds_FavoriteProject OK
   * @throws ApiError
   */
  public static deleteFavorite(
    projectId: string
  ): CancelablePromise<Array<ds_FavoriteProject>> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/favorite/{project_id}",
      path: {
        project_id: projectId,
      },
      errors: {
        403: `Forbidden`,
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
    notificationId: string
  ): CancelablePromise<Array<ds_Notification>> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/project/section/notification/{notification_id}",
      path: {
        notification_id: notificationId,
      },
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
  public static deleteProjectSection(
    sectionId: string
  ): CancelablePromise<Array<ds_Section>> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/project/section/{section_id}",
      path: {
        section_id: sectionId,
      },
      errors: {
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Deletes project
   * Deletes a specific project
   * @param projectId Project ID
   * @returns ds_Project OK
   * @throws ApiError
   */
  public static deleteProject(
    projectId: string
  ): CancelablePromise<Array<ds_Project>> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/project/{project_id}",
      path: {
        project_id: projectId,
      },
      errors: {
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Deletes collaborator
   * Removes a collaborator from the current project
   * @param projectId Project ID
   * @returns ds_Collaboration OK
   * @throws ApiError
   */
  public static deleteProjectCollaborator(
    projectId: string
  ): CancelablePromise<Array<ds_Collaboration>> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/project/{project_id}/collaborator",
      path: {
        project_id: projectId,
      },
      errors: {
        403: `Forbidden`,
        500: `Internal Server Error`,
      },
    });
  }
}
