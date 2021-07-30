## Challenge no. 2
Write a function that uses the reduce method to filter out from an array of numbers those whose parity of the sum of the previous elements is the same as the parity of the following elements. The first and the last element have to always be in the resulting array.

You cannot use loops neither the current index and source array arguments that are passed to the reducer function.

### Example
```js
[1,2,3,4,5,6,7,8] -> [1, 5, 7, 8]
```
| Element      | Sum of previous | Sum of following | Result | Why
| :----:       |    :----:       |    :----:   |    :----: | :----: |
| 1       | -       | 35  | in | first element
| 2       | 1       | 33  | out | both odd
| 3       | 2       | 30  | out | both even
| 4       | 6       | 26  | out | both even
| 5       | 10      | 21  | in | even, odd
| 6       | 15      | 15  | out | both odd
| 7       | 21      | 8   | in | odd, even
| 8       | 28      | -   | in | last element
