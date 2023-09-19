'use client'

import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { axeAccessibilityReporter } from '@/utils/axeAccessibilityReporter'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />
}
