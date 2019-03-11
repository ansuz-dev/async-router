const express = require("express");

const handler = require("./handler");
const Route = require("./route");

class Router {

  constructor() {
    this._router = express.Router();
  }

  get _() {
    return this._router;
  }

  use(...cbs) {
    this._router.use(handler(cbs));
  }

  route(path) {
    return new Route(path, this);
  }

  all(path, ...cbs) {
    this._router.get(path, handler(cbs));
  }

  get(path, ...cbs) {
    this._router.get(path, handler(cbs));
  }

  post(path, ...cbs) {
    this._router.post(path, handler(cbs));
  }

  put(path, ...cbs) {
    this._router.put(path, handler(cbs));
  }

  delete(path, ...cbs) {
    this._router.delete(path, handler(cbs));
  }

  patch(path, ...cbs) {
    this._router.patch(path, handler(cbs));
  }
}

module.exports = Router;
