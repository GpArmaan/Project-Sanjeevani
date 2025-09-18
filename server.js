const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection (optional, if you want to store user moods/chat)
mongoose.connect("mongodb://127.0.0.1:27017/sanjeevaniDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Example Schema for Mood Tracking
const moodSchema = new mongoose.Schema({
  mood: String,
  date: { type: Date, default: Date.now },
});

const Mood = mongoose.model("Mood", moodSchema);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/mood", async (req, res) => {
  const newMood = new Mood({ mood: req.body.mood });
  await newMood.save();
  res.redirect("/");
});

app.get("")

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
