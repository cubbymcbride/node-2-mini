const express = require("express")
const bc = require("./controller/books_controller")

const app = express()

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", bc.read)
app.post("/api/books", bc. create)
app.put("/api/books", bc.update)
app.delete("/api/book/:id", bc.delete)

const port = 4000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});