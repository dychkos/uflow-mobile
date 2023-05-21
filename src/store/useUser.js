import { create } from 'zustand';
import { UserApi } from '../app/api/UserApi';

export const useUser = create((set) => ({
  isAuth: false,

  loading: false,
  error: null,

  // doneTasks: 0,
  // globalCoins: 45,
  // earnedCoins: 0,

  user: null,

  // incrementDone: (earnedCoins) => {
  //   set((state) => ({ doneTasks: state.doneTasks + 1 }));
  //   set((state) => ({
  //     earnedCoins: state.earnedCoins + earnedCoins,
  //     globalCoins: state.globalCoins + earnedCoins
  //   }));
  // },

  // decrementDone: (earnedCoins) => {
  //   set((state) => ({ doneTasks: state.doneTasks - 1 }));
  //   set((state) => ({
  //     earnedCoins: state.earnedCoins - earnedCoins,
  //     globalCoins: state.globalCoins - earnedCoins
  //   }));
  // },

  updateUser: async (userDto) => {
    set({ loading: true });
    try {
      await UserApi.update(userDto);
      set({ user: userDto });
    } catch (e) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  // setEarnedCoins: (coins, increment = true) => {
  //   return set((state) => ({
  //     earnedCoins: increment ? state.earnedCoins + coins : state.earnedCoins - coins,
  //     globalCoins: increment ? state.globalCoins + coins : state.globalCoins - coins
  //   }));
  // },

  setAuth: (isAuth) => {
    set({ isAuth });
  },

  fetchUser: async () => {
    set({ loading: true });

    try {
      const user = await UserApi.getMe();
      set({ user });
      return user;
    } catch (e) {
      set({ error: e.message });
      return null;
    } finally {
      set({ loading: false });
    }
  },

  setUser: (user) =>
    set({
      user
    })
}));
