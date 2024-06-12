import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from '@/i18n'

type HomeProps = {
  params: { locale: Locale }
}

export default function Home({ params: { locale } }: HomeProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Index')

  return (
    <main className="">
      <h1>{t('title')}</h1>
      <Link href={'/en/ravendawn'}>Ravendawn Dashboard</Link>
      <h2>Languages</h2>
      <div className="flex flex-col gap-4">
        <Link href={'/en'} className="underline">
          English
        </Link>
        <Link href={'/pt-BR'} className="underline">
          Portuguese
        </Link>
      </div>
    </main>
  )
}
