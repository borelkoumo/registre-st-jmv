// This is example of menu item without group for horizontal layout. There will be no children.

// assets
import { Dash } from '@wandersonalwes/iconsax-react';

// types
import { NavItemType } from 'types/menu';

// icons
const icons = {
  dashboard: Dash
};

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const dashboardPage: NavItemType = {
  id: 'dashboard',
  title: 'dashboard',
  type: 'group',
  url: '/dashboard',
  icon: icons.dashboard
};

export default dashboardPage;
