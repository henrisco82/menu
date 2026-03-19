/**
 * DevBanner
 * Change `display` prop to 'none' to hide the banner.
 *
 * Usage:
 *   <DevBanner />              — visible
 *   <DevBanner display="none" — hidden
 */
import Box           from '@mui/material/Box';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Typography    from '@mui/material/Typography';

/* ── DEV BANNER TOGGLE ────────────────────────────────────────
   Change the `display` value below to 'none' to hide the banner.
───────────────────────────────────────────────────────────── */
const BANNER_DISPLAY = 'flex'; // ← change to 'none' to hide

export default function DevBanner() {
  return (
    <Box
      role="alert"
      sx={{
        display:         BANNER_DISPLAY,
        alignItems:      'center',
        justifyContent:  'center',
        gap:             1,
        px:              2.5,
        py:              '7px',
        backgroundColor: '#FCD34D',
        borderBottom:    '1px solid #F59E0B',
      }}
    >
      <WarningAmberIcon sx={{ fontSize: 14, color: '#92400E' }} />
      <Typography
        sx={{
          fontSize:      '0.7rem',
          fontWeight:    700,
          letterSpacing: '0.09em',
          textTransform: 'uppercase',
          color:         '#78350F',
        }}
      >
        This is the development version of the Control Center
      </Typography>
    </Box>
  );
}
