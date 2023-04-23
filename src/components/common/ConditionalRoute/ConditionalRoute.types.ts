import { ReactNode } from "react";

export type ConditionalRouteProps = {
  /**
   * Route is created if its condition is true.
   * For example, `condition={isLoggedIn}` or `condition={isAdmin}`
   */
  condition: boolean;

  /** The route to redirect to if `condition` is false */
  redirectTo: string;

  children?: ReactNode;
};
