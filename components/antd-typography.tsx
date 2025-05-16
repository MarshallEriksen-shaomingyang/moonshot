import React, { ReactNode } from 'react';
import '../styles/typography.css';

type TextVariant =
  | 'primary'
  | 'secondary'
  | 'heading'
  | 'subheading'
  | 'display'
  | 'disabled';

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({
  variant = 'primary',
  children,
  className,
  style,
}) => {
  return (
    <span className={`text-${variant} ${className || ''}`} style={style}>
      {children}
    </span>
  );
};

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Title: React.FC<TitleProps> = ({
  level = 1,
  children,
  className,
  style,
}) => {
  const variantMap = {
    1: 'display',
    2: 'heading',
    3: 'subheading',
    4: 'primary',
    5: 'secondary',
  };
  const variant = variantMap[level as keyof typeof variantMap] as TextVariant;

  return (
    <Text variant={variant} className={className} style={style}>
      {children}
    </Text>
  );
};

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <p className={`text-primary ${className || ''}`} style={style}>
      {children}
    </p>
  );
};

// 导出 Typography 作为命名空间
export const Typography = {
  Text,
  Title,
  Paragraph,
};
