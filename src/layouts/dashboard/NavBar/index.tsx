import { ScrollArea } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { LinksGroup } from './LinkGroup';

import classes from './index.module.css';
import useAppState from '@/store';

const mockdata = [
  {
    label: 'Dashboard',
    icon: IconGauge,
    initiallyOpened: true,
    links: [
      { label: 'Stats', link: '/dashboard/stats' },
      { label: 'Workbench', link: '/' },
    ],
  },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

export default () => {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
  const { sidebarWidth } = useAppState();
  return (
    <nav className={classes.navbar} style={{ width: sidebarWidth }}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
};
