const Project = require('../models/projectModel');

createProject = (req, res) => {
    const project = req.body;
    const projectObj = Object.keys(project);
    // checks to see if anything is sent with project
    if (projectObj.length) {
        const newProject = new Project();
        projectObj.forEach(e => newProject[e] = project[e]);
        newProject.save()
            .then(project => {
                res.status(200).send(project);
            })
            .catch(err => res.status(500).send({ 'error saving project': err }));
    } else res.status(500).send('please send a project with valid values');
};

module.exports = {
    createProject,
}