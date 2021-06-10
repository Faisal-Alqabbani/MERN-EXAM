const express = require("express");

const router = express.Router();
const {
  getAllPets,
  createPat,
  getPet,
  updatePet,
  deletePet,
  like,
} = require("../controllers/petController");

router.get("/", getAllPets);
router.post("/", createPat);
router.get("/:id", getPet);
router.put("/:id/update", updatePet);
router.delete("/:id/delete", deletePet);
router.put("/:id/like", like);

module.exports = router;
