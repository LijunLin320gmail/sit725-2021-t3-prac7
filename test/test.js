const expect = require("chai").expect;
const request = require("request");



describe("add two number", ()=> {
    const url = "http://localhost:8085/addNumber/2/3";
    it("request return status code 200",(done)=>{
        request(url, (err,res,body) =>{
            expect(res.statusCode).to.less(200)
            done();
        

    });
});


it("request return status code 200 within the message body",(done)=>{
    request(url, (err,res,body) =>{
        body = JSON.parse(body);
        expect(res.statusCode).to.equal(200)
        done();
    

});
});

it("request return number as a result in the body",(done)=>{
    request(url, (err,res,body) =>{
        body = JSON.parse(body);
        expect(res.statusCode).to.be.(200)
        done();
    

});
});

describe("add two number", ()=> {
    const url = "http://localhost:8085/addNumber/x/y";
    it("request return status code 200",(done)=>{
        request(url, (err,res,body) =>{
            expect(res.statusCode).to.equal(200)
            done();
        

    });
});



it("request return status code 200",(done)=>{
    request(url, (err,res,body) =>{
        body = JSON.parse(body);
        expect(body.err).to.not.equal(200)
        done();
    

});
});



