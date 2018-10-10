const { 
    createProject,
 } = require('../controllers');

module.exports = server => {
    server.route('/createProject').post(createProject);
}