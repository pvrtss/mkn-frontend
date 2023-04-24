import { ds_Project } from "../../../api/generated";

export type ProjectGridProps = {
  projects: ds_Project[];
  title: string;
  showDate?: boolean;
  showStars?: boolean;
};
