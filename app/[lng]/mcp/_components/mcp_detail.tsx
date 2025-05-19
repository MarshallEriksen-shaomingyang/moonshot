import DOMPurify from 'isomorphic-dompurify';

import MarkdownViewer from '@/components/markdown';

export default function MCPToolDetail() {
  const markdown = `
    # Dynamic GFM Content

    | Feature | Status |
    |---------|--------|
    | Tables  | ✅     |
    | Tasks   | ✅     |

    - [x] Task 1
    - [ ] Task 2

    ~~Deleted~~ text.
    `;
  const sanitizedSource = DOMPurify.sanitize(markdown);
  return <MarkdownViewer source={sanitizedSource} />;
}
