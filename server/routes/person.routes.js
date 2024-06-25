const { Router } = require("express")
const PersonController = require("../controller/person.controller");

const router = new Router();

router.post("/person", PersonController.createPerson);
router.get("/person", PersonController.getPersons);
router.get("/person/:id", PersonController.getOnePerson);
router.put("/person", PersonController.updatePerson);
router.delete("/person/:id", PersonController.deletePerson);


module.exports = router;