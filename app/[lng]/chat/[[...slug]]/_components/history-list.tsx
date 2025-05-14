import { List, Typography } from 'antd';
import Icon from '@/components/icon';
import AntdButton from '@/components/antd-button';

const data = [
  {
    time: '本周',
    content: [
      {
        id: 1,
        content: '本周的内容1',
        collect: true,
      },
      {
        id: 2,
        content: '本周的内容2',
        collect: true,
      },
      {
        id: 3,
        content: '本周的内容3',
        collect: true,
      },
      {
        id: 4,
        content: '本周的内容4',
        collect: true,
      },
      {
        id: 5,
        content: '本周的内容5',
        collect: false,
      },
      {
        id: 6,
        content: '本周的内容6',
        collect: false,
      },
      {
        id: 7,
        content: '本周的内容7',
        collect: false,
      },
      {
        id: 8,
        content: '本周的内容8',
        collect: true,
      },
    ],
  },
  {
    time: '本月',
    content: [
      {
        id: 1,
        content: '本月的内容1',
        collect: true,
      },
      {
        id: 2,
        content: '本月的内容2',
        collect: false,
      },
      {
        id: 3,
        content: '本月的内容3',
        collect: false,
      },
      {
        id: 4,
        content: '本月的内容4',
        collect: false,
      },
    ],
  },
];

const { Title } = Typography;

export default function MoonshotList() {
  return (
    <List
      className="space-y-4"
      bordered={false}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item className="flex flex-col gap-4 !items-start">
          <Title
            level={5}
            className="!text-foreground/40 !tracking-wide !font-sans !text-sm"
          >
            {item.time}
          </Title>
          <div className="w-full flex flex-col gap-2">
            {item.content.map((content, index) => (
              <div
                key={index}
                className="relative !w-full !text-left !text-nowrap !text-ellipsis !text-overflow-hidden !whitespace-nowrap flex flex-row items-center justify-start gap-2 hover:bg-foreground/20 rounded-md p-2 cursor-pointer"
              >
                <AntdButton
                  type="text"
                  shape="circle"
                  icon={
                    content.collect ? (
                      <Icon iconClass="icon-star" svgClass="w-10 h-10" />
                    ) : (
                      <Icon iconClass="icon-star1" svgClass="w-10 h-10" />
                    )
                  }
                />
                <Typography.Text>{content.content}</Typography.Text>
                <AntdButton
                  type="text"
                  shape="circle"
                  icon={
                    <Icon iconClass="icon-ellipsis-v" svgClass="w-10 h-10" />
                  }
                  className="!absolute right-2 top-[50%] translate-y-[-50%]"
                />
              </div>
            ))}
          </div>
        </List.Item>
      )}
    />
  );
}
