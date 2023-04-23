import React from "react";

import { ProjectGridProps } from "./ProjectGrid.types";
import {
  EmptyProjectsStub,
  ProjectGridHeader,
  ProjectGridPlacer,
  ProjectGridTitle,
  ProjectGridWrap,
} from "./ProjectGrid.style";
import { ProjectCard } from "../ProjectCard";

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  title,
  projects,
}) => {
  return (
    <ProjectGridWrap>
      <ProjectGridHeader>
        <ProjectGridTitle>{title}</ProjectGridTitle>
      </ProjectGridHeader>
      {projects.length ? (
        <ProjectGridPlacer>
          {projects.map((p, key) => (
            <ProjectCard project={p} showDate showStars />
          ))}
        </ProjectGridPlacer>
      ) : (
        <EmptyProjectsStub>Нет проектов</EmptyProjectsStub>
      )}
    </ProjectGridWrap>
  );
};
