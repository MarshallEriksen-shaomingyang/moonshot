import { Card, ConfigProvider } from 'antd';

import Icon from '@/components/icon';

import ModalLogo from './provider_logo';

interface IProps {
  id: string; // 供应商id
  name: string; // 供应商名称
  enabled: boolean; // 是否启用
}

export default function ModalCard({ id, name, enabled = false }: IProps) {
  const handleClick = (id: string) => {
    console.log(`Card clicked: ${id}`);
  };

  return (
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
      <Card
        variant="borderless"
        hoverable
        onClick={() => handleClick(id)}
        className="!rounded-lg"
      >
        <div className="grid grid-cols-4 content-center">
          <div className="col-span-2 justify-self-start flex items-center gap-2">
            <ModalLogo name={name} size={28} />
          </div>
          <div className="col-span-2 justify-items-stretch justify-self-end">
            {enabled ? (
              <Icon iconClass="icon-dot" svgClass="w-12 h-12" />
            ) : null}
          </div>
        </div>
      </Card>
    </ConfigProvider>
  );
}
