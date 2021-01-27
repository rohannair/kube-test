const express = require("express");
const cors = require("cors");
const app = express();

const getToken = (headers) => {
  return headers.Authorization
    ? headers.Authorization.split("Bearer ")[1]
    : headers.authorization
    ? headers.authorization.split("Bearer ")[1]
    : false;
};

app.use(cors());
app.use((req, res, next) => {
  try {
    const token = getToken(req.headers);
    console.log("TOKEN", token);
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({
      error: e,
    });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "HELLO WORLD", headers: req.headers });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.json({ message: error.message });
});

module.exports = app;
