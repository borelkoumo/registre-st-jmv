// material-ui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import { PatternFormat } from 'react-number-format';

// project-imports
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';
import useUser from 'hooks/useUser';

// ==============================|| ACCOUNT PROFILE - BASIC ||============================== //

export default function TabPersonal() {
  const downMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const user = useUser();
  const { name, email, role } = user || {};

  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 12, md: 12, xl: 12 }}>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={12}>
            <MainCard title="Personal Details">
              <List sx={{ py: 0 }}>
                <ListItem divider={!downMD}>
                  <Grid container spacing={3} size={12}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Full Name</Typography>
                        <Typography>{ name }</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Email</Typography>
                        <Typography>{ email }</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!downMD}>
                  <Grid container spacing={3} size={12}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Phone</Typography>
                        <Typography>
                          (+237) <PatternFormat value={6000000000} displayType="text" type="text" format="### ## ## ##" />
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Role</Typography>
                        <Typography>{ role }</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Stack sx={{ gap: 0.5 }}>
                    <Typography color="secondary">Address</Typography>
                    <Typography>Fokoué, Cameroun</Typography>
                  </Stack>
                </ListItem>
              </List>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
