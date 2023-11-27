import express from "express";
const app = express();
app.use(express.json());

const items = ["Laptop", "Phone", "Watch"];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/search", function (req, res) {
  res.send("API Search");
});

app.get("/api/items", function (req, res) {
  res.send(items);
});

app.get("/api/items/:index", function (req, res) {
  if (!items[req.params.index])
    return res.status(400).send("Item not found");
  res.send(items[req.params.index]);
});

app.put("/api/items/:index", function (req, res) {
  items[req.params.index] = req.body.name;
  res.send(items[req.params.index]);
});

app.delete("/api/items/:index", function (req, res) {
  items.splice(req.params.index, 1);
  res.send(items);
});

app.post("/api/items", function (req, res) {
  if (!req.body.name) {
    return res.status(400).send("Item name is required");
  }
  items.push(req.body.name);
  res.send(items);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
