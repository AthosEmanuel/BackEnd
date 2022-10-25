const express = require("express");
const cors = require("cors");
var path = require("path");
import http from "http";
const app = express();

// Cria um Middleware para acessar a API
app.use((req: any, res: any, next: () => void) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  app.use(cors);
  next();
});

// Cria os Endpoints que são utilizados no front-end
app.get("/posts", (req: any, res: { sendFile: (arg0: any) => void }) => {
  res.sendFile(path.join(__dirname, "./data/dataPosts.json"));
});

app.get("/pages", (req: any, res: { sendFile: (arg0: any) => void }) => {
  res.sendFile(path.join(__dirname, "./data/dataPages.json"));
});

// Inicia o sevidor
const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
