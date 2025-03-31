const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Define Mongoose schema
const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  link: String,
  summary: String,
  educationList: Array,
  skillsList: Array,
  projectList: Array,
  experienceList: Array,
});

const Resume = mongoose.model("Resume", resumeSchema);

// Store resume data in MongoDB
app.post("/FirstResume", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json({ message: "Resume saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving resume" });
  }
});

app.get("/FirstResume", async (req, res) => {
  try {
    const resumes = await Resume.find(); // Fetch all resumes from MongoDB
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching resumes" });
  }
});

mongoose.connect("mongodb://localhost:27017/resumeDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(3002, () => console.log("Server running on port 3002"));
