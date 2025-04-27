import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  return (
    <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center', p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">
        Copyright &copy; Diocèse de Bafoussam 2025
      </Typography>
    </Stack>
  );
}
