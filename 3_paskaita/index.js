const express = require("esxpress");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // is JSON i JS

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});