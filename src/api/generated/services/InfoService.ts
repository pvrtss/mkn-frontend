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

export class InfoService {
  /**
   * Gets favorite projects
   * Returns favorite projects
   * @returns ds_FavoriteProject OK
   * @throws ApiError
   */
  public static getFavorites(): CancelablePromise<Array<ds_FavoriteProject>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/favorites",
      errors: {
        403: `Forbidden`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Gets favorite projects
   * Returns favorite projects
   * @param projectId Project ID
   * @returns ds_FavoriteProject OK
   * @throws ApiError
   */
  public static getFavorites1(
    projectId: string
  ): CancelablePromise<ds_FavoriteProject> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/favorites/{project_id}",
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
   * Gets Notification
   * Returns Notification by ID
   * @param notificationId Notification ID
   * @returns ds_Notification OK
   * @throws ApiError
   */
  public static getProjectSectionNotification(
    notificationId: string
  ): CancelablePromise<ds_Notification> {
    return __request(OpenAPI, {
      method: "GET",
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
   * Gets All Notifications
   * Returns all notifications in the current section
   * @param sectionId Section ID
   * @returns ds_Notification OK
   * @throws ApiError
   */
  public static getProjectSectionNotifications(
    sectionId: string
  ): CancelablePromise<Array<ds_Notification>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/project/section/{section_id}/notifications",
      path: {
        section_id: sectionId,
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
   * @returns ds_Collaboration OK
   * @throws ApiError
   */
  public static getProjectCollaborators(
    projectId: string
  ): CancelablePromise<Array<ds_Collaboration>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/project/{project_id}/collaborators",
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
   * Returns all sections
   * Returns all sections of the current project
   * @param projectId Project ID
   * @returns ds_Section OK
   * @throws ApiError
   */
  public static getProjectSections(
    projectId: string
  ): CancelablePromise<Array<ds_Section>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/project/{project_id}/sections",
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
   * Gets all projects
   * Returns all projects
   * @returns ds_Project OK
   * @throws ApiError
   */
  public static getProjects(): CancelablePromise<Array<ds_Project>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/projects",
      errors: {
        403: `Forbidden`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Returns last 3 projects
   * Returns the last three projects by last edit time
   * @returns ds_Project OK
   * @throws ApiError
   */
  public static getProjectsLatest(): CancelablePromise<Array<ds_Project>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/projects/latest",
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
      method: "GET",
      url: "/projects/owned",
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
  public static getUndeliveredNotifications(): CancelablePromise<
    Array<ds_Notification>
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/undelivered_notifications",
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
      method: "GET",
      url: "/upcoming",
      errors: {
        403: `Forbidden`,
        500: `Internal Server Error`,
      },
    });
  }
}
