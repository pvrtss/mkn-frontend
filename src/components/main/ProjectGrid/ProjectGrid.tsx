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

export const ProjectGrid: React.FC<PropsWithChildren<ProjectGridProps>> = ({
  title,
  projects,
  children,
  showDate,
  showStars,
}) => {
  return (
    <ProjectGridWrap>
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
            />
          ))}
        </ProjectGridPlacer>
      ) : (
        <EmptyProjectsStub>Нет проектов</EmptyProjectsStub>
      )}
    </ProjectGridWrap>
  );
};
