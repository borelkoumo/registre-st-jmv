// material-ui
import { Theme } from '@mui/material/styles';

// ==============================|| OVERRIDES - ICON BUTTON ||============================== //

export default function IconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.MuiIconButton-loading': {
            pointerEvents: 'none !important',
            '& svg': {
              width: 'inherit !important',
              height: 'inherit !important'
            }
          }
        },
        sizeLarge: {
          width: theme.spacing(5.5),
          height: theme.spacing(5.5),
          fontSize: '1.25rem',
          '& svg': {
            width: 24,
            height: 24
          }
        },
        sizeMedium: {
          width: theme.spacing(4.5),
          height: theme.spacing(4.5),
          fontSize: '1rem',
          '& svg': {
            width: 20,
            height: 20
          }
        },
        sizeSmall: {
          width: theme.spacing(3.75),
          height: theme.spacing(3.75),
          fontSize: '0.75rem',
          '& svg': {
            width: 16,
            height: 16
          }
        }
      }
    }
  };
}
