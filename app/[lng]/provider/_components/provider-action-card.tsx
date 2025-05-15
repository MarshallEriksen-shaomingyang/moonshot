import { memo } from 'react';
import { Card, ConfigProvider, Typography, Switch } from 'antd';
import EmptyComponent from '@/components/empty';
import ModalLogo from './modal_logo';
import type { ProviderType } from '../types';

interface IProps {
  modalList?: ProviderType[];
}

const ModalActionCard = ({ modalList }: IProps = { modalList: [] }) => {
  return modalList && modalList.length > 0 ? (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            colorBgContainer: 'var(--background)',
            colorTextBase: 'var(--foreground)',
            bodyPadding: 'calc(var(--spacing) * 3.5)' as unknown as number,
          },
        },
      }}
    >
      <div className="p-2 overflow-hidden overflow-y-auto scroll-smooth scroll-hover-hide  grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-2">
        {modalList.map(item => (
          <Card
            key={item.id}
            className="h-36 max-h-36"
            hoverable
            variant="borderless"
          >
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[auto_1fr_auto] justify-between items-center">
                <ModalLogo name="gemini" />
                <div className="justify-self-end">
                  <Switch />
                </div>
              </div>
              <Typography.Paragraph
                className="!text-foreground/60"
                ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
              >
                描述生成很长的文字描述 描述生成很长的文字描述
                描述生成很长的文字描述 描述生成很长的文字描述
              </Typography.Paragraph>
            </div>
          </Card>
        ))}
      </div>
    </ConfigProvider>
  ) : (
    <EmptyComponent />
  );
};
export default memo(ModalActionCard);
