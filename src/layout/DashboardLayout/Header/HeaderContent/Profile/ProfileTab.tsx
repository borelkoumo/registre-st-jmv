import { useState, useEffect, MouseEvent } from 'react';

// next
import { useRouter, usePathname } from 'next/navigation';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import { Edit2, Logout } from '@wandersonalwes/iconsax-react';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

interface Props {
  handleLogout: () => void;
}

export default function ProfileTab({ handleLogout }: Props) {
  const pathname = usePathname();

  const [selectedIndex, setSelectedIndex] = useState<number>();
  const router = useRouter();

  const handleListItemClick = (event: MouseEvent<HTMLDivElement>, index: number, route: string = '') => {
    setSelectedIndex(index);

    if (route && route !== '') {
      router.push(route);
    }
  };

  useEffect(() => {
    const pathToIndex: { [key: string]: number } = {
      '/user/profile': 0
    };

    setSelectedIndex(pathToIndex[pathname] ?? undefined);
  }, [pathname]);

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 0, '/user/profile')}
      >
        <ListItemIcon>
          <Edit2 variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>

      <ListItemButton selected={selectedIndex === 1} onClick={handleLogout}>
        <ListItemIcon>
          <Logout variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
