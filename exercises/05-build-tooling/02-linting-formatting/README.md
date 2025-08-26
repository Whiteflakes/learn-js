Linting & formatting

Exercise: implement `isIdentifier(name)` helper and think about lint rules that enforce naming conventions.

Hint: ESLint rules may enforce naming style (camelCase) and flag unused variables.

Example:

```js
const isId = name => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
```
