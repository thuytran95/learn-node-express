const express = require("express")
let {people} = require("../data")
const router = express.Router()
const {
  getPeople,
  creatPerson,
  createPersonPostman,
  updatePerson,
  deleterPerson,
} = require("../controllers/people")
 
// router.get("/", getPeople)
// router.post("/", creatPerson)
// router.post("/postman", createPersonPostman)
// router.put("/:id", updatePerson)
// router.delete("/:id", deleterPerson)

router.route('/').get(getPeople).post(creatPerson)
router.route("/postman").post(createPersonPostman)
router.route(':id').put(updatePerson).delete(deleterPerson)

module.exports = router
