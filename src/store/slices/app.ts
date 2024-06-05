import { StateCreator } from 'zustand';

export interface AppConfigSlice {
  token: any;
  isLoggedIn: boolean;
  frequentlyCustomers: any[];
  userInfo: any | null;
  updateToken: (tk: any) => void;
  updateStaffInfo: (info: any) => void;
  updateStateValue: (key: string, value: any) => void;
}

export const createAppConfigSlice: StateCreator<AppConfigSlice> = (set) => ({
  token: null,
  isLoggedIn: false,
  userInfo: null,
  frequentlyCustomers: [],
  updateToken: async (tk: any) => {
    set(() => ({ token: tk }));
  },
  updateStaffInfo: async (info: any) => {
    set(() => ({ userInfo: info }));
  },
  updateStateValue: async (key: string, value: any) => {
    set(() => ({ [key]: value }));
  },
});
