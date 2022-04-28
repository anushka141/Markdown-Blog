const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog");
app.set("view engine", "ejs");

app.use("/static", express.static("static"));
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const article = [
    {
      title: "Title ",
      createdAt: new Date(),
      desc: "description",
    },
    {
      title: "Title 2",
      createdAt: new Date(),
      desc: "description",
    },
  ];
  res.render("articles/index", { articles: article });
});

app.listen(8000);
