import '../styles/globals.css'
import React, { ReactNode, Fragment } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Fragment>{children}</Fragment>
}
