const express = require("express");
const cors = require("cors");
const app = express();
const Lss = require("./lss");

app.use(cors());
app.use(express.json());

function handleRequest(req: any, res: any): void {
    console.log("\n[API] Request received");
    console.log("[API] Starting LSS Core.");

    //DEBUG
    console.log("[API]");
    console.log(req.body);

    const config = {
      minify: req.body.options.minify || false,
      log: req.body.options.log || true,
    }
    const content = req.body.content || {};
    const main = new Lss(config,content);

    main.run().then((result : Object) => {
      res.contentType("application/json");
      res.send(result);
    });
}

app.get("/api", (req: any, res: any) => handleRequest(req, res));
app.post("/api", (req: any, res: any) => handleRequest(req, res));
app.listen(5000, () => {
    console.log("API service listening on 127.0.0.1:5000");
});
