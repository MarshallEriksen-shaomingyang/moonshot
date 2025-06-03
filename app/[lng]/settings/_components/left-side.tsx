'use client';
import { useCallback } from 'react';

import { usePathname } from 'next/navigation';

import { useT } from '@/app/i18n/client';
import ListButton from '@/components/list-button';

export default function SettingsSide() {
  const pathname = usePathname();
  console.log('pathname', pathname);
  const { t } = useT('settings');

  const isActive = useCallback(
    (path: string) => {
      // 移除语言前缀（如 /zh/）并比较路径
      const normalizedPathname = pathname.replace(/^\/[a-z]{2}\//, '');
      return normalizedPathname === path;
    },
    [pathname]
  );

  const data = [
    {
      title: t('用户信息'),
      'icon-dark': 'icon-custom-user-copy',
      'icon-light': 'icon-custom-user',
      path: 'settings/user-info',
    },
    {
      title: t('安全'),
      'icon-dark': 'icon-reset_password-copy',
      'icon-light': 'icon-reset_password',
      path: 'settings/security',
    },
    {
      title: t('关于我们'),
      'icon-dark': 'icon-about',
      'icon-light': 'icon-about-copy',
      path: 'settings/about',
    },
  ];

  return (
    <div className="h-full px-2 py-4 shadow-md">
      <ListButton data={data} isActive={isActive} size="large" />
    </div>
  );
}
