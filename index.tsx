'use client'

import React, { useEffect } from 'react'

type AquveeComponentProps = {
  query: string;
  projectId?: string;
  styleCss?: string;
  customUrl?: string;
  isDev?: boolean;
  resetCss?: boolean;
  children?: React.ReactNode;
}

export default function AquveeComponent(props: AquveeComponentProps) {
  const { query, projectId, styleCss, customUrl, isDev, resetCss, children } = props;

  useEffect(() => { import('@aquvee/wc'); return () => { }; }, [])

  return (
    <aquvee-component 
      query={query}
      {...(projectId ? { 'project-id': projectId } : {})}
      {...(styleCss ? { 'style-css': styleCss } : {})}
      {...(customUrl ? { 'custom-url': customUrl } : {})}
      {...(isDev ? { 'is-dev': '' } : {})}
      {...(resetCss ? { 'reset-css': '' } : {})}
    >
      {children}
    </aquvee-component>
  )
}
