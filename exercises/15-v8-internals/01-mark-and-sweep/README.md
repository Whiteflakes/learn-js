# Mark-and-sweep GC simulator

Implement a simple mark-and-sweep garbage collector simulator. The exercise provides a small `heap` object where keys are object ids and values contain `refs` arrays. The function should mark reachable objects starting from `roots` and remove unreachable objects from the heap.

Contract

- Input: `heap` object and `roots` array
- Output: array of remaining keys (or mutated heap)

Run: `node test.js`
