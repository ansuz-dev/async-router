
class Route {
  constructor(path, router) {
    this._path = path;
    this._router = router;
  }

  get(...cbs) {
    this._router.get(this._path, ...cbs);
    return this;
  }

  post(...cbs) {
    this._router.post(this._path, ...cbs);
    return this;
  }

  put(...cbs) {
    this._router.put(this._path, ...cbs);
    return this;
  }

  delete(...cbs) {
    this._router.delete(this._path, ...cbs);
    return this;
  }

  patch(...cbs) {
    this._router.patch(this._path, ...cbs);
    return this;
  }
}

module.exports = Route;
