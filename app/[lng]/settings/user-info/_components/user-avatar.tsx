'use client';
import { useState } from 'react';

import { UserOutlined, CameraOutlined } from '@ant-design/icons';
import { Upload, Tooltip, message, Avatar } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';

export default function UserAvatarForm() {
  // TODO 需要重构 参考https://mui.com/store/previews/minimal-dashboard/
  const [messageApi, contextHolder] = message.useMessage();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const { t } = useT('settings');

  const handleAvatarChange = (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      if (info.file.originFileObj) {
        const url = URL.createObjectURL(info.file.originFileObj);
        setAvatarUrl(url);
        messageApi.success(t('头像上传成功'));
      } else {
        messageApi.error(t('头像上传失败：文件不存在'));
      }
    } else if (info.file.status === 'error') {
      messageApi.error(t('头像上传失败'));
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {contextHolder}
      <div className="w-32 h-32 mt-3 relative">
        <Avatar size={94} src={avatarUrl} icon={<UserOutlined />}></Avatar>
        <div className="absolute inset-0 top-[50%] left-[50%]">
          <Upload
            name="avatar"
            showUploadList={false}
            action="/api/upload"
            onChange={handleAvatarChange}
          >
            <Tooltip title={t('更换头像')}>
              <AntdButton
                variant="outlined"
                shape="circle"
                icon={<CameraOutlined />}
              />
            </Tooltip>
          </Upload>
        </div>
      </div>
    </div>
  );
}
