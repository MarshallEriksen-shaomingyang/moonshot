'use client';
import { useCallback } from 'react';

import { usePathname } from 'next/navigation';

import { useT } from '@/app/i18n/client';
import ListButton from '@/components/list-button';

export default function SettingsSide() {
  const pathname = usePathname();
  const { t } = useT('settings');

  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  const data = [
    {
      title: t('用户信息'),
      'icon-dark': 'icon-custom-user-copy',
      'icon-light': 'icon-custom-user',
      path: 'user-info',
    },
    {
      title: t('修改密码'),
      'icon-dark': 'icon-reset_password-copy',
      'icon-light': 'icon-reset_password',
      path: 'change-password',
    },
    {
      title: t('关于我们'),
      'icon-dark': 'icon-about',
      'icon-light': 'icon-about-copy',
      path: 'about',
    },
  ];

  return (
    <div className="h-full px-2 py-4 shadow-md">
      <ListButton data={data} isActive={isActive} size="large" />
    </div>
  );
}
