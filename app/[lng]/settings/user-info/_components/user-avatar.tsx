'use client';
import { useState } from 'react';

import { UserOutlined, CameraOutlined } from '@ant-design/icons';
import { Upload, Tooltip, message } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';

export default function UserAvatarForm() {
  // TODO 需要重构
  const [messageApi, contextHolder] = message.useMessage();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isHoveringAvatar, setIsHoveringAvatar] = useState(false);
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
    <div className="flex flex-col items-center mb-8">
      {contextHolder}
      <div
        className="relative w-32 h-32 mb-4"
        onMouseEnter={() => setIsHoveringAvatar(true)}
        onMouseLeave={() => setIsHoveringAvatar(false)}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-[3px]">
          <div className="w-full h-full rounded-full  flex items-center justify-center overflow-hidden">
            {avatarUrl ? (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${avatarUrl})` }}
              />
            ) : (
              <UserOutlined className="text-4xl " />
            )}
          </div>
        </div>

        {isHoveringAvatar && (
          <div className="absolute inset-0 flex items-center justify-center rounded-full transition-opacity duration-200">
            <Upload
              name="avatar"
              showUploadList={false}
              action="/api/upload"
              onChange={handleAvatarChange}
            >
              <Tooltip title={t('更换头像')} placement="bottom">
                <AntdButton
                  type="primary"
                  shape="circle"
                  icon={<CameraOutlined />}
                  className="flex items-center justify-center"
                />
              </Tooltip>
            </Upload>
          </div>
        )}
      </div>
    </div>
  );
}
