
function handler(cbs) {
  return function(req, res, next) {
    let arr = cbs.reduce((acc, cb) => acc.concat(cb), []);
    return arr.reduce((promise, cb) => {
      return promise.then(() => cb(req, res));
    }, Promise.resolve())
      .then(next)
      .catch(next);
  }
}

module.exports = handler;
