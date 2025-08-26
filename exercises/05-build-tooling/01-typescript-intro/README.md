TypeScript intro

Goal

This exercise is a low-friction introduction to how TypeScript adds types on top of JavaScript.

Exercise

Implement `sum(a,b)` in JS, consider how you'd annotate it in TypeScript (`(a: number, b: number) => number`).

Hint: Type annotations are erased at runtime — the JS implementation stays the same.

Example:

```ts
function sum(a: number, b: number): number {
	return a + b;
}
```

In JS the runtime code is identical; TypeScript provides developer ergonomics and compile-time checks.
