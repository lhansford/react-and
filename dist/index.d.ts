import React from 'react';
interface IProps {
    children?: React.ReactNode;
    conjuction?: string;
    oxfordComma?: boolean;
}
declare const ReactAnd: ({ children, conjuction, oxfordComma }: IProps) => JSX.Element;
export default ReactAnd;
