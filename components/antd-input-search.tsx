import { Input } from 'antd';

import Icon from '@/components/icon';

interface IProps {
  placeholder: string;
  loading?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  size?: 'large' | 'middle' | 'small';
  variant?: 'filled' | 'outlined';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  [key: string]: unknown;
}

export default function AntdSearchInput({
  placeholder,
  onChange,
  value,
  size = 'large',
  variant = 'filled',
  disabled = false,
  autoFocus = false,
}: Readonly<IProps>) {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      variant={variant}
      allowClear
      prefix={<Icon iconClass="icon-a-searchbar-search" svgClass="w-4 h-4" />}
      onChange={onChange}
      value={value}
      disabled={disabled}
      autoFocus={autoFocus}
    />
  );
}
