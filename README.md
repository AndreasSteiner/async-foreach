# Async-ForEach

The smallest and easiest Async ForEach library out there with true async support. No dependencies and the function is 10 lines long.

## Install

### Node.JS

``` shell
npm i for-async-each
```

Then just import it as a RequireJS module or ES6 module: 

``` javascript
const asyncForEach = require('for-async-each') ;
```

``` javascript
import asyncForEach from 'for-async-each';
```

### Browser

Simply include it before your scripts.

## Usage

Just pass the array and a callback function, which will be executed for each element in the array.

For control flow, you can either call '.then' on the asyncForEach function or await it:

``` javascript
let array = [1, 2, 3];
asyncForEach(array, async item => {
  await myPromise(item);
}).then(() => {
  console.log('done');
})
```

``` javascript
let array = [1, 2, 3];
await asyncForEach(array, async item => {
  await myPromise(item);
})

console.log('done');
```