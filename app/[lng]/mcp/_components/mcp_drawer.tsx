import ScrollContent from '@/components/scroll-content';

import MCPToolDetail from './mcp_detail';

export default function MCPToolDetailView() {
  return (
    <ScrollContent>
      <div className="markdown-body">
        <MCPToolDetail />
      </div>
    </ScrollContent>
  );
}
