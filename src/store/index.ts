'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { AppConfigSlice, createAppConfigSlice } from './slices/app';
 import { createSidebarSlice, SidebarConfigSlice } from './slices/sidebar';

const useAppState = create<AppConfigSlice & SidebarConfigSlice>()(
  persist(
    (...p) => ({
      ...createAppConfigSlice(...p),
      ...createSidebarSlice(...p),
    }),
    {
      name: 'mantine-admin-starter-app-state',
      partialize: (state) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => !['config'].includes(key))),
    }
  )
);

export default useAppState;
