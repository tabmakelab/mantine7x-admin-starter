import { useMantineTheme } from '@mantine/core';
import { IconCompass } from '@tabler/icons-react';
import useAppState from '@/store';

const LOGO_SIZE = 48;
const LOGO_COLLAPSE_SIZE = 42;

export default () => {
  const { sidebarCollapse } = useAppState();
  const { colors, primaryColor } = useMantineTheme();
  return <IconCompass
    size={sidebarCollapse === true ? LOGO_COLLAPSE_SIZE : LOGO_SIZE}
    color={colors[primaryColor][9]}
  />;
};
