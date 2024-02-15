// monsterController.js
import Monster from "./monsterModel.js";

// Controller functions for CRUD operations
export const getAllMonsters = async (req, res, next) => {
  try {
    const monsters = await Monster.find();
    res.json(monsters);
  } catch (err) {
    next(err);
  }
};

export const getMonsterById = async (req, res, next) => {
  try {
    const monster = await Monster.findById(req.params.id);
    if (!monster) {
      res.status(404).json({ message: "Monster not found" });
    } else {
      res.json(monster);
    }
  } catch (err) {
    next(err);
  }
};

export const createMonster = async (req, res, next) => {
  try {
    const monster = new Monster(req.body);
    await monster.save();
    res.status(201).json(monster);
  } catch (err) {
    next(err);
  }
};

export const updateMonster = async (req, res, next) => {
  try {
    const monster = await Monster.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!monster) {
      res.status(404).json({ message: "Monster not found" });
    } else {
      res.json(monster);
    }
  } catch (err) {
    next(err);
  }
};

export const deleteMonster = async (req, res, next) => {
  try {
    const monster = await Monster.findByIdAndDelete(req.params.id);
    if (!monster) {
      res.status(404).json({ message: "Monster not found" });
    } else {
      res.json({ message: "Monster deleted successfully" });
    }
  } catch (err) {
    next(err);
  }
};
