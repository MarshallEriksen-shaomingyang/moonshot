'use client';

import { Layout } from 'antd';
import useCollapseStore from '@/store/collapse';
import LeftSidePanel from './_components/left-side';
import type { CollapseState } from '@/store/collapse';

const { Content, Sider } = Layout;

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const collapse_left = useCollapseStore(
    (state: CollapseState) => state.collapse_left
  );

  const collapse_right = useCollapseStore(
    (state: CollapseState) => state.collapse_right
  );

  return (
    <main className="flex flex-row overflow-hidden min-h-screen w-full">
      <Sider width={'7%'} className="invisible !bg-background  lg:visible">
        <LeftSidePanel />
      </Sider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapse_left}
        width={'15%'}
        className="invisible !bg-background md:visible"
      >
        sider-second
      </Sider>
      <Content className="w-full grow shrink">{children}</Content>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapse_right}
        width={'15%'}
        className="invisible !bg-background lg:visible"
      >
        sider-right
      </Sider>
    </main>
  );
}
