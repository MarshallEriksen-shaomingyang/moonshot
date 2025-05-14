import { ConfigProvider, Button } from 'antd';

interface IProps {
  type?: 'default' | 'link' | 'text' | 'primary' | 'dashed' | undefined;
  children?: React.ReactNode;
  shape?: 'circle' | 'default' | 'round';
  icon?: React.ReactNode;
  secondary?: boolean; // 如果想使用secondary <Button type="primary" secondary />
  [key: string]: unknown;
}

export default function AntdButton({
  type = 'default',
  children,
  shape = 'default',
  icon,
  secondary = false,
  ...restProps
}: IProps) {
  /**
   * 重写ant design 的button 添加自定义模式
   */
  const buttonTheme = () => {
    if (secondary) {
      return {
        colorPrimary: 'var(--second-color) !important',
        colorPrimaryActive: 'var(--second-color-400) !important',
        colorPrimaryBg: 'var(--second-color-300) !important',
        colorPrimaryBgHover: 'var(--second-color-200) !important',
        colorPrimaryHover: 'var(--second-color-300) !important',
      };
    }
    return {
      colorPrimary: 'var(--primary-color) !important',
      colorPrimaryActive: 'var(--primary-color-400) !important',
      colorPrimaryBg: 'var(--primary-color-300) !important',
      colorPrimaryBgHover: 'var(--primary-color-200) !important',
      colorPrimaryHover: 'var(--primary-color-300) !important',
    };
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            ...buttonTheme(),
          },
        },
      }}
    >
      <Button type={type} shape={shape} icon={icon} {...restProps}>
        {children}
      </Button>
    </ConfigProvider>
  );
}
