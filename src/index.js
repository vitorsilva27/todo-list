const express = require("express");
const server = express();
server.use(express.json());

server.get("/teste", (req, res) => {
  res.send("API RODANDO COM SUCESSO");
});

server.listen(3000, () => {
  console.log("API Online");
});
