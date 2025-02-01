const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/questions", async (req, res) => {
  try {
    const { data } = await axios.get("https://api.jsonserve.com/Uw5CrX");

    res.json(data.questions);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("listing");
});
