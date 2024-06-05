import {
  AppShell,
  Group,
  useComputedColorScheme,
} from '@mantine/core';
import { PropsWithChildren } from 'react';
import useAppState from '@/store';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import UserButton from './UserButton';
import MenuBtn from './MenuBtn';
import Brand from '@/components/Brand';
import NavBar from './NavBar';

export default ({ children }: PropsWithChildren<{}>) => {
  const { sidebarWidth, sidebarCollapse } = useAppState();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: sidebarWidth, breakpoint: 'sm', collapsed: { mobile: !sidebarCollapse } }}
      padding="md"
    >
      <AppShell.Header style={{ marginLeft: sidebarWidth }}>
        <Group h="100%" justify="space-between" pr="md">
          <Group h="100%" px="md" justify="space-between">
            {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
            <MenuBtn />
          </Group>
          <Group>
          <ColorSchemeToggle />
          <UserButton />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" style={{ top: 0, height: '100vh' }}>
        <Brand name="Mantine Admin Starter" extraName="My cool admin panel" />
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          backgroundColor:
            computedColorScheme === 'dark' ? '#111' : '#efefef',
        }}
      >
        {children}
      </AppShell.Main>
      <AppShell.Footer>
        ads
      </AppShell.Footer>
    </AppShell>
  );
};
