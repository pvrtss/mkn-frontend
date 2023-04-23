import React from "react";

import { ConditionalRouteProps } from "./ConditionalRoute.types";
import { Navigate } from "react-router-dom";

export const ConditionalRoute: React.FC<ConditionalRouteProps> = ({
  condition,
  redirectTo,
  children,
}) => {
  return condition ? <>{children}</> : <Navigate to={redirectTo} replace />;
};
