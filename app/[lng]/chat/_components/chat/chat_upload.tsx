'use client';
import { useState, useRef } from 'react';

import { CloudUploadOutlined } from '@ant-design/icons';
import { Attachments, AttachmentsProps, Sender } from '@ant-design/x';
import type { GetProp, GetRef } from 'antd';
export default function ChatUpload() {
  const [items, setItems] = useState<GetProp<AttachmentsProps, 'items'>>([]);
  const senderRef = useRef<GetRef<typeof Sender>>(null);
  return (
    <Sender.Header
      title="上传文件"
      closable={false}
      styles={{
        content: {
          padding: 0,
        },
      }}
    >
      <Attachments
        // Mock not real upload file
        beforeUpload={() => false}
        items={items}
        onChange={({ fileList }) => setItems(fileList)}
        placeholder={type =>
          type === 'drop'
            ? {
                title: 'Drop file here',
              }
            : {
                icon: <CloudUploadOutlined />,
                title: 'Upload files',
                description: 'Click or drag files to this area to upload',
              }
        }
        getDropContainer={() => senderRef.current?.nativeElement}
      />
    </Sender.Header>
  );
}
