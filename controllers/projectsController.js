let Service = require("../services/projectsService");
let projectCollection;

setTimeout(() =>{
    projectCollection = DB.getDB().collection("projects");
},2000
);


const getProjects = (res) => {
        ProjectCollection.find().toArray(err,result) => {
        if (err)throw err;
        res.send(result);
    }   
}

const createProject = (project, res) => {
    ProjectCollection.find().toArray(err,result) => {
        if (err)throw err;
        res.send(result);
    Service.ProjectService.insertProject(project,res)
}

const deleteProject = (data, res) => {
    ProjectCollection.find().toArray(err,result) => {
        if (err)throw err;
        res.send(result);
    Service.ProjectService.insertProject(project,res)
}

module.exports = {
    getProjects, createProject,deleteProject
}