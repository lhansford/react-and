'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

const ReactAnd = ({
  children,
  conjuction = 'and',
  oxfordComma = true
}) => {
  if (!children) {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }

  if (!Array.isArray(children) || children.length === 1) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }

  if (children.length === 2) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, [children[children.length - 2], ` ${conjuction} `, children[children.length - 1]]);
  }

  const commaSeparatedItems = children.slice(0, children.length - 2).reduce((previous, current) => {
    return [...previous, current, ', '];
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, [...commaSeparatedItems, children[children.length - 2], oxfordComma ? `, ${conjuction} ` : ` ${conjuction} `, children[children.length - 1]]);
};

module.exports = ReactAnd;
