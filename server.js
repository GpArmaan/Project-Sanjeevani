// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// // MongoDB connection (optional, if you want to store user moods/chat)
// mongoose.connect("mongodb://127.0.0.1:27017/sanjeevaniDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Example Schema for Mood Tracking
// const moodSchema = new mongoose.Schema({
//   mood: String,
//   date: { type: Date, default: Date.now },
// });

// const Mood = mongoose.model("Mood", moodSchema);

// // Routes
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.post("/mood", async (req, res) => {
//   const newMood = new Mood({ mood: req.body.mood });
//   await newMood.save();
//   res.redirect("/");
// });

// app.get("")

// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/sanjeevaniDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// -------------------- Schemas -------------------- //

// Mood schema
const moodSchema = new mongoose.Schema({
  mood: String,
  date: { type: Date, default: Date.now },
});
const Mood = mongoose.model("Mood", moodSchema);

// Journal schema
const journalSchema = new mongoose.Schema({
  title: String,
  entry: String,
  date: { type: Date, default: Date.now },
});
const Journal = mongoose.model("Journal", journalSchema);

// -------------------- Routes -------------------- //

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Mood Tracker (POST save mood)
app.post("/mood", async (req, res) => {
  try {
    const newMood = new Mood({ mood: req.body.mood });
    await newMood.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error saving mood");
  }
});

// Resources page
app.get("/resources", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "resources.html"));
});

// Journals page (frontend page)
app.get("/journals", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "journals.html"));
});

// Journals API
// Save a new journal
app.post("/api/journals", async (req, res) => {
  try {
    const { title, entry } = req.body;
    const newJournal = new Journal({ title, entry });
    await newJournal.save();
    res.json({ success: true, journal: newJournal });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all journals
app.get("/api/journals", async (req, res) => {
  try {
    const journals = await Journal.find().sort({ date: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete a journal
app.delete("/api/journals/:id", async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------- Start Server -------------------- //
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
