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

  get name() {
    return this._router.name;
  }

  get length() {
    return this._router.length;
  }

  use(...cbs) {
    this._router.use(handler(cbs));
  }

  route(path) {
    return new Route(path, this);
  }

  all(path, ...cbs) {
    this._router.all(path, handler(cbs));
  }

  param(name, cb) {
    this._router.param(name, (req, res, next, id) => {
      return Promise.resolve()
        .then(() => cb(req, res, id))
        .then(next)
        .catch(next);
    });
  }

  // METHOD

  checkout(path, ...cbs) {
    this._router.checkout(path, handler(cbs));
  }

  copy(path, ...cbs) {
    this._router.copy(path, handler(cbs));
  }

  delete(path, ...cbs) {
    this._router.delete(path, handler(cbs));
  }

  get(path, ...cbs) {
    this._router.get(path, handler(cbs));
  }

  head(path, ...cbs) {
    this._router.head(path, handler(cbs));
  }

  lock(path, ...cbs) {
    this._router.lock(path, handler(cbs));
  }

  merge(path, ...cbs) {
    this._router.merge(path, handler(cbs));
  }

  mkactivity(path, ...cbs) {
    this._router.mkactivity(path, handler(cbs));
  }

  mkcol(path, ...cbs) {
    this._router.mkcol(path, handler(cbs));
  }

  move(path, ...cbs) {
    this._router.move(path, handler(cbs));
  }

  notify(path, ...cbs) {
    this._router.notify(path, handler(cbs));
  }

  options(path, ...cbs) {
    this._router.options(path, handler(cbs));
  }

  patch(path, ...cbs) {
    this._router.patch(path, handler(cbs));
  }

  post(path, ...cbs) {
    this._router.post(path, handler(cbs));
  }

  purge(path, ...cbs) {
    this._router.purge(path, handler(cbs));
  }

  put(path, ...cbs) {
    this._router.put(path, handler(cbs));
  }

  report(path, ...cbs) {
    this._router.report(path, handler(cbs));
  }

  search(path, ...cbs) {
    this._router.search(path, handler(cbs));
  }

  subscribe(path, ...cbs) {
    this._router.subscribe(path, handler(cbs));
  }

  trace(path, ...cbs) {
    this._router.trace(path, handler(cbs));
  }

  unlock(path, ...cbs) {
    this._router.unlock(path, handler(cbs));
  }

  unsubscribe(path, ...cbs) {
    this._router.unsubscribe(path, handler(cbs));
  }
}

module.exports = Router;
