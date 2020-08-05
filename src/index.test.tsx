import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ReactAnd from './index';

describe('ReactAnd', () => {
  it('Allows a custom conjuction', () => {
    render(<ReactAnd conjuction="and/or">{['apples', 'oranges', 'bananas']}</ReactAnd>);
    expect(screen.getByText('apples, oranges, and/or bananas')).not.toBeNull();

    render(<ReactAnd conjuction="and/or">{['apples', 'bananas']}</ReactAnd>);
    expect(screen.getByText('apples and/or bananas')).not.toBeNull();
  });

  it('Allows the toggling of Oxford comma usage', () => {
    render(<ReactAnd oxfordComma={false}>{['apples', 'oranges', 'bananas']}</ReactAnd>);
    expect(screen.getByText('apples, oranges and bananas')).not.toBeNull();
  });

  it('Renders child components correctly', () => {
    render(
      <ReactAnd oxfordComma={false}>
        {[
          <a data-testid="anchor" href="/" key="apples">
            <span style={{ color: 'red' }}>apples</span>
          </a>,
          'oranges',
          'bananas',
        ]}
      </ReactAnd>,
    );
    expect(screen.getByTestId('anchor')).toHaveAttribute('href', '/');
    expect(screen.getByText('apples')).toHaveStyle({ color: 'red' });
    expect(screen.getByText(', oranges and bananas')).not.toBeNull();
  });

  describe('With no children', () => {
    it('Returns an empty fragment', () => {
      const { container } = render(<ReactAnd />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('With 1 child', () => {
    it('Returns just the child', () => {
      render(<ReactAnd>text</ReactAnd>);
      expect(screen.getByText('text')).not.toBeNull();
    });
  });

  describe('With 2 children', () => {
    it('Returns the children joined by "and"', () => {
      render(<ReactAnd>{['apples', 'oranges']}</ReactAnd>);
      expect(screen.getByText('apples and oranges')).not.toBeNull();
    });
  });

  describe('With more than 2 children', () => {
    it('Returns the children joined by commas and "and"', () => {
      render(<ReactAnd>{['apples', 'pears', 'oranges', 'bananas']}</ReactAnd>);
      expect(screen.getByText('apples, pears, oranges, and bananas')).not.toBeNull();
    });
  });
});
