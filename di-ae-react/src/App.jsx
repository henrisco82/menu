import { useMemo }    from 'react';
import Box            from '@mui/material/Box';
import Typography     from '@mui/material/Typography';
import AppsIcon       from '@mui/icons-material/Apps';

import NavBar         from './components/NavBar';
import DevBanner      from './components/DevBanner';
import AppCard        from './components/AppCard';
import apps           from './apps';
import { getEmail, getInitials } from './user';

export default function App() {
  const email    = useMemo(() => getEmail(),         []);
  const initials = useMemo(() => getInitials(email), [email]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      {/* ── Sticky nav ───────────────────────── */}
      <NavBar email={email} initials={initials} />

      {/* ── Dev warning banner ───────────────── */}
      <DevBanner />

      {/* ── Blue page body ───────────────────── */}
      <Box
        component="main"
        sx={{
          flex:          1,
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          px:            3,
          pb:            10,
        }}
      >
        {/* Hero */}
        <Box
          sx={{
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            textAlign:     'center',
            pt:            { xs: 6, md: 9 },
            pb:            { xs: 5, md: 7 },
            gap:           2,
            '@keyframes heroIn': {
              from: { opacity: 0, transform: 'translateY(-16px)' },
              to:   { opacity: 1, transform: 'translateY(0)' },
            },
            animation: 'heroIn 0.7s cubic-bezier(0.4,0,0.2,1) both',
          }}
        >
          {/* Pill */}
          <Box
            sx={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          0.75,
              px:           2,
              py:           '5px',
              bgcolor:      'rgba(255,255,255,0.12)',
              border:       '1px solid rgba(255,255,255,0.28)',
              borderRadius: '100px',
              color:        '#fff',
            }}
          >
            <AppsIcon sx={{ fontSize: 14 }} />
            <Typography
              sx={{
                fontSize:      '0.72rem',
                fontWeight:    700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Select Application
            </Typography>
          </Box>

          {/* Main heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize:     { xs: '2.2rem', md: '3.4rem' },
              fontWeight:   800,
              letterSpacing:'-0.04em',
              lineHeight:   1.05,
              color:        '#fff',
            }}
          >
            DI AE Control Center
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: '1rem',
              color:    'rgba(255,255,255,0.72)',
              maxWidth: 420,
            }}
          >
            Choose a tool below to launch your workspace
          </Typography>
        </Box>

        {/* ── App card grid ────────────────────── */}
        <Box
          sx={{
            display:        'flex',
            flexWrap:       'wrap',
            justifyContent: 'center',
            gap:            '18px',
            width:          '100%',
            maxWidth:       1000,
          }}
        >
          {apps.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </Box>
      </Box>

      {/* ── Footer ───────────────────────────── */}
      <Box
        component="footer"
        sx={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          px:             { xs: 2, sm: 4.5 },
          py:             2.5,
          borderTop:      '1px solid rgba(255,255,255,0.15)',
          flexWrap:       'wrap',
          gap:            1,
        }}
      >
        <Typography sx={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.45)' }}>
          © 2026 Dell Technologies Inc. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2.5 }}>
          {['Privacy', 'Terms', 'Support', 'Accessibility'].map(link => (
            <Typography
              key={link}
              component="a"
              href="#"
              sx={{
                fontSize:       '0.73rem',
                color:          'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                '&:hover':      { color: '#fff' },
                transition:     'color 0.18s ease',
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
