import React from 'react';

interface IProps {
  children?: React.ReactNode;
  conjuction?: string;
  oxfordComma?: boolean;
}

const ReactAnd = ({ children, conjuction = 'and', oxfordComma = true }: IProps): JSX.Element => {
  if (!children) {
    return <></>;
  }
  if (!Array.isArray(children) || children.length === 1) {
    return <>{children}</>;
  }
  if (children.length === 2) {
    return <>{[children[children.length - 2], ` ${conjuction} `, children[children.length - 1]]}</>;
  }
  const commaSeparatedItems = children
    .slice(0, children.length - 2)
    .reduce((previous: React.ReactNode[], current) => {
      return [...previous, current, ', '];
    }, []);
  return (
    <>
      {[
        ...commaSeparatedItems,
        children[children.length - 2],
        oxfordComma ? `, ${conjuction} ` : ` ${conjuction} `,
        children[children.length - 1],
      ]}
    </>
  );
};

export default ReactAnd;
