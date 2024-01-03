'use client'

import React, { useEffect } from 'react'

type AquveeComponentProps = {
  innerClass?: string
  format?: string
  query: string
  aquveeUrl: string
}

export default function AquveeComponent(props: AquveeComponentProps) {
  const { innerClass = null, format, query, aquveeUrl } = props;

  useEffect(() => { import('@aquvee/wc'); return () => { }; }, [])

  return (<aquvee-component
            inner_class={innerClass}
            format={format}
            query={query}
            aquvee_url={aquveeUrl} />)
}
