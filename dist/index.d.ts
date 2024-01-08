import React from 'react';
type AquveeComponentProps = {
    query: string;
    projectId?: string;
    styleCss?: string;
    customUrl?: string;
    isDev?: boolean;
    resetCss?: boolean;
    children?: React.ReactNode;
};
export default function AquveeComponent(props: AquveeComponentProps): React.JSX.Element;
export {};
