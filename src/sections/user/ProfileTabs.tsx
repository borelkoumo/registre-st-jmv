import { useState, MouseEvent } from 'react';

// next
import Link from 'next/link';

// material-ui
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import ProfileTab from './ProfileTab';
import Avatar from 'components/@extended/Avatar';
import MoreIcon from 'components/@extended/MoreIcon';
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';
import useUser from 'hooks/useUser';

// assets
import { Camera } from '@wandersonalwes/iconsax-react';

interface Props {
  focusInput: () => void;
}

// ==============================|| USER PROFILE - TABS ||============================== //

export default function ProfileTabs({ focusInput }: Props) {
  const user = useUser();
  const { name, role, avatar } = user || {};
  console.log('user', user);

  const [anchorEl, setAnchorEl] = useState<Element | (() => Element) | null | undefined>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement> | undefined) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainCard>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
            <IconButton
              variant="light"
              color="secondary"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ transform: 'rotate(90deg)' }}
            >
              <MoreIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ 'aria-labelledby': 'basic-button' }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem
                component={Link}
                href="/user/edit"
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    focusInput();
                  });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disabled>
                Delete
              </MenuItem>
            </Menu>
          </Stack>
          <Stack sx={{ gap: 2.5, alignItems: 'center' }}>
            <FormLabel
              htmlFor="change-avatar"
              sx={{
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                '&:hover .MuiBox-root': { opacity: 1 },
                cursor: 'pointer'
              }}
            >
              <Avatar alt="User avatar" src={avatar} sx={{ width: 124, height: 124, border: '1px dashed' }} />
              <Box
                sx={(theme) => ({
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bgcolor: 'rgba(0,0,0,.65)',
                  ...theme.applyStyles('dark', { bgcolor: 'rgba(255, 255, 255, .75)' }),
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                })}
              >
                <Stack sx={{ gap: 0.5, alignItems: 'center', color: 'secondary.lighter' }}>
                  <Camera style={{ fontSize: '2rem' }} />
                  <Typography>Upload</Typography>
                </Stack>
              </Box>
            </FormLabel>
            <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
              <Typography variant="h5">{ name }</Typography>
              <Typography color="secondary">{ role }</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={12}>
          <ProfileTab />
        </Grid>
      </Grid>
    </MainCard>
  );
}
