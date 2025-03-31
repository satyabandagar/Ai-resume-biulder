const express = require('express');
const Resume = require('../models/Resume');

const router = express.Router();

// Create Resume
router.post('/create', async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).send(resume);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get All Resumes
router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.status(200).send(resumes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update Resume
router.put('/:id', async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(updatedResume);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete Resume
router.delete('/:id', async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);
    res.status(200).send('Resume deleted');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;