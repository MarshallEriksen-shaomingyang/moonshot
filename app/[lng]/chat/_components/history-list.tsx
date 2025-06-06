'use client';
import React from 'react';

import { Conversations } from '@ant-design/x';
import type { ConversationsProps } from '@ant-design/x';
import { type GetProp } from 'antd';

const items: GetProp<ConversationsProps, 'items'> = Array.from({
  length: 4,
}).map((_, index) => ({
  key: `item${index + 1}`,
  label: `Conversation Item ${index + 1}`,
  disabled: index === 3,
}));

export default function ChatList() {
  return <Conversations items={items} defaultActiveKey="item1" />;
}
