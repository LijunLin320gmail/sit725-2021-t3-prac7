const expect = require("chai").expect;
const request = require("request");
const projectService = require("../services/projects")
const client = new

const dbo = require("../db/connect")
describe("get all projects",()=>{
const url = "http://localhost:8085/api/projects";

}
 before(() =>{
    if (dbo.getDB()){
        console.log("working");
    }
    dbo.getDBprojectsCollection= dbo.getDB().collection("projects");
    for (let index = 1; index<11; index++){
    projectCollection.inserOne({
        projectID:index,
        title:'test'+index,
        info:'test info'+index
        img:'img'+index
    })
}
})



it("request return status code 200",(done)=>{
    request(url, (err,res,body) =>{
        expect(res.statusCode).to.equal(200)
        done();
    

});
});

it("requests body type is equal to array",(done)=>{
    request(url, (err,res,body) =>{
        expect(body).to.be.a("array");
        done();
    

});
});






















