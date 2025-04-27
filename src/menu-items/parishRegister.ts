// assets
import { ArchiveBook, TableDocument } from '@wandersonalwes/iconsax-react';

// types
import { NavItemType } from 'types/menu';

// icons
const icons = {
  book: ArchiveBook,
  table: TableDocument
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages: NavItemType = {
  id: 'group-pages',
  title: 'parish-register',
  type: 'group',
  icon: icons.book,
  children: [
    {
      id: 'parish-register',
      title: 'parish-register',
      type: 'collapse',
      icon: icons.book,
      children: [
        {
          id: 'parish-register-browse',
          title: 'parish-register-browse',
          type: 'item',
          url: '/parish-register/browse'
        }
      ]
    }
  ]
};

export default pages;
