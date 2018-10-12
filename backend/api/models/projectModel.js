const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProjectSchema = Schema({
    projectName: String,
    companyName: String,
    headline: String,
    html: Schema.Types.Mixed,
    css: Schema.Types.Mixed,
});

module.exports = mongoose.model('Project', ProjectSchema);