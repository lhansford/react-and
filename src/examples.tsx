import React from 'react';
import ReactDOM from 'react-dom/client';

import ReactAnd from './index';

const { createRoot } = ReactDOM;

// eslint-disable-next-line jsx-a11y/anchor-is-valid
const Fruit = ({ name }: { name: string }) => <a href="#">{name}</a>;

const App = () => (
  <>
    <h1>react-and Examples</h1>
    <h2>Text as children</h2>
    <p>Code:</p>
    <pre>
      <code>
        {`<ReactAnd conjuction="and" oxfordComma={true}>
  {['apples', 'oranges', 'bananas']}
</ReactAnd>`}
      </code>
    </pre>
    <p>Output:</p>
    <ReactAnd conjuction="and" oxfordComma={true}>
      {['apples', 'oranges', 'bananas']}
    </ReactAnd>
    <h2>Components as children</h2>
    <p>Code:</p>
    <pre>
      <code>
        {`<ReactAnd conjuction="or" oxfordComma={false}>
  {[
    <Fruit key="1" name="apples" />,
    <Fruit key="2" name="oranges" />,
    <Fruit key="3" name="bananas" />
  ]}
</ReactAnd>`}
      </code>
    </pre>
    <p>Output:</p>
    <ReactAnd conjuction="or" oxfordComma={false}>
      {[
        <Fruit key="1" name="apples" />,
        <Fruit key="2" name="oranges" />,
        <Fruit key="3" name="bananas" />,
      ]}
    </ReactAnd>
  </>
);

const domNode = document.getElementById('app');
const root = createRoot(domNode!);
root.render(<App />);
