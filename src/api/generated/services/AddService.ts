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

export class AddService {
  /**
   * Add favorite project
   * Add favorite project
   * @param projectId Project ID
   * @returns ds_FavoriteProject OK
   * @throws ApiError
   */
  public static postFavorite(
    projectId: string
  ): CancelablePromise<Array<ds_FavoriteProject>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/favorite",
      query: {
        project_id: projectId,
      },
      errors: {
        403: `Forbidden`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Creates project
   * Creates project
   * @returns ds_Project OK
   * @throws ApiError
   */
  public static postProject(): CancelablePromise<Array<ds_Project>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/project",
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
   * @returns ds_Notification OK
   * @throws ApiError
   */
  public static postProjectSectionNotification(
    sectionId: string
  ): CancelablePromise<Array<ds_Notification>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/project/section/{section_id}/notification",
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
   * Adds collaborators
   * Adds a collaborator to the current project
   * @param projectId Project ID
   * @returns ds_Collaboration OK
   * @throws ApiError
   */
  public static postProjectCollaborator(
    projectId: string
  ): CancelablePromise<Array<ds_Collaboration>> {
    return __request(OpenAPI, {
      method: "POST",
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

  /**
   * Creates section
   * Creates a section in the project
   * @param projectId Project ID
   * @returns ds_Section OK
   * @throws ApiError
   */
  public static postProjectSection(
    projectId: string
  ): CancelablePromise<Array<ds_Section>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/project/{project_id}/section",
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
