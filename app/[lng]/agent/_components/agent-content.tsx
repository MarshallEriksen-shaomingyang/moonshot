'use client';
import dynamic from 'next/dynamic';

import AgentList from './agent-list';
import AgentMenu from './agent-menu';

const AssistantDrawer = dynamic(() => import('./agent-edit-drawer'));
const AgentGroupModal = dynamic(() => import('./agent-group-modal'));
export default function AgentContent() {
  return (
    <>
      <AssistantDrawer />
      <AgentGroupModal />
      <div className="h-full w-full overflow-hidden">
        <div className="grid grid-cols-4 gap-2 h-full">
          <div className="col-span-1">
            <AgentMenu />
          </div>
          <div className="col-span-3">
            <AgentList />
          </div>
        </div>
      </div>
    </>
  );
}
