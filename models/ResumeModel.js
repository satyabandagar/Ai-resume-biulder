const { model } = require("mongoose");  
const { ResumesSchema } = require("../schemas/ResumeSchema"); // Ensure the correct path  

// Create the Resume model from the schema  
const ResumeModel = model("Resume", ResumesSchema); // Use 'Resume' as the model name  

// Export the Resume model  
module.exports = ResumeModel; // Export the model directly, not in an object  