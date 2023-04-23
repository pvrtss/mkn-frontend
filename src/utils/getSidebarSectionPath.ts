import { Section } from "../components/main/Sidebar/Sidebar.types";

export function getSidebarSectionPath(section: Section) {
  switch (section) {
    case Section.Dashboard:
      return "/dashboard";
    case Section.Projects:
      return "/projects";
    case Section.Favourites:
      return "/favourites";
    case Section.Profile:
      return "/profile";
    default:
      return "";
  }
}
