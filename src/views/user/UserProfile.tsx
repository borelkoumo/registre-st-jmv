'use client';

import { useEffect, useRef } from 'react';

// next
import { usePathname } from 'next/navigation';

// material-ui
import Grid from '@mui/material/Grid2';

// project-imports
import { GRID_COMMON_SPACING } from 'config';

import ProfileTabs from 'sections/user/ProfileTabs';
import TabProfile from 'sections/user/TabProfile';
import TabPassword from 'sections/user/TabPassword';
import TabSettings from 'sections/user/TabSettings';
import TabEdit from 'sections/user/TabEdit';

import { handlerActiveItem, useGetMenuMaster } from 'api/menu';

type Props = {
  tab: string;
};

// ==============================|| PROFILE - USER ||============================== //

export default function UserProfile({ tab }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const { menuMaster } = useGetMenuMaster();
  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (menuMaster.openedItem !== 'user-profile') handlerActiveItem('user-profile');
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <Grid container spacing={GRID_COMMON_SPACING}>
      <Grid size={{ xs: 12, md: 3 }}>
        <ProfileTabs focusInput={focusInput} />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        {tab === 'profile' && <TabProfile />}
        {tab === 'password' && <TabPassword />}
        {tab === 'settings' && <TabSettings />}
        {tab === 'edit' && <TabEdit />}
      </Grid>
    </Grid>
  );
}
