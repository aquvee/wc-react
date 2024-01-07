'use client'

import React, { useEffect } from 'react'

type AquveeComponentProps = {
  query: string;
  projectId?: string;
  styleCss?: string;
  customUrl?: string;
  isDev?: boolean;
  children?: React.ReactNode;
}

export default function AquveeComponent(props: AquveeComponentProps) {
  const { query, projectId, styleCss, customUrl, isDev, children } = props;

  useEffect(() => { import('@aquvee/wc'); return () => { }; }, [])

  return (
    <aquvee-component 
      query={query}
      {...(projectId ? { 'project-id': projectId } : {})}
      {...(styleCss ? { 'style-css': styleCss } : {})}
      {...(customUrl ? { 'custom-url': customUrl } : {})}
      {...(isDev ? { 'is-dev': '' } : {})}
    >
      {children}
    </aquvee-component>
  )
}
