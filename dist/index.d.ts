import React, { ReactNode } from 'react';
type ReactAndProps = {
    children?: React.ReactNode;
    conjuction?: string;
    oxfordComma?: boolean;
};
declare const ReactAnd: ({ children, conjuction, oxfordComma }: ReactAndProps) => ReactNode;
export default ReactAnd;
