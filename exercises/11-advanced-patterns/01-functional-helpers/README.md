Functional helpers

Implement two small utilities used widely in functional programming:

- `curry(fn)` — returns a curried version of `fn` that can be partially applied.
- `compose(...fns)` — returns a function that composes the given functions right-to-left.

Hints:
- Curry should allow partial application until the original function's arity is satisfied.
- Compose should call functions from right to left.

Examples:

```js
const { curry, compose } = require('./index');
const add = (a,b,c) => a+b+c;
const cadd = curry(add);
console.log(cadd(1)(2)(3)); // 6

const double = x => x*2;
const inc = x => x+1;
const f = compose(double, inc);
console.log(f(2)); // 6
```

Further reading: currying vs partial application, compose vs pipe.

