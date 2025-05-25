'use client';
import { Card, ConfigProvider, Typography, Avatar, Switch } from 'antd';

import { useT } from '@/app/i18n/client';
import IconButton from '@/components/antd-button';
import Icon from '@/components/icon';

const { Paragraph, Title } = Typography;
export default function MCPCard() {
  const { t } = useT('mcp');
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {},
        },
      }}
    >
      <Card variant="borderless" className="!shadow-md !cursor-pointer">
        <div className="flex flex-col gap-3">
          <div className="h-16 flex justify-start items-center gap-3">
            <Avatar
              size={52}
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              className="transition-transform duration-300 hover:rotate-180"
            />
            <div className="h-16 flex-1 flex flex-col gap-3">
              <Title level={5} className="!mb-0 w-38" ellipsis>
                CNB MCP SERVER
              </Title>
              <div className="flex gap-2">
                <Switch
                  checkedChildren={t('启用')}
                  unCheckedChildren={t('禁用')}
                  loading
                  size="small"
                  defaultChecked
                />
              </div>
            </div>
          </div>
          <div>
            <Paragraph ellipsis={{ rows: 3 }}>
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team. Ant Design, a design language for background applications,
              is refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.
            </Paragraph>
          </div>
          <div className="flex gap-3">
            <IconButton
              size="small"
              variant="outlined"
              icon={<Icon iconClass="icon-buoumao" svgClass="w-4 h-4" />}
            >
              {t('安装')}
            </IconButton>
            <IconButton
              size="small"
              variant="outlined"
              icon={<Icon iconClass="icon-edit" svgClass="w-4 h-4" />}
            >
              {t('编辑')}
            </IconButton>
            <IconButton
              danger
              size="small"
              variant="outlined"
              icon={<Icon iconClass="icon-delete1" svgClass="w-4 h-4" />}
            >
              {t('删除')}
            </IconButton>
          </div>
        </div>
      </Card>
    </ConfigProvider>
  );
}
