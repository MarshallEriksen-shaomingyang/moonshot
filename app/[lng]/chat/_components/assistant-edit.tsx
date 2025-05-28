'use client';
import { useRef, useState } from 'react';

import { CameraOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Drawer,
  Flex,
  Avatar,
  Input,
  Form,
  Select,
  Divider,
  Space,
} from 'antd';
import type { InputRef } from 'antd';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';
import ScrollContent from '@/components/scroll-content';

const { TextArea } = Input;
let index = 0;

export default function AssistantEdit() {
  /**
   * @description 编辑助手组件
   * @returns {JSX.Element}
   */
  const { t } = useT('chat');
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);
  const onhandleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  return (
    <Drawer open={false} title={t('编辑助手')} size={'large'}>
      <ScrollContent>
        <div className="w-full h-full ">
          <Flex vertical gap="middle" align="center">
            <div className="p-6">
              <div className="relative">
                <Avatar
                  size={120}
                  className="!bg-background  outline outline-offset-6 outline-dashed outline-secondary-300 cursor-pointer"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <AntdButton
                    shape="circle"
                    icon={<CameraOutlined />}
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
            <Flex vertical gap="small" className="w-2xl">
              <Form
                layout="vertical"
                className="bg-background"
                hideRequiredMark
              >
                <Form.Item
                  label={t('助手名称')}
                  name="name"
                  rules={[{ required: true, message: t('请输入助手名称') }]}
                >
                  <Input placeholder={t('请输入助手名称')} />
                </Form.Item>
                <Form.Item label={t('选择分组')} name="group_name">
                  <Select
                    placeholder={t('请选择分组')}
                    options={[
                      { label: t('默认分组'), value: 'default' },
                      { label: t('分组1'), value: 'group1' },
                      { label: t('分组2'), value: 'group2' },
                    ]}
                    allowClear
                    className="w-full"
                  />
                </Form.Item>
                <Form.Item label={t('助手描述')} name="description">
                  <Input placeholder={t('请输入助手描述')} />
                </Form.Item>
                <Form.Item
                  label={t('角色设定')}
                  name="role"
                  rules={[{ required: true, message: t('请输入角色设定') }]}
                >
                  <TextArea
                    placeholder={t('角色设定')}
                    autoSize={{ minRows: 2 }}
                  />
                </Form.Item>
                <Form.Item label={t('助手类型')} name="type">
                  <Select
                    mode="multiple"
                    maxCount={3}
                    placeholder={t('请选择助手类型')}
                    popupRender={menu => (
                      <>
                        {menu}
                        <Divider style={{ margin: '8px 0' }} />
                        <Space style={{ padding: '0 8px 4px' }}>
                          <Input
                            placeholder={t('添加标签')}
                            ref={inputRef}
                            onChange={onhandleTag}
                            onKeyDown={e => e.stopPropagation()}
                          />
                          <AntdButton
                            type="text"
                            icon={<PlusOutlined />}
                            onClick={addItem}
                          >
                            {t('添加标签')}
                          </AntdButton>
                        </Space>
                      </>
                    )}
                    options={items.map(item => ({ label: item, value: item }))}
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                  <Space>
                    <AntdButton htmlType="reset" type="text">
                      {t('取消')}
                    </AntdButton>
                    <AntdButton htmlType="submit" type="primary" secondary>
                      {t('创建助手并会话')}
                    </AntdButton>
                  </Space>
                </Form.Item>
              </Form>
            </Flex>
          </Flex>
        </div>
      </ScrollContent>
    </Drawer>
  );
}
