import React from 'react'
import Link from 'next/link'

import type { RootParams } from '../layout'

type RavendawnPageProps = RootParams & {}

export default function Page({ params: { locale } }: RavendawnPageProps) {
  return (
    <div className="">
      Ravendawn trading ui
      <div className="flex flex-col gap-4">
        <Link href={'/en/ravendawn'} className="underline">
          English
        </Link>
        <Link href={'/pt-BR/ravendawn'} className="underline">
          Portuguese
        </Link>
      </div>
    </div>
  )
}
