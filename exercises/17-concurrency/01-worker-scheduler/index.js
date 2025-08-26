// Round-robin scheduler simulator
// tasks: [{id, work}] where work is total units of work (integer)
// quantum: units per turn
function roundRobinSchedule(tasks, quantum) {
  if (!Array.isArray(tasks)) throw new TypeError('tasks must be array');
  const queue = tasks.map(t => ({ id: t.id, remaining: t.work }));
  const order = [];
  while (queue.length) {
    const task = queue.shift();
    const workDone = Math.min(task.remaining, quantum);
    task.remaining -= workDone;
    order.push({ id: task.id, ran: workDone });
    if (task.remaining > 0) queue.push(task);
  }
  return order;
}

module.exports = { roundRobinSchedule };
