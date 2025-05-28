import { Splitter } from 'antd';

import MiddleContent from './_components/middle-content';
import RightSidePanel from './_components/right-side';

export default function Page() {
  return (
    <Splitter>
      <Splitter.Panel min={'50%'}>
        <MiddleContent />
      </Splitter.Panel>
      <Splitter.Panel
        collapsible
        defaultSize={'35%'}
        min={'15%'}
        max={'95%'}
        className="invisible !bg-background lg:visible"
      >
        <RightSidePanel />
      </Splitter.Panel>
    </Splitter>
  );
}
