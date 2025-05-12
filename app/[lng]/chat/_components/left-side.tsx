import { Flex, Space, Tooltip } from 'antd';
import Image from 'next/image';

import Icon from '@/components/icon';
import AntdButton from '@/components/antd-button';
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
            <Tooltip title="聊天" placement="right">
              <AntdButton
                type="primary"
                shape="circle"
                variant="filled"
                size="large"
                icon={<Icon iconClass="icon-chat" svgClass="w-12 h-12" />}
              />
            </Tooltip>
          </Space>

          <Space direction="vertical" size={'middle'}>
            <Tooltip title="github" placement="right">
              <AntdButton
                type="primary"
                shape="circle"
                variant="filled"
                size="large"
                icon={
                  <Icon
                    iconClass="icon-github"
                    svgClass="w-12 h-12 text-white"
                  />
                }
              />
            </Tooltip>
            <Tooltip title="文档" placement="right">
              <AntdButton
                type="primary"
                shape="circle"
                variant="filled"
                size="large"
                icon={
                  <Icon iconClass="icon-Book" svgClass="w-12 h-12 text-white" />
                }
              />
            </Tooltip>
          </Space>
        </Flex>
      </div>
    </div>
  );
}
