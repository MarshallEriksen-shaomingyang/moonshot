import MCPDrawer from '@/components/mcp_drawer';
import ScrollContent from '@/components/scroll-content';

import MCPCard from './_components/mcp_card';
import MCPToolDetail from './_components/mcp_drawer';
import MCPInstallButton from './_components/mcp_install';

export default function Page() {
  return (
    <ScrollContent>
      <MCPDrawer
        open={false}
        size="large"
        title="MCP工具名称"
        extra={<MCPInstallButton />}
      >
        <MCPToolDetail />
      </MCPDrawer>
      <div className="py-4 px-2  w-full grid grid-cols-4 gap-4">
        <div className="col-span-1 bg-gray-100">
          <MCPCard />
        </div>
        <div className="col-span-1 bg-gray-100">
          <MCPCard />
        </div>
      </div>
    </ScrollContent>
  );
}
