import { Typography, Tag, Space, Avatar, Button, Tooltip } from 'antd';
import Icon from '@/components/icon';
// import AntdButton from '@/components/antd-button';

const { Title } = Typography;

export default function HeaderContent() {
  return (
    <div className="flex flex-row justify-between items-center !leading-[var(--ant-layout-header-height)]">
      <Space size={8}>
        <Avatar />
        <Title
          level={5}
          className="font-sans select-none font-bold !text-md !text-foreground tracking-wide !mb-0"
        >
          智能小管家
        </Title>
        <Tag className="cursor-pointer" color="var(--primary-color)">
          gpt4.1-mini
        </Tag>
      </Space>

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

        <Avatar />
      </div>
    </div>
  );
}
