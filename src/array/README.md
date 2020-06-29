# 3. Array

> The `push` and `pop` methods allow an array to emulate a basic `stack` data structure
> The `shift` and `unshift` methods allow an array to emulate a basic `queue` data structure

## Adding Elements

- Insert in the last position - `push` -  _**mutable**_
- Insert in the first position - `unshift` - **_mutable_**

    ![unshift](https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/48d3e88c-c4f1-456f-8b3e-38f5fbf8d48a.png)

## Removing Elements 
- Remove in the last position - `pop` -  _**mutable**_
- Remove in the first position - `shift` -  _**mutable**_
    - overwritten
    
    ![placeholder](https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/5b86a027-0f5a-42d2-a017-6e1c5f66c4e3.png)
    
    - remove -> `shift`

## Adding and removing elements from a specific position - `splice` - **_mutable_**

> **NB** why not use `delete` to remove elements
```js
delete numbers[0]
// numbers[0] = undefined
// we need to re-index the array
```
## `concat` - _**immutable**_
## Iterating

- `every`- iterate each element of the array until the function returns `false`
- `some` - iterate each element of the array until the function returns `true`
- `forEach` - return the same result as `for`
- `map` - return a new array with a result
- `filter` - return a new array with the elements for which the function returned `true`
- `reduce` -  resulting in single output value.

## ES6 new features
- `for...of` - original order
- `@@iterator`
- `Array.from` - copy
- `Array.of` - copy
- `fill` - initialize
- `copyWithin` - copy - _**mutable**_
## Sorting Elements

- `reverse`
- `sort` - lexicographical (according to ASCII value)
    - `sortedArray.sort((a, b) => a - b)` - ascending **numbers**
    - `sortedArray.sort((a, b) => a.localCompare(b))` - lexicographical **characters**
        
## Searching

- `indexOf` - return the index of the **first** element that matches the argument passed, if not found, return `-1`
- `lastIndexOf` - return the index of the **last** element that matches the argument passed, if not found, return `-1`
- ES 6
    - `find` - return the first **value** of the array that satisfies the proposed condition, if not found, return `undefined`
    - `findIndex` - return the **index** of the first value of the array that satisfies the proposed condition, if not found, return `undefined`
- ES 7
    - `includes` - return `true` if an element is found in the array, and `false` otherwise
        
## Outputting the array into a string
- `toString`
- `join`