import express from "express";
import {
  getAllMonsters,
  getMonsterById,
  createMonster,
  updateMonster,
  deleteMonster,
} from "./monsterController.js";
const router = express.Router();

// Routes
router.get("/", getAllMonsters);
router.get("/:id", getMonsterById);
router.post("/", createMonster);
router.put("/:id", updateMonster);
router.delete("/:id", deleteMonster);

export default router;
