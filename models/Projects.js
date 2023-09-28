const mongoose = require('mongoose')

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
  },
  cancelled: {
    type: Boolean,
    required: false,
  },
  microsoftId: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Projects', ProjectsSchema)
