'use client'

import React, { useEffect } from 'react'

type AquveeComponentProps = {
  query: string
  aquveeUrl: string
  children: React.ReactNode
}

export default function AquveeComponent(props: AquveeComponentProps) {
  const { query, aquveeUrl, children } = props;

  useEffect(() => { import('@aquvee/wc'); return () => { }; }, [])

  return (
    <aquvee-component query={query} aquvee_url={aquveeUrl}>
      {children}
    </aquvee-component>
  )
}
