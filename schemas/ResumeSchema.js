const mongoose = require("mongoose");  
const Schema = mongoose.Schema;  

// Define the Resume schema  
const ResumesSchema = new Schema({  
  name: String,  
  email: String,  
  phone: String,  
  link: [String],  
  summary: String,  
  educationList: [{ school: String, cgpa: String }],  
  skillsList: [String],  
  projectList: [{ name: String, description: String }],  
  experienceList: [{ role: String, company: String, duration: String }]  
});  

// Export the schema  
module.exports = { ResumesSchema };  