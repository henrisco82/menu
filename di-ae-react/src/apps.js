/**
 * apps.js
 * Central list of menu items.
 * To add a new app: append an object to this array.
 * No component changes needed — the grid renders it automatically.
 */

import ApiIcon           from '@mui/icons-material/SettingsInputComponent';
import AudienceIcon      from '@mui/icons-material/Forum';
import SalesIcon         from '@mui/icons-material/TrendingUp';
import PipelinesIcon     from '@mui/icons-material/AccountTree';
import ConfigurationIcon from '@mui/icons-material/Tune';

const apps = [
  {
    id:          'api-engine',
    title:       'DI AE API Engine',
    description: 'API configuration and management for the entire DI AE ecosystem.',
    icon:        ApiIcon,
    accent:      '#34C759',
    accentRgb:   '52,199,89',
    href:        '#api-engine',
  },
  {
    id:          'audience-targeting',
    title:       'Conversational Audience Targeting',
    description: 'AI-powered audience targeting system with real-time conversational signals.',
    icon:        AudienceIcon,
    accent:      '#FF8C00',
    accentRgb:   '255,140,0',
    href:        '#audience-targeting',
  },
  {
    id:          'sales-plays',
    title:       'Sales Plays',
    description: 'Analyze and manage sales strategies to accelerate pipeline and close rates.',
    icon:        SalesIcon,
    accent:      '#0076CE',
    accentRgb:   '0,118,206',
    href:        '#sales-plays',
  },
  {
    id:          'pipelines',
    title:       'Pipelines',
    description: 'Manage and monitor data processing workflows across the DI platform.',
    icon:        PipelinesIcon,
    accent:      '#0EA5E9',
    accentRgb:   '14,165,233',
    href:        '#pipelines',
  },
  {
    id:          'configuration',
    title:       'Configuration',
    description: 'Manage system settings, environment parameters, and integration options.',
    icon:        ConfigurationIcon,
    accent:      '#8B5CF6',
    accentRgb:   '139,92,246',
    href:        '#configuration',
  },
];

export default apps;
