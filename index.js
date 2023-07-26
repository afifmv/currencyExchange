import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_KEY = "b42fde8e23f59795bcc0364f";
const API_URL = "https://v6.exchangerate-api.com/v6/" + API_KEY + "/latest/";
const currencySupported = [
  {
    name: "USD",
    description: "The official currency of the United States",
  },
  {
    name: "CAD",
    description: "The official currency of Canada",
  },
  {
    name: "AED",
    description: "The official currency of UAE",
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { currencySupported: currencySupported });
});

app.get("/usd", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "USD");
    res.render("currencyView.ejs", result.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/cad", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "CAD");
    res.render("currencyView.ejs", result.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/aed", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "AED");
    res.render("currencyView.ejs", result.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
