'use client';
import { Drawer, ConfigProvider } from 'antd';

interface IProps {
  open: boolean;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  children?: React.ReactNode;
  onClose?: () => void;
  [key: string]: unknown;
}

export default function MCPDrawer({
  open,
  children,
  placement = 'right',
  onClose,
  ...restProps
}: IProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'var(--primary-color)',
        },
      }}
    >
      <Drawer
        placement={placement}
        open={open}
        {...restProps}
        onClose={onClose}
      >
        {children}
      </Drawer>
    </ConfigProvider>
  );
}
