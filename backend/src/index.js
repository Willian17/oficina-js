const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./database");

app.use(cors());

app.use(express.json());

app.get("/tarefas", (req, res) => {
  const sql = "SELECT * FROM tarefas";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.post("/tarefas", (req, res) => {
  const name = req.body.name;
  const sql = "INSERT INTO tarefas (name) VALUES (?)";
  const values = [name];
  db.run(sql, values, (err) => {
    if (err) {
      throw err;
    }
    res.status(201).send("Tarefa criada com sucesso!");
  });
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
