'use client';
import { Sender } from '@ant-design/x';
import { Space, Popover, Tooltip } from 'antd';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';
import useAgentDrawerStore from '@/store/agent-drawer-store';

const ModelAdjustment = dynamic(() => import('./model_adjustment'), {
  ssr: false,
});

// const ModelChoose = dynamic(() => import('./model_choose'), {
//   ssr: false,
// });

const ModelChooseDetail = dynamic(() => import('./model_choose_detail'), {
  ssr: false,
});

const ModelMcp = dynamic(() => import('./model_mcp'), {
  ssr: false,
});

export default function ChatTools() {
  /**
   * @description 发送框工具列表
   */
  const { lng } = useParams<{ lng: string }>();
  const handleOpenState = useAgentDrawerStore(state => state.handleOpenState);
  const { t } = useT('chat');

  return (
    <Sender.Header
      className="!bg-background !border-none !rounded-none"
      closable={false}
      title={
        <Space>
          <Popover
            content={<ModelChooseDetail />}
            trigger="click"
            placement="top"
          >
            <AntdButton
              type="text"
              icon={<Icon iconClass="icon-openai" svgClass="w-5 h-5" />}
            />
          </Popover>

          <Popover
            content={<ModelAdjustment />}
            trigger="click"
            placement="top"
          >
            <AntdButton
              type="text"
              icon={<Icon iconClass="icon-adjustment" svgClass="w-5 h-5" />}
            />
          </Popover>
          <Popover content={<ModelMcp />} trigger="click" placement="top">
            <AntdButton
              type="text"
              icon={<Icon iconClass="icon-app" svgClass="w-5 h-5" />}
            />
          </Popover>
          <Tooltip title={t('创建新的会话')} placement="topRight">
            <AntdButton
              type="text"
              icon={<Icon iconClass="icon-add1" svgClass="w-5 h-5" />}
            />
          </Tooltip>
          <Tooltip title={t('助手选择')} placement="topRight">
            <Link
              href={`/${lng}/agent`}
              className="!text-foreground"
              onClick={() => {
                handleOpenState();
              }}
            >
              <Icon iconClass="icon-robot" svgClass="w-5 h-5" />
            </Link>
          </Tooltip>
        </Space>
      }
    />
  );
}
