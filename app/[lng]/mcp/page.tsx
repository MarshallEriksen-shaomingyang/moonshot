import MCPDrawer from '@/components/mcp_drawer';
import ScrollContent from '@/components/scroll-content';

import LeftSide from './_components/left_side';
import MCPCard from './_components/mcp_card';
import MCPToolDetail from './_components/mcp_drawer';
import MCPHeader from './_components/mcp_header';
import MCPInstallButton from './_components/mcp_install';

export default function Page() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 p-4">
        <LeftSide />
      </div>
      <div className="col-span-3 flex flex-col">
        <MCPHeader />
        <div className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
          <ScrollContent>
            <MCPDrawer
              open={false}
              size="large"
              title="MCP工具名称"
              extra={<MCPInstallButton />}
            >
              <MCPToolDetail />
            </MCPDrawer>
            <div className="py-4 px-2  w-full grid md:grid-cols-3  gap-4">
              <div className="col-span-1 bg-gray-100">
                <MCPCard />
              </div>
            </div>
          </ScrollContent>
        </div>
      </div>
    </div>
  );
}
