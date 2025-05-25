'use client';

import { useT } from '@/app/i18n/client';
import MCPDrawer from '@/components/mcp_drawer';
import ScrollContent from '@/components/scroll-content';
import useMCPEditStore from '@/store/mcp-edit-store';

import MCPToolDetail from './mcp_describe';
import MCPForm from './mcp_form';

export default function MCPDrawerContent() {
  const { open, state, toggleClose } = useMCPEditStore();
  const { t } = useT('mcp');
  return (
    <MCPDrawer
      open={open}
      size="large"
      title={t('MCP工具名称')}
      onClose={toggleClose}
    >
      <ScrollContent>
        {state == 'describe' ? (
          <MCPToolDetail />
        ) : (
          <div>
            <MCPForm />
          </div>
        )}
      </ScrollContent>
    </MCPDrawer>
  );
}
