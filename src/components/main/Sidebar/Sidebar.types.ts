export enum Section {
  Dashboard = 1,
  Projects,
  Favourites,
  Profile,
  None,
}

export type SidebarProps = {
  selectedSection: Section;
};

export interface SidebarButtonProps {
  readonly isActive: boolean;
}
