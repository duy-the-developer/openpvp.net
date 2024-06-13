import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'

import type { RootParams } from '../layout'

type RavendawnPageProps = RootParams & {}

export default function Page({ params: { locale } }: RavendawnPageProps) {
  unstable_setRequestLocale(locale)
  const tRavendawn = useTranslations('Ravendawn')

  return (
    <div className="">
      <h1>{tRavendawn('title')}</h1>
      <div className="flex flex-col gap-4">
        <Link href={'/en/ravendawn'} className="underline">
          English
        </Link>
        <Link href={'/pt-BR/ravendawn'} className="underline">
          Portuguese
        </Link>
      </div>
      <Button>New Button</Button>
    </div>
  )
}
