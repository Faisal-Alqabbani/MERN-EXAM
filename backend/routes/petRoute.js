import express from "express";
const router = express.Router();
import {
  getAllPets,
  createPat,
  getPet,
  updatePet,
  deletePet,
  like,
} from "../controllers/petController.js";

router.get("/", getAllPets);
router.post("/", createPat);
router.get("/:id", getPet);
router.put("/:id/update", updatePet);
router.delete("/:id/delete", deletePet);
router.put("/:id/like", like);

export default router;
