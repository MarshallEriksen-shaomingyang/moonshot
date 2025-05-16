import { Splitter } from 'antd';

import RightSidePanel from './_components/right-side';

export default function Chat() {
  return (
    <Splitter className="h-full">
      <Splitter.Panel min={'50%'}>
        <Splitter layout="vertical">
          <Splitter.Panel defaultSize="80%" min={'5%'} max={'100%'}>
            <div>top</div>
          </Splitter.Panel>
          <Splitter.Panel
            collapsible
            defaultSize={'20%'}
            max={'40%'}
            min={'20%'}
          >
            <div>bottom</div>
          </Splitter.Panel>
        </Splitter>
      </Splitter.Panel>
      <Splitter.Panel
        collapsible
        defaultSize={'25%'}
        min={'15%'}
        max={'95%'}
        className="invisible !bg-background lg:visible"
      >
        <RightSidePanel />
      </Splitter.Panel>
    </Splitter>
  );
}
