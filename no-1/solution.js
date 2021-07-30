function solution(ns) {
  return ns
    .reduce(
      ({ cont, prev }, n) => ({
        prev: n,
        cont(next, res) {
          if (prev % 2 === 0 && next % 2 === 0) {
            res.unshift(n);
          }
          return cont(n, res);
        },
      }),
      {
        prev: -1, // -1 as prev for the first element of the array
        cont: (_, res) => res, // the last cont to be called just has to return the res array
      }
    )
    .cont(-1, []);
    // -1 as next for the last element of the array (the called cont is the one returned by the last iteration of the reduce
    // [] as the initial value for the resulting array
}
