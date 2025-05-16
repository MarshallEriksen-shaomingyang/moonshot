import { Avatar, Button, Tooltip } from 'antd';
import Icon from '@/components/icon';

export default function HeaderComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background flex flex-row justify-between items-center !leading-[var(--moonshot-layout-header-height)] shadow-md rounded-md px-2">
      {children}
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <Tooltip title="修改主题" placement="bottom">
          <Button
            type="text"
            icon={<Icon iconClass="icon-magic" svgClass="w-10 h-10" />}
          />
        </Tooltip>
        <Tooltip title="修改语言" placement="bottom">
          <Button
            type="text"
            icon={<Icon iconClass="icon-language" svgClass="w-10 h-10" />}
          />
        </Tooltip>
        <Tooltip title="修改方向" placement="bottom">
          <Button
            type="text"
            icon={<Icon iconClass="icon-direction" svgClass="w-10 h-10" />}
          />
        </Tooltip>
        {/* TODO: 增加遮罩层动态的光圈 */}
        <Avatar />
      </div>
    </div>
  );
}
