import { PropsWithoutRef } from 'react';
import { Group, Text, Stack } from '@mantine/core';
import Logo from '../Logo';
import useAppState from '@/store';

export type BrandProps = PropsWithoutRef<{
  name: string;
  extraName?: string;
}>;
const Brand = ({ name, extraName }: BrandProps) => {
  // const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const { sidebarCollapse } = useAppState();
  return (
    <Group>
      <Logo />
      {!sidebarCollapse && (
        <Stack gap={0}>
          <Text fw={550}>{name}</Text>
          {extraName && <Text fz={14}>{extraName}</Text>}
        </Stack>
      )}
    </Group>
  );
};

export default Brand;
