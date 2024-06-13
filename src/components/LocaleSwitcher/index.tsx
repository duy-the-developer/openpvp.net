'use client'

import { useLocale, useTranslations } from 'next-intl'
import { locales } from '@/i18n'
import { CaretDown } from '@phosphor-icons/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Link, usePathname } from '@/navigation'

export function LocaleSwitcher() {
  const locale = useLocale()
  const tLocale = useTranslations('Locales')
  const tGeneral = useTranslations('General')
  const pathname = usePathname()

  return (
    <div>
      <Popover>
        <PopoverTrigger className="group flex items-center gap-x-1">
          {tLocale(locale)}
          <CaretDown className="h-5 w-5 transition-transform" />
        </PopoverTrigger>
        <PopoverContent>
          {locales.map((l) => (
            <Link
              key={l}
              href={pathname}
              locale={l}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {tLocale(l)}
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
