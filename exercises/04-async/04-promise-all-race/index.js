function reflectAll(promises) {
  // returns Promise that resolves to array of {status, value/reason}
  return Promise.all(promises.map(p =>
    Promise.resolve(p)
      .then(v => ({ status: 'fulfilled', value: v }))
      .catch(e => ({ status: 'rejected', reason: e }))
  ));
}

module.exports = { reflectAll };
