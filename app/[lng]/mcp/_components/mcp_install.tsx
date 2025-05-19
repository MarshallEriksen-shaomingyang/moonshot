import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

export default function MCPInstallButton() {
  return (
    <div className="flex items-center">
      <AntdButton
        variant="solid"
        color="primary"
        type="text"
        icon={<Icon svgClass="w-10 h-10" iconClass="icon-install" />}
      >
        安装
      </AntdButton>
    </div>
  );
}
