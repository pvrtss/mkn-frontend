import { ds_Project } from "../../../api/generated";

export type ProjectCardProps = {
  project: ds_Project;
  showDate?: boolean;
  showStars?: boolean;
  isFavourite?: boolean;
};

export type ColoredHatProps = {
  color: string;
};

export type ProjectCardWrapProps = {
  color: string;
};
