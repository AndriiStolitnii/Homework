const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const mock = [
    {
        name: "Ihor",
        age: "20"
    },
    {
        name: "Oleh",
        age: "23"
    }
];
app.use("/public", express.static("public")).use(cors()).use(express.json());
app.get("/", (req, res) => res.send("Hello world"));
app.get("/mock", (req, res) => res.send(mock));
app.post("/mock", (req, res) => {
    mock.push(req.body);
    res.status(200).send(req.body);
})
app.listen(port, () => {
    console.log("Server is running on http://localhost:8080")
});