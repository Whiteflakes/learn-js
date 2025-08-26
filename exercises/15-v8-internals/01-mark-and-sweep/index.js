function markAndSweep(heap, roots) {
  // heap: { id: { refs: [id, ...] }, ... }
  const marked = new Set();
  const stack = Array.isArray(roots) ? [...roots] : [];

  while (stack.length) {
    const id = stack.pop();
    if (!id || marked.has(id)) continue;
    const node = heap[id];
    if (!node) continue; // non-existent id
    marked.add(id);
    const refs = node.refs || [];
    for (const r of refs) stack.push(r);
  }

  // remove unmarked nodes from heap
  for (const key of Object.keys(heap)) {
    if (!marked.has(key)) delete heap[key];
    else heap[key].marked = true;
  }

  return Object.keys(heap);
}

module.exports = { markAndSweep };
