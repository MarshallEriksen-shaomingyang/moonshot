'use client';
import { GithubOutlined } from '@ant-design/icons';
import { Typography, Badge, Card, Space, Avatar, Tag } from 'antd';
import Link from 'next/link';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';

export default function GithubContent() {
  const { t } = useT('settings');
  return (
    <div className="flex flex-col gap-3  h-full">
      <Badge.Ribbon text={t('有可用更新')} color="var(--primary-color)">
        <Card title={t('关于我们')}>
          <div className="flex gap-3 justify-between items-center">
            <Space size={16} align="start">
              <Link
                href={
                  'https://github.com/MarshallEriksen-shaomingyang/moonshot.git'
                }
                target="_blank"
              >
                <div className="!outline-2 !outline-offset-2 rounded-md !border-teal-50">
                  <Avatar
                    shape="square"
                    size={64}
                    src="https://avatars.githubusercontent.com/u/10444256?v=4"
                    className="cursor-pointer"
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-2">
                <Typography.Title level={4} className="!tracking-wide">
                  Moonshot
                </Typography.Title>
                <Tag icon={<GithubOutlined />}>v0.1.4</Tag>
              </div>
            </Space>
            <AntdButton>
              <Typography.Link
                href="https://github.com/MarshallEriksen-shaomingyang/moonshot.git"
                target="_blank"
              >
                {t('更新日志')}
              </Typography.Link>
            </AntdButton>
          </div>
        </Card>
      </Badge.Ribbon>
      <div className="flex justify-center">
        <Typography.Paragraph className="text-sm">
          {t(
            'Moonshot 是一个开源的、基于 Next.js 和 Ant Design 的现代化 Web 应用程序框架。'
          )}
        </Typography.Paragraph>
      </div>
      <div className="flex justify-center">
        <Typography.Paragraph className="text-sm">
          {t('如果喜欢我们的产品, 在 GitHub 给添加星标 并 分享您宝贵的建议 !')}
        </Typography.Paragraph>
      </div>
    </div>
  );
}
