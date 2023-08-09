require("dotenv").config();
const express = require("express");
const PORT = process.env.SERVER_PORT || 3000;

const Router = require("./routes/experience.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/home", (req, res) => {
  res.send({
    Name: "experienceapi",
    version: "1.0.23",
    author: "Johanes Rendy",
  });
});

app.use("/api/exp", Router);

app.listen(PORT, () => {
  console.log(`Server is running on port 127.0.0.1:${PORT}`);
});
