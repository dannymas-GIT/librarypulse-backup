export interface SubMenuItem {
  label: string;
  path: string;
  icon?: string;
}

export interface MenuItem {
  label: string;
  items: SubMenuItem[];
}

export interface NavigationConfig {
  [key: string]: MenuItem;
} 