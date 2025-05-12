import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ThemeState {
  theme: 'light' | 'dark' | 'system';
  handleTheme: (theme: ThemeState['theme']) => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      theme: 'system',
      handleTheme: theme => set(() => ({ theme })),
    }),
    {
      name: 'themeStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;
