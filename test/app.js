const express = require("express");
const app = express();

const port = 3000;

const { Router } = require("../index");

const router = new Router();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

router.use(async (req, res) => {
  console.log("%s %s", req.method, req.path);
});

router.get("/", async (req, res) => {
  res.json({ message: "home route" });
});

router.get("/2", async (req, res) => {
  req.data = "two";
}, async (req, res) => {
  let message = `${req.data} callbacks`;
  res.json({ message });
});

router.get("/3", async (req, res) => {
  await sleep(1000);
  req.data = "three";
}, async (req, res) => {
  await sleep(1000);
  req.data = `${req.data} async`;
}, async (req, res) => {
  let message = `${req.data} callbacks`;
  res.json({ message });
});

router.get("/4", async (req, res) => {
  req.data = "four";
  await sleep(1000);
}, async (req, res) => {
  req.data = `${req.data} simple`;
  await sleep(1000);
}, async (req, res) => {
  req.data = `${req.data} async`;
  await sleep(1000);
}, async (req, res) => {
  let message = `${req.data} callbacks`;
  res.json({ message });
});

router.get("/exception", async(req, res) => {
  await sleep(1000);
  throw new Error("always exception");
});

router.route("/route")
  .get([
    async (req, res) => {
      req.data = "get";
      await sleep(1000);
    }, async (req, res) => {
      let message = `${req.data} route`;
      res.json({ message });
    }
  ])
  .post([
    async (req, res) => {
      req.data = "post";
      await sleep(1000);
    }, async (req, res) => {
      let message = `${req.data} route`;
      res.json({ message });
    }
  ])
  .put([
    async (req, res) => {
      req.data = "put";
      await sleep(1000);
    }, async (req, res) => {
      let message = `${req.data} route`;
      res.json({ message });
    }
  ])
  .patch([
    async (req, res) => {
      req.data = "patch";
      await sleep(1000);
    }, async (req, res) => {
      let message = `${req.data} route`;
      res.json({ message });
    }
  ])
  .delete([
    async (req, res) => {
      req.data = "delete";
      await sleep(1000);
    }, async (req, res) => {
      let message = `${req.data} route`;
      res.json({ message });
    }
  ]);

router.param("id", async (req, res, id) => {
  await sleep(100);
  console.log("Get param id=[%s]", id);
});

router.get("/param/:id", async (req, res) => {
  res.json({ message: `get param id=[${req.params.id}]` });
});

router.post("/param/:id", async (req, res) => {
  res.json({ message: `post param id=[${req.params.id}]` });
});

router.all("/all", async (req, res) => {
  req.data = "all";
  await sleep(1000);
}, async (req, res) => {
  let message = `${req.data} route`;
  res.json({ message });
});

// always invoked
router.use(async (req, res) => {
  console.log("%s %s DONE", req.method, req.path);
});

app.use("/", router._);

app.use((error, req, res, next) => {
  console.log(error);

  res.status(500).json({ message: error.message });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
