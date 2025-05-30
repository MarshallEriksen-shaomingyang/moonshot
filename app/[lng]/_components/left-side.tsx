'use client';
import { Flex, Space, Tooltip } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';
import Logo from '@/public/images/logo.webp';

export default function LeftSidePanel() {
  const { t } = useT('common');
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <div className="h-screen py-1 border-r-1 border-divider/15 rounded-md ">
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
              <Tooltip title={t('chat')} placement="right">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="large"
                  icon={<Icon iconClass="icon-chat" svgClass="w-10 h-10" />}
                  onClick={() => handleNavigate('/chat')}
                />
              </Tooltip>
              <Tooltip title={t('modal provider')} placement="right">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="large"
                  icon={
                    <Icon iconClass="icon-moxingguanli" svgClass="w-10 h-10" />
                  }
                  onClick={() => handleNavigate('/provider')}
                />
              </Tooltip>
              <Tooltip title={t('MCP Tools')} placement="right">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="large"
                  icon={<Icon iconClass="icon-battery" svgClass="w-10 h-10" />}
                  onClick={() => handleNavigate('/mcp')}
                />
              </Tooltip>
              <Tooltip title={t('settings')} placement="right">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="large"
                  icon={<Icon iconClass="icon-settings" svgClass="w-10 h-10" />}
                  onClick={() => handleNavigate('/settings/user-info')}
                />
              </Tooltip>
            </Space>
          </div>
          <Space direction="vertical" size={'middle'}>
            <Link
              href={
                'https://github.com/MarshallEriksen-shaomingyang/moonshot.git'
              }
              target="_blank"
            >
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
            </Link>
            {/* <Tooltip title={t('document')} placement="right">
              <AntdButton
                disabled
                type="primary"
                shape="circle"
                variant="filled"
                size="large"
                icon={
                  <Icon iconClass="icon-Book" svgClass="w-10 h-10 text-white" />
                }
              />
            </Tooltip> */}
          </Space>
        </Flex>
      </div>
    </div>
  );
}
