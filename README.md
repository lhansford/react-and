# react-and

![CI](https://github.com/lhansford/react-and/workflows/CI/badge.svg)

TODO:

## Installation

```sh
yarn add react-and
npm install --save react-and
```

## Usage

ReactAnd accepts any number of children and will render them with the correct grammar.

```JSX
<ReactAnd>
  {[
    'apples',
    'oranges',
    'bananas',
  ]}
</ReactAnd>
```

Renders as:
> apples, oranges, and bananas

You can pass any valid React components as children:

```JSX
<ReactAnd>
  <a href="/apples">apples</a>
  <a href="/oranges">oranges</a>
</ReactAnd>
```

Renders as:
> `<a href="/apples>apples</a> and <a href="/oranges">oranges</a>`

## Props

### `conjuction`

This is the string to be used to join the last child when there is more than one child. Default: `"and"`.

```JSX
<ReactAnd conjuction="and/or">
  {[
    'apples',
    'oranges',
  ]}
</ReactAnd>
```

Renders as:
> apples and/or oranges

### `oxfordComma`

Determinses whether an [Oxford comma](https://en.wikipedia.org/wiki/Serial_comma) will be used when joining the items. Default: `true`.

```JSX
<ReactAnd oxfordComma={false}>
  {[
    'apples',
    'oranges',
    'bananas',
  ]}
</ReactAnd>
```

Renders as:
> apples, oranges and bananas

## Demo

[https://react-and.surge.sh/](https://react-and.surge.sh/)

## License

Licensed under MIT.
