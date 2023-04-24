import React, { PropsWithChildren } from "react";

import { ProjectGridProps } from "./ProjectGrid.types";
import {
  EmptyProjectsStub,
  ProjectGridHeader,
  ProjectGridPlacer,
  ProjectGridTitle,
  ProjectGridWrap,
} from "./ProjectGrid.style";
import { ProjectCard } from "../ProjectCard";
import { SomeFavouriteProjects } from "../../../mocks";

export const ProjectGrid: React.FC<PropsWithChildren<ProjectGridProps>> = ({
  title,
  projects,
  children,
  showDate,
  showStars,
  paddingTop,
}) => {
  // TODO: remove mock
  const checkFavourite = (pid: string) =>
    SomeFavouriteProjects.some((p) => p.id === pid);

  return (
    <ProjectGridWrap paddingTop={paddingTop}>
      <ProjectGridHeader>
        <ProjectGridTitle>{title}</ProjectGridTitle>

        {children}
      </ProjectGridHeader>
      {projects.length ? (
        <ProjectGridPlacer>
          {projects.map((p, key) => (
            <ProjectCard
              key={key}
              project={p}
              showDate={showDate}
              showStars={showStars}
              isFavourite={checkFavourite(p.id ? p.id : "")}
            />
          ))}
        </ProjectGridPlacer>
      ) : (
        <EmptyProjectsStub>Нет проектов</EmptyProjectsStub>
      )}
    </ProjectGridWrap>
  );
};
