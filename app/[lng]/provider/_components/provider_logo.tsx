'use client';
import { Avatar, Typography } from 'antd';

interface IProps {
  src?: string;
  name: string;
  size?: number;
}

export default function ModalLogo({ src, name, size = 32 }: IProps) {
  return (
    <div className="flex gap-2 items-center select-none">
      <Avatar size={size} src={src} alt="modal icon" />
      <Typography.Text className="!tracking-wide">{name}</Typography.Text>
    </div>
  );
}
