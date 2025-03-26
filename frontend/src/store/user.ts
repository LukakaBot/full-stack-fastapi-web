import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountUserTokenParams, UserInfo } from '@/api/user/types';
import { fetchAccountUserToken } from '@/api/user';

interface UserStoreState {
  userInfo?: UserInfo | null;
}

interface UserStoreActions {
  getAccountUserToken: (data: AccountUserTokenParams) => Promise<void>;
  logout: () => void;
}

type UserStore = UserStoreState & UserStoreActions;

const useUserStore = create<UserStore>()(persist(
  (set) => ({
    userInfo: null,
    getAccountUserToken: async (params: AccountUserTokenParams) => {
      const { token } = await fetchAccountUserToken(params);
      window.$bucket?.set('token', token)
    },
    logout: () => {
      set({ userInfo: null });
    }
  }),
  {
    name: 'user'
  }
))

export default useUserStore;