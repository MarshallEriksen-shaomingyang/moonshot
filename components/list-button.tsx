import { memo } from 'react';

import { List } from 'antd';
import { useRouter } from 'next/navigation';

import IconButton from './antd-button';
import Icon from './icon';

interface DataTypes {
  title: string;
  path: string;
  'icon-dark': string;
  'icon-light': string;
}

interface IProps {
  data: DataTypes[];
  isActive: (path: string) => boolean;
  size?: 'large' | 'default' | 'small';
}

export default memo(function ListButton({
  data,
  isActive,
  size = 'default',
}: IProps) {
  const router = useRouter();
  return (
    <List
      bordered={false}
      dataSource={data}
      renderItem={item => (
        <List.Item className="!border-none !p-2">
          <IconButton
            size={size}
            type={isActive(item.path) ? 'primary' : 'text'}
            block
            icon={
              <Icon
                svgClass="h-4 w-4"
                iconClass={
                  isActive(item.path) ? item['icon-light'] : item['icon-dark']
                }
              />
            }
            onClick={() => router.push(`/${item.path}`)}
          >
            {item.title}
          </IconButton>
        </List.Item>
      )}
    />
  );
});
