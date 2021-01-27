const app = require("./index");
app.listen("5000", (err) => {
  if (err) return console.error(err);
  console.log("Running at localhost:5000");
});

process.on("uncaughtException", (err) => {
  console.log("[Inside 'uncaughtException' event] " + err.stack || err.message);
});
