import { create } from 'zustand';

export interface AgentDrawerState {
  open: boolean; // agent列表抽屉列表展示状态
  handleOpenState: () => void;
  editOpen: boolean; // 编辑agent抽屉展示状态
  handleEditState: (group_id?: string) => void;
  modalOpen: boolean; // 分组创建展示状态
  handleModalOpen: () => void;
  groupId: string | null;
}

const useAgentDrawerStore = create<AgentDrawerState>(set => ({
  open: false,
  editOpen: false,
  modalOpen: false,
  groupId: null,
  handleOpenState: () => set(state => ({ open: !state.open })),
  handleEditState: (group_id?: string) =>
    set(state => ({ editOpen: !state.editOpen, groupId: group_id })),
  handleModalOpen: () => set(state => ({ modalOpen: !state.modalOpen })),
}));

export default useAgentDrawerStore;
