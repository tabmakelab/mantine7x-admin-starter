import { IconChevronDown, IconHeart, IconLogout, IconMessage, IconPlayerPause, IconSettings, IconStar, IconSwitchHorizontal, IconTrash } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton, useMantineTheme, rem } from '@mantine/core';
import cx from 'clsx';
import classes from './UserButton.module.css';
import useAppState from '@/store';

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};
export default () => {
  const { sidebarCollapse } = useAppState();
  const theme = useMantineTheme();

  return (
    <Group justify="center">
      <Menu
        width={260}
        position="bottom-end"
        transitionProps={{ transition: 'pop-top-right' }}
        // onClose={() => toggleSidebarCollapse()}
        // onOpen={() => toggleSidebarCollapse()}
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton className={cx(classes.user, { [classes.userActive]: sidebarCollapse })}>
            <Group gap={7}>
              <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
              <Text fw={500} size="sm" lh={1} mr={3}>
                {user.name}
              </Text>
              <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconHeart
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            }
          >
            Liked posts
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconStar
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            }
          >
            Saved posts
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconMessage
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            }
          >
            Your comments
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item
            leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          >
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            }
          >
            Change account
          </Menu.Item>
          <Menu.Item
            leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          >
            Logout
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            leftSection={
              <IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            }
          >
            Pause subscription
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          >
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};
