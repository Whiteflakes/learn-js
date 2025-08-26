function raceToSuccess(promises) {
  return new Promise((resolve, reject) => {
    let rejections = 0;
    const reasons = [];
    promises.forEach(p => Promise.resolve(p).then(resolve).catch(r => {
      rejections++;
      reasons.push(r);
      if (rejections === promises.length) reject(reasons);
    }));
  });
}

module.exports = { raceToSuccess };
