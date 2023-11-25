const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

const API_KEY = "supersecretkey";

const arrayofNumbers = ["+88005553535", "+79005003030"];

app.use(express.json());
app.use(cors("*"));

app.get("/api/numbers", (req, res) => {
  const { key, filteredValue } = req.query;
  if (key !== API_KEY) {
    res.status(403).json({ msg: "API Key invalid", error: "Unauthorizated" });
  }
  if (filteredValue) {
    const filteredNumbers = arrayofNumbers.filter((el) =>
      el.includes(filteredValue)
    );

    res.status(200).send(filteredNumbers);
  }
  res.status(200).json(arrayofNumbers);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
