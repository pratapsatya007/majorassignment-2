//require our packages
require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const passport = require("passport");
const { ObjectId } = require("mongodb");

//require router routes
const authRoute = require("./routes/auth");
const homeRoute = require("./routes/home");
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username is provided
  if (!username) {
    return res.status(400).json({ error: "No username was given" });
  }
  if (!password) {
    return res.status(400).json({ error: "No password was given" });
  }
  // If the username is provided and valid, continue with the registration process
  // Send a success response
});
//setup session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
console.log(process.env.SECRET);
//initialize passport
app.use(passport.initialize());
//use passport to deal with session

app.use(passport.session());

const MongoClient = require("mongodb").MongoClient;
mongoose
  .connect("mongodb://127.0.0.1:27017/airbnb")
  .then(() => console.log("db connect success"))
  .catch((err) => console.log("db connect error", err));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/lakefront", (req, res) => {
  res.render("lakefront");
});
app.get("/amazingviews", (req, res) => {
  res.render("amazingviews");
});
app.get("/beachfronts", (req, res) => {
  res.render("beachfronts");
});
app.get("/omg", (req, res) => {
  res.render("omg");
});
app.get("/nationalparks", (req, res) => {
  res.render("nationalparks");
});
app.get("/tinyhomes", (req, res) => {
  res.render("tinyhomes");
});
app.get("/countryside", (req, res) => {
  res.render("countryside");
});
app.get("/farms", (req, res) => {
  res.render("farms");
});
app.get("/cabins", (req, res) => {
  res.render("cabins");
});
app.get("/bookingpage", (req, res) => {
  res.render("booking");
});
app.get("/bookingrequest", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/confirmedbooking", (req, res) => {
  res.render("confirmedbooking");
});
app.get("/rooms/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("rooms");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/amazingviews/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("amazingviews");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/beachfront/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("beachfront");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/cabins/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("cabins");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/countryside/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("countryside");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/farms/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("farms");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/lakefront/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("lakefront");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/nationalparks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("nationalparks");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/omg/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("omg");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/tinyhomes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Requested ID:", id);

    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/airbnb"
    );
    const db = client.db();
    const collection = db.collection("tinyhomes");

    const data = await collection.findOne({ id: id });
    // console.log("Data from Database:", data);

    client.close();

    if (!data) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
//use auth routes
app.use("/", authRoute);
app.use("/", homeRoute);
app.listen(200, (req, res) => {
  console.log("server started");
});
