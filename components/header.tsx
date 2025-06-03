'use client';
import { useContext } from 'react';

import { SignedIn, UserButton, SignedOut } from '@clerk/nextjs';
import { Button, Tooltip } from 'antd';

import { useT } from '@/app/i18n/client';
import Icon from '@/components/icon';
import { globalModalContext } from '@/provider/modal-provider';

import AntdButton from './antd-button';

export default function HeaderComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useT();
  const { handleModalState } = useContext(globalModalContext);
  return (
    <div className="w-full bg-background h-[var(--moonshot-layout-header-height)] flex flex-row justify-between items-center !leading-[var(--moonshot-layout-header-height)] shadow-md px-4">
      <div className="flex-1">{children}</div>
      <div className="flex items-center gap-2">
        <Tooltip title={t('切换主题')} placement="bottom">
          <Button
            type="text"
            icon={<Icon iconClass="icon-magic" svgClass="w-10 h-10" />}
          />
        </Tooltip>
        <Tooltip title={t('切换语言')} placement="bottom">
          <Button
            type="text"
            icon={<Icon iconClass="icon-language" svgClass="w-10 h-10" />}
          />
        </Tooltip>
        <Tooltip title={t('切换布局')} placement="bottom">
          <Button
            type="text"
            icon={<Icon iconClass="icon-direction" svgClass="w-10 h-10" />}
          />
        </Tooltip>
        <SignedOut>
          <AntdButton
            size="small"
            type="primary"
            variant="text"
            onClick={handleModalState}
          >
            {t('登录')}
          </AntdButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
