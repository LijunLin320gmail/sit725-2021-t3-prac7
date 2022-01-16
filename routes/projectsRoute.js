let express = require("express");
let router = express.Router();



router.get('/', (req, res) => {
    Controllers.projectsController.getProjects(res);

    // call  from controller
    //getdata(res)
    res.send("this's worked")

})

router.post('/', (req, res) => {
    res.send("this's worked")
})

router.delete('/', (req, res) => {
    res.send("this's worked")

})
router.put('/', (req, res) => {
    res.send("this's worked")

})
module.exports = router;