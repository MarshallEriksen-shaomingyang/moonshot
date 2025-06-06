'use client';
import {
  CoffeeOutlined,
  ProductOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Conversations } from '@ant-design/x';
import type { ConversationsProps } from '@ant-design/x';
import { type GetProp } from 'antd';

import { useT } from '@/app/i18n/client';
import ScrollContent from '@/components/scroll-content';
import useAgentDrawerStore from '@/store/agent-drawer-store';

type MenuItem = GetProp<ConversationsProps, 'items'>[number];

export default function AgentMenu() {
  /**
   * @description 导航栏agent列表
   */
  const { t } = useT('chat');
  const handleEditState = useAgentDrawerStore(state => state.handleEditState);
  const items: MenuItem[] = [
    {
      key: '1',
      icon: <ProductOutlined />,
      label: '全部',
    },
    {
      key: '2',
      icon: <CoffeeOutlined />,
      label: '默认分组',
    },
  ];

  const menuConfig: ConversationsProps['menu'] = conversation => ({
    items: [
      {
        label: t('编辑'),
        key: 'edit',
        icon: <EditOutlined />,
      },
      {
        label: t('删除'),
        key: 'delete',
        icon: <DeleteOutlined />,
        danger: true,
      },
    ],
    onClick: menuInfo => {
      menuInfo.domEvent.stopPropagation();
      console.info(`Click ${conversation.key} - ${menuInfo.key}`);
      if (menuInfo.key === 'edit') {
        handleEditState(conversation.key);
      } else if (menuInfo.key === 'delete') {
        console.log('delete');
      }
    },
  });
  return (
    <ScrollContent>
      <Conversations defaultActiveKey="item1" menu={menuConfig} items={items} />
    </ScrollContent>
  );
}
