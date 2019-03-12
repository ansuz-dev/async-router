const chai = require("chai");
const chaiHttp = require("chai-http");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiHttp);
chai.use(chaiAsPromised);

const expect = chai.expect;
const assert = chai.assert;
chai.should();

const app = require("./app");

describe("Test", () => {
  it("should get home route", () => {
    return chai.request(app)
      .get("/")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "home route");
     });
  });

  it("should get '2' route", () => {
    return chai.request(app)
      .get("/2")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "two callbacks");
     });
  });

  it("should get '3' route", () => {
    return chai.request(app)
      .get("/3")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "three async callbacks");
     });
  });

  it("should get '4' route", () => {
    return chai.request(app)
      .get("/4")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "four simple async callbacks");
     });
  });

  it("should get 'exception' route", () => {
    return chai.request(app)
      .get("/exception")
      .then((res) => {
        expect(res).to.have.status(500);
        assert.equal(res.body.message, "always exception");
     });
  });

  it("should get 'route' route", () => {
    return chai.request(app)
      .get("/route")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "get route");
     });
  });

  it("should post 'route' route", () => {
    return chai.request(app)
      .post("/route")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "post route");
     });
  });

  it("should put 'route' route", () => {
    return chai.request(app)
      .put("/route")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "put route");
     });
  });

  it("should patch 'route' route", () => {
    return chai.request(app)
      .patch("/route")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "patch route");
     });
  });

  it("should delete 'route' route", () => {
    return chai.request(app)
      .delete("/route")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "delete route");
     });
  });

  it("should get 'param/1' route", () => {
    return chai.request(app)
      .get("/param/1")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "get param id=[1]");
     });
  });

  it("should post 'param/1' route", () => {
    return chai.request(app)
      .post("/param/1")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "post param id=[1]");
     });
  });

  it("should get 'all' route", () => {
    return chai.request(app)
      .get("/all")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "all route");
     });
  });

  it("should post 'all' route", () => {
    return chai.request(app)
      .post("/all")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "all route");
     });
  });

  it("should put 'all' route", () => {
    return chai.request(app)
      .put("/all")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "all route");
     });
  });

  it("should delete 'all' route", () => {
    return chai.request(app)
      .delete("/all")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "all route");
     });
  });

  it("should patch 'all' route", () => {
    return chai.request(app)
      .patch("/all")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "all route");
     });
  });

  it("should search 'all' route", () => {
    return chai.request(app)
      .search("/all")
      .then((res) => {
        expect(res).to.have.status(200);
        assert.equal(res.body.message, "all route");
     });
  });
});
