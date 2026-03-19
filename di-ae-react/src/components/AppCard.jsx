import { useState } from 'react';
import Box        from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/**
 * AppCard
 * Renders a single application tile.
 *
 * Props:
 *   app  — object from apps.js
 *   index — zero-based position (used for animation delay)
 */
export default function AppCard({ app, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = app.icon;

  return (
    <Box
      component="a"
      href={app.href}
      aria-label={`${app.title} — ${app.description}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        /* sizing */
        flex:         '1 1 280px',
        maxWidth:     300,
        position:     'relative',
        /* layout */
        display:      'flex',
        flexDirection:'column',
        alignItems:   'flex-start',
        /* spacing */
        p:            '26px 22px 22px',
        /* appearance */
        bgcolor:      hovered ? '#F5F9FE' : '#FFFFFF',
        border:       `1px solid ${hovered ? `rgba(${app.accentRgb},0.30)` : '#DDE3EA'}`,
        borderRadius: '14px',
        textDecoration: 'none',
        color:        'inherit',
        overflow:     'hidden',
        cursor:       'pointer',
        /* animation */
        '@keyframes cardIn': {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        animation:    `cardIn 0.55s cubic-bezier(0.4,0,0.2,1) ${index * 0.07 + 0.15}s both`,
        /* transitions */
        transition:   'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background 0.22s ease',
        transform:    hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow:    hovered
          ? '0 12px 36px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.10)'
          : 'none',

        /* top accent stripe */
        '&::after': {
          content:      '""',
          position:     'absolute',
          top: 0, left: 0, right: 0,
          height:       '3px',
          background:   app.accent,
          borderRadius: '14px 14px 0 0',
          opacity:      hovered ? 1 : 0,
          transition:   'opacity 0.22s ease',
        },
      }}
    >
      {/* Card number */}
      <Typography
        sx={{
          position:     'absolute',
          top:          18, right: 20,
          fontSize:     '0.65rem',
          fontWeight:   700,
          letterSpacing:'0.08em',
          color:        hovered ? app.accent : '#8EA3BC',
          transition:   'color 0.22s ease',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </Typography>

      {/* Icon container */}
      <Box
        sx={{
          width:        50, height: 50,
          borderRadius: '12px',
          display:      'flex',
          alignItems:   'center',
          justifyContent: 'center',
          bgcolor:      `rgba(${app.accentRgb}, ${hovered ? 0.16 : 0.10})`,
          border:       `1px solid rgba(${app.accentRgb}, ${hovered ? 0.28 : 0.16})`,
          mb:           2.25,
          flexShrink:   0,
          transition:   'background 0.22s ease, border-color 0.22s ease',
        }}
      >
        <Icon sx={{ fontSize: 24, color: app.accent }} />
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize:     '0.97rem',
          fontWeight:   700,
          color:        '#0F1C2E',
          letterSpacing:'-0.02em',
          lineHeight:   1.25,
          mb:           0.875,
        }}
      >
        {app.title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize:  '0.81rem',
          color:     '#4A6080',
          lineHeight: 1.6,
          flex:       1,
        }}
      >
        {app.description}
      </Typography>

      {/* CTA */}
      <Box
        sx={{
          display:    'flex',
          alignItems: 'center',
          gap:        hovered ? '8px' : '5px',
          mt:         2.5,
          fontSize:   '0.78rem',
          fontWeight: 600,
          color:      app.accent,
          transition: 'gap 0.22s ease',
        }}
      >
        Launch App
        <OpenInNewIcon
          sx={{
            fontSize:  14,
            transform: hovered ? 'translate(2px,-2px)' : 'translate(0,0)',
            transition:'transform 0.22s ease',
          }}
        />
      </Box>
    </Box>
  );
}
