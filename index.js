const next = require("next").default;
const express = require("express");

const app = express();
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({
  dev,
});
const nextHandler = nextApp.getRequestHandler();
(async () => {
  //Here yours custom dir
  /* 
    app.get("/hello", async (req, res, next) => {
        return res.status(200).send('hello');
    });
*/
  await nextApp.prepare();
  app.use(nextHandler);

  app.set("port", process.env.PORT || 1337);

  // * Here you can use socket.io or similar
  // ? "const { Server } = require("socket.io")" top first
  /* const server = */ app.listen(app.get("port"), () => {
    console.log("[Express]: listening on port " + app.get("port"));
  });
  /* 
  const io = new Server(server)
  io.on("connection", async (socket) => {
      console.log(`[Socket]: New connection; ${socket.id}`);
  })
  */
})().catch((err) => {
  console.dir(`[Error]:`, err);
  process.exit(1);
});
