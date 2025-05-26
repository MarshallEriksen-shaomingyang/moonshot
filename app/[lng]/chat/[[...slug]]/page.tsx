import { Splitter } from 'antd';

import Chat from './_components/chat';
import Demo from './_components/chat_input';
import RightSidePanel from './_components/right-side';

export default function Page() {
  return (
    <Splitter className="h-full">
      <Splitter.Panel min={'50%'}>
        <Splitter layout="vertical">
          <Splitter.Panel
            defaultSize="80%"
            min={'5%'}
            max={'100%'}
            className="!bg-background"
          >
            <Chat />
          </Splitter.Panel>
          <Splitter.Panel
            collapsible
            defaultSize={'20%'}
            max={'40%'}
            min={'20%'}
            className="!bg-background"
          >
            <Demo />
          </Splitter.Panel>
        </Splitter>
      </Splitter.Panel>
      <Splitter.Panel
        collapsible
        defaultSize={'20%'}
        min={'15%'}
        max={'95%'}
        className="invisible !bg-background lg:visible"
      >
        <RightSidePanel />
      </Splitter.Panel>
    </Splitter>
  );
}
