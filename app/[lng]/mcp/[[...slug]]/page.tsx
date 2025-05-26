import ScrollContent from '@/components/scroll-content';

import MCPCard from '../_components/mcp_card';

import LeftSide from './_components/left_side';
import MCPHeader from './_components/mcp_header';

export default function Page() {
  return (
    <div className="grid grid-cols-4">
      <div className="md:col-span-1 p-4">
        <LeftSide />
      </div>
      <div className="max-w-3xl mx-auto flex flex-col md:col-span-3 md:w-full md:max-w-full">
        <MCPHeader />
        <div className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
          <ScrollContent>
            <div className="p-4 w-full grid md:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="col-span-1">
                <MCPCard />
              </div>
            </div>
          </ScrollContent>
        </div>
      </div>
    </div>
  );
}
