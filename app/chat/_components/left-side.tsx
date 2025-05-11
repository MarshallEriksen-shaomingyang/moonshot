import { Flex, Space } from 'antd';
import Image from 'next/image';

import Icon from '@/components/icon';
import Logo from '@/public/images/logo.webp';

export default function LeftSidePanel() {
  return (
    <div className="h-screen py-1 border-r-1 border-divider/15 rounded-md">
      <div className="h-full mb-2">
        <Image src={Logo} alt="logo" className="select-none cursor-pointer" />
        <Flex
          className="h-80"
          gap="middle"
          vertical
          align="center"
          justify="space-between"
        >
          <Space direction="vertical" size="middle">
            <div>hello world</div>

            <Icon iconClass="icon-chat" svgClass="w-12 h-12" />
          </Space>

          <div>github</div>
        </Flex>
      </div>
    </div>
  );
}
