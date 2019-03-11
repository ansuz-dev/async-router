# Asynchronous Express Router

## __Installation__

Using npm:

    npm install --save @ansuz-dev/async-router

## __Usage__

    const express = require("express");
    const app = express();

    const { Router } = require("@ansuz-dev/async-router");
    const router = new Router();

    // middleware
    router.use(async (req, res) => {
      console.log("%s %s", req.method, req.path);
    });

    // a route
    router.get("/", async (req, res) => {
      res.json({ message: "connect" });
    });

    // another route with 2 callbacks
    router.get("/2", async (req, res) => {
      req.data = "two";
    }, async (req, res) => {
      let message = `${req.data} callbacks`;
      res.json({ message });
    });

    // always invoked
    router.use(async (req, res) => {
      console.log("%s %s DONE", req.method, req.path);
    });

    app.use("/", router._);

