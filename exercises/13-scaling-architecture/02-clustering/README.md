Clustering

Exercise: helper to recommend worker count from CPU count.

Hint: On real systems, consider leaving one core for the OS and other services.

Example:

```js
const recommended = cpus => Math.max(1, Math.floor(cpus/2));
```
