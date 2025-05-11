import { create } from 'zustand';

export interface CollapseState {
  collapse_left: boolean;
  collapse_right: boolean;
  handleCollapseLeft: () => void;
  handleCollapseRight: () => void;
}

const useCollapseStore = create<CollapseState>()(set => ({
  collapse_left: false,
  collapse_right: false,
  handleCollapseLeft: () =>
    set(state => ({ collapse_left: !state.collapse_left })),
  handleCollapseRight: () =>
    set(state => ({ collapse_right: !state.collapse_right })),
}));

export default useCollapseStore;
