# React Yall

[![Download Count](http://img.shields.io/npm/dm/react-yall.svg?style=flat-square)](https://npmjs.org/package/react-yall)
[![npm version](https://badge.fury.io/js/react-yall.svg)](https://badge.fury.io/js/react-yall)

-------------
Lazy load images/videos/iframes
A react wrapper for [yall.js](https://github.com/malchata/yall.js) using React Context.

:star2: Using ONLY react props and not DOM


-------------

# [DEMO](https://saltas888.github.io/react-yall/)

:exclamation: Works only with react >= 16.8.0.(The one with hooks)

## Installation
Run the following command:
`npm install -S react-yall`

## Usage

### Provider options:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| lazyClass | 'lazy' | string | The element class used by yall.js to find elements to lazy load. Change this is if a class attribute value of lazy conflicts with your application.|
| lazyBackgroundClass | 'lazy-bg' | string | The element class used by yall.js to find elements to lazy load CSS background images for. Change this if you'd prefer not to use the default. |
| lazyBackgroundLoaded | 'lazy-bg-loaded' | string | When yall.js finds elements using the class specified by lazyBackgroundClass, it will remove that class and put this one in its place. This will be the class you use in your CSS to bring in your background image when the affected element is scrolled into the viewport. |
| idlyLoad | false | boolean | requires idleLoadTimeout to be set |
| idleLoadTimeout | 100 | number | In environments where requestIdleCallback is available, this option sets a deadline in milliseconds to kick off lazy loading for elements. If this is set to 0, requestIdleCallback is never called, and lazy loading for elements will begin immediately once they're in the viewport.|
| threshold | 200 | number | The threshold (in pixels) for how far elements need to be within the viewport to begin lazy loading. |

for more https://github.com/malchata/yall.js/#api-options

### YallImg props:
| prop | default | type | description |
| ---- | ---- | ----| ---- |
| dataSrc | none | string | Actual src of image |
| src | none | string | Placeholder until image is reached |
  
### Simple usage:

```js
  import { Provider as YallProvider, YallImg } from 'react-yall';
  const options = {
    lazyClass: "lazy",
    lazyBackgroundClass: "lazy-bg",
    lazyBackgroundLoaded: "lazy-bg-loaded",
    idlyLoad: false,
    idleLoadTimeout: 100,
    threshold: 200,
  };
  ...
  return (
    <YallProvider options={options} lazyClass="my-lazy-class">
      ...
      <YallImg src="/placeholder.png" dataSrc="/image.png" />
      ...
    </YallProvider>
```
See also src/index.js for example

* Note: Tested only for image,picture,video tags