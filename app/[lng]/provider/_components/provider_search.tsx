import { List } from 'antd';

import EmptyComponent from '@/components/empty';

import type { ProviderType } from '../types';

import ModalCard from './provider_card';

interface IProps {
  searchContent: ProviderType[];
}

export default function ModalSearch({ searchContent }: IProps) {
  return searchContent && searchContent.length > 0 ? (
    <List
      itemLayout="vertical"
      bordered={false}
      dataSource={searchContent}
      renderItem={item => (
        <List.Item className="!border-none">
          <ModalCard id={item.id} name={item.name} enabled={item.enabled} />
        </List.Item>
      )}
    />
  ) : (
    <EmptyComponent />
  );
}
