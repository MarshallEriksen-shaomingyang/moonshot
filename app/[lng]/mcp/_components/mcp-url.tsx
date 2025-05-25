'use client';
import { Form, Input } from 'antd';

import IconButton from '@/components/antd-button';
import Icon from '@/components/icon';
export default function McpUrlForm() {
  return (
    <>
      <Form.Item
        label="url"
        name="url"
        rules={[
          { required: true, message: '请输入url!' },
          { type: 'url', warningOnly: true },
        ]}
        tooltip={{
          title: '名称请输入英文',
          icon: <Icon iconClass="icon-info" svgClass="w-4 h-4 ml-2" />,
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item label="headers" name="headers">
        <Form.List name="headers">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="flex gap-2">
                  <Form.Item
                    {...restField}
                    name={[name, 'key']}
                    rules={[{ required: true, message: '请输入headers!' }]}
                  >
                    <Input placeholder="key" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'value']}
                    rules={[{ required: true, message: '请输入headers!' }]}
                  >
                    <Input placeholder="value" />
                  </Form.Item>
                  <IconButton
                    size="small"
                    onClick={() => remove(name)}
                    icon={<Icon iconClass="icon-remove" svgClass="w-4 h-4" />}
                  />
                </div>
              ))}
              <Form.Item>
                <IconButton
                  onClick={() => add()}
                  icon={
                    <Icon
                      iconClass="icon-add1"
                      svgClass="w-4 h-4 ml-2 cursor-pointer"
                    />
                  }
                >
                  添加
                </IconButton>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
    </>
  );
}
