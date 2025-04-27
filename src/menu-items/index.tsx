// project-imports
import dashboard from './dashboard';
import parishRegister from './parishRegister';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, parishRegister]
};

export default menuItems;
