import { create } from 'zustand';

export interface MCPEditState {
  open: boolean; // 控制drawer展开
  state: 'describe' | 'edit'; // 控制当前MCP状态 describe: 描述模式 edit: 编辑模式
  tool_id: number; // 当前MCP的id
  toggleOpen: (tool_id: number) => void; // 控制drawer展开
  toggleClose: () => void; // 控制drawer关闭
}

const useMCPEditStore = create<MCPEditState>()(set => ({
  open: false,
  state: 'describe',
  tool_id: 0,
  toggleOpen: (tool_id: number) =>
    set(state => ({ ...state, open: true, tool_id })),
  toggleClose: () => set(state => ({ ...state, open: false, tool_id: 0 })),
}));

export default useMCPEditStore;
