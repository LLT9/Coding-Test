import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div>{t('profile')}</div>
  )
}
