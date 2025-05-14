import { Flex, Space, Tooltip } from 'antd';
import Image from 'next/image';

import Icon from '@/components/icon';
import AntdButton from '@/components/antd-button';
import Logo from '@/public/images/logo.webp';

export default function LeftSidePanel() {
  return (
    <div className="h-screen py-1 border-r-1 border-divider/15 rounded-md hover:bg-background-hover ">
      <div className="h-full mb-2">
        <Flex
          className="h-full"
          gap="middle"
          vertical
          align="center"
          justify="space-between"
        >
          <div>
            <Image
              src={Logo}
              alt="logo"
              className="select-none cursor-pointer mb-1"
            />
            <Space
              className="w-full mt-1"
              align="center"
              direction="vertical"
              size="middle"
            >
              <Tooltip title="聊天" placement="right">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="large"
                  icon={<Icon iconClass="icon-chat" svgClass="w-10 h-10" />}
                />
              </Tooltip>
              <Tooltip title="模型" placement="right">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="large"
                  icon={
                    <Icon iconClass="icon-moxingguanli" svgClass="w-10 h-10" />
                  }
                />
              </Tooltip>
              <Tooltip title="MCP 工具" placement="right">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="large"
                  icon={<Icon iconClass="icon-battery" svgClass="w-10 h-10" />}
                />
              </Tooltip>
              <Tooltip title="设置" placement="right">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="large"
                  icon={<Icon iconClass="icon-settings" svgClass="w-10 h-10" />}
                />
              </Tooltip>
            </Space>
          </div>
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
                    svgClass="w-10 h-10 text-white"
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
                  <Icon iconClass="icon-Book" svgClass="w-10 h-10 text-white" />
                }
              />
            </Tooltip>
          </Space>
        </Flex>
      </div>
    </div>
  );
}
