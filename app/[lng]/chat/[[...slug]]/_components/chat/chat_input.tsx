'use client';
import { useState, useEffect } from 'react';

import { Sender } from '@ant-design/x';
import { App, Flex, Divider, Typography } from 'antd';
import dynamic from 'next/dynamic';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';
import ScrollContent from '@/components/scroll-content';

const ChatTools = dynamic(() => import('./chat_tools'), { ssr: false });
const ChatUpload = dynamic(() => import('./chat_upload'), { ssr: false });

const SendText: React.FC = () => {
  const [upload, setUpload] = useState(false); // 控制send header 展示状态 true 显示上传文件 false 显示默认工具条
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string>('');

  const { message } = App.useApp();

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        setValue('');
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading, message]);

  return (
    <ScrollContent>
      <Sender
        submitType="enter"
        className="!border-none !min-h-full"
        placeholder="Press Enter to send message"
        header={upload ? <ChatUpload /> : <ChatTools />}
        autoSize={{ minRows: 3 }}
        value={value}
        loading={loading}
        onChange={setValue}
        actions={false}
        onSubmit={() => {
          setLoading(true);
        }}
        onCancel={() => {
          setLoading(false);
        }}
        allowSpeech
        footer={({ components }) => {
          const { ClearButton, LoadingButton, SpeechButton } = components;
          return (
            <Flex justify="space-between" align="center">
              <Flex align="center">
                <AntdButton
                  type="text"
                  icon={<Icon iconClass="icon-shangchuan" svgClass="w-5 h-5" />}
                  onClick={() => setUpload(!upload)}
                />
              </Flex>
              <Flex align="center">
                <Typography.Text type="secondary">
                  <small>`Shift + Enter` 换行</small>
                </Typography.Text>
                <ClearButton />
                <Divider type="vertical" />
                <SpeechButton />
                <Divider type="vertical" />
                {loading ? (
                  <LoadingButton type="default" />
                ) : (
                  <AntdButton
                    type="primary"
                    icon={<Icon iconClass="icon-fasong" svgClass="w-5 h-5" />}
                    onClick={() => setLoading(true)}
                  />
                )}
              </Flex>
            </Flex>
          );
        }}
      />
    </ScrollContent>
  );
};
export default SendText;
