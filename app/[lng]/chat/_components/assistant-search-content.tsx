import { useState } from 'react';
import { Empty, Typography, List } from 'antd';
import { useT } from '@/app/i18n/client';
import Icon from '@/components/icon';
import AssistantCard from './assistant-card';

export default function AssistantSearchContent() {
  const { t } = useT('chat');

  //   TODO: replace with real search results
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchContent, setSearchContent] = useState(['1', '2', '3']);
  return searchContent && searchContent.length > 0 ? (
    <List
      itemLayout="vertical"
      dataSource={searchContent}
      renderItem={item => (
        <List.Item>
          <AssistantCard title={`搜索助手 ${item}`} />
        </List.Item>
      )}
    />
  ) : (
    <Empty
      image={<Icon iconClass="icon-cangshu" svgClass="w-10 h-10" />}
      description={
        <Typography.Text type="secondary">
          {t('search.noResults')}
        </Typography.Text>
      }
    />
  );
}
