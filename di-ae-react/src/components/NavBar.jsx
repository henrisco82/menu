import AppBar         from '@mui/material/AppBar';
import Toolbar        from '@mui/material/Toolbar';
import Box            from '@mui/material/Box';
import Tooltip        from '@mui/material/Tooltip';
import IconButton     from '@mui/material/IconButton';
import Typography     from '@mui/material/Typography';
import Avatar         from '@mui/material/Avatar';
import Divider        from '@mui/material/Divider';
import Chip           from '@mui/material/Chip';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon       from '@mui/icons-material/HelpOutline';
import SettingsIcon          from '@mui/icons-material/Settings';

export default function NavBar({ email, initials }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#005BA1',
        borderBottom:    '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <Toolbar sx={{ minHeight: '58px !important', px: { xs: 2, sm: 4 } }}>

        {/* ── Brand ─────────────────────────────── */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75 }}>

          {/* Dell logo ring */}
          <Box
            component="a"
            href="#"
            aria-label="Dell Technologies"
            sx={{
              width:        36,
              height:       36,
              borderRadius: '50%',
              border:       '2px solid rgba(255,255,255,0.9)',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              textDecoration: 'none',
              flexShrink:   0,
            }}
          >
            <Typography
              sx={{
                fontSize:      '0.72rem',
                fontWeight:    900,
                letterSpacing: '-0.05em',
                color:         '#fff',
                lineHeight:    1,
              }}
            >
              DELL
            </Typography>
          </Box>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: 'rgba(255,255,255,0.25)', my: 1 }}
          />

          {/* DI AE Control Center — Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <Typography
              component="a"
              href="#"
              sx={{
                fontSize:      '0.95rem',
                fontWeight:    700,
                color:         '#fff',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                '&:hover':     { opacity: 0.8 },
              }}
            >
              DI AE Control Center
            </Typography>
            <Typography
              component="span"
              sx={{
                mx:       '7px',
                fontSize: '0.95rem',
                color:    'rgba(255,255,255,0.4)',
              }}
            >
              —
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{
                fontSize:      '0.88rem',
                fontWeight:    600,
                color:         'rgba(255,255,255,0.72)',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                '&:hover':     { color: '#fff' },
              }}
            >
              Menu
            </Typography>
          </Box>
        </Box>

        {/* ── Right side ────────────────────────── */}
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 0.75 }}>

          {/* Notifications */}
          <Tooltip title="Notifications">
            <IconButton
              size="small"
              aria-label="Notifications"
              sx={{
                width:       34, height: 34,
                border:      '1px solid rgba(255,255,255,0.18)',
                color:       'rgba(255,255,255,0.72)',
                position:    'relative',
                '&:hover':   {
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  borderColor:     'rgba(255,255,255,0.35)',
                  color:           '#fff',
                },
                // Red notification dot
                '&::after': {
                  content:      '""',
                  position:     'absolute',
                  top:          6, right: 6,
                  width:        7, height: 7,
                  borderRadius: '50%',
                  background:   '#F87171',
                  border:       '1.5px solid #005BA1',
                },
              }}
            >
              <NotificationsNoneIcon sx={{ fontSize: 17 }} />
            </IconButton>
          </Tooltip>

          {/* Help */}
          <Tooltip title="Help">
            <IconButton
              size="small"
              aria-label="Help"
              sx={{
                width:  34, height: 34,
                border: '1px solid rgba(255,255,255,0.18)',
                color:  'rgba(255,255,255,0.72)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  borderColor:     'rgba(255,255,255,0.35)',
                  color:           '#fff',
                },
              }}
            >
              <HelpOutlineIcon sx={{ fontSize: 17 }} />
            </IconButton>
          </Tooltip>

          {/* Settings */}
          <Tooltip title="Settings">
            <IconButton
              size="small"
              aria-label="Settings"
              sx={{
                width:  34, height: 34,
                border: '1px solid rgba(255,255,255,0.18)',
                color:  'rgba(255,255,255,0.72)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  borderColor:     'rgba(255,255,255,0.35)',
                  color:           '#fff',
                },
              }}
            >
              <SettingsIcon sx={{ fontSize: 17 }} />
            </IconButton>
          </Tooltip>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: 'rgba(255,255,255,0.18)', mx: 0.5, my: 1 }}
          />

          {/* User pill */}
          <Chip
            component="a"
            href="#"
            aria-label={`Signed in as ${email}`}
            clickable
            avatar={
              <Avatar
                sx={{
                  width:      26,
                  height:     26,
                  fontSize:   '0.62rem',
                  fontWeight: 800,
                  bgcolor:    'rgba(255,255,255,0.20)',
                  color:      '#fff',
                }}
              >
                {initials}
              </Avatar>
            }
            label={
              <Typography
                component="span"
                sx={{
                  fontSize:  '0.75rem',
                  fontWeight: 500,
                  color:     'rgba(255,255,255,0.72)',
                  display:   { xs: 'none', sm: 'inline' },
                }}
              >
                {email}
              </Typography>
            }
            sx={{
              height:          34,
              border:          '1px solid rgba(255,255,255,0.20)',
              borderRadius:    '100px',
              backgroundColor: 'transparent',
              pl:              0.25,
              textDecoration:  'none',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.10)',
                borderColor:     'rgba(255,255,255,0.35)',
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
