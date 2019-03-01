# React Yall

[![Download Count](http://img.shields.io/npm/dm/react-yall.svg?style=flat-square)](https://npmjs.org/package/react-yall)
[![npm version](https://badge.fury.io/js/react-yall.svg)](https://badge.fury.io/js/react-yall)

-------------
Lazy load images/videos/iframes
A react wrapper for [yall.js](https://github.com/malchata/yall.js) using React Context.

:star2: Using ONLY react props and not DOM to flip elements attributes


-------------

:exclamation: Works only with react >= 16.8.0.(The one with hooks)

## Installation
Run the following command:
`npm install -S react-yall`

## Usage

### Provider props:
`idlyLoad`, `idleLoadTimeout`, `threshold`

### YallImg props:
  `dataSrc`, other img tag props

### Simple usage:

```js
  import { Provider as YallProvider, YallImg } from 'react-yall';
  <YallProvider lazyClass="my-lazy-class">
    ...
    <YallImg src="/placeholder.png" dataSrc="/image.png" />
    ...
  </YallProvider>
```
See also src/index.js as example


* Note: Tested only for image,picture,video tags
* TODO: Add yall classes
