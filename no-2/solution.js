function solution(ns) {
  return ns
    .reduce(
      ({ cont, prevSum, isFirst }, n) => ({
        prevSum: prevSum + n,
        isFirst: false,
        cont(nextSum, isLast, res) {
          if (isFirst || isLast || prevSum % 2 !== nextSum % 2) {
            res.unshift(n);
          }
          return cont(nextSum + n, false, res);
        },
      }),
      {
        prevSum: 0, // 0 as the initial prevSum value
        isFirst: true, // the first element is obviously the first
        cont: (_, __, res) => res, // the last cont to be called just has to return the res array
      }
    )
    .cont(0, true, []);
    // 0 as the initial nextSum value
    // because we are calling the cont returned by the last iteration of the reduce, isLast must be true
    // [] as the initial value for the resulting array
}

solution([1, 2, 3, 4, 5, 6, 7, 8]);
