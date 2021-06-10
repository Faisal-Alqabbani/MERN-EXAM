import Pet from "../models/petModel.js";

const createPat = async (req, res) => {
  try {
    const { petName, petType, petDescription, skill1, skill2, skill3 } =
      req.body;

    const petExists = await Pet.findOne({ petName });
    if (petExists) {
      return res.status(401).json({ message: "this pet already exists" });
    }

    const pet = await Pet.create({
      petName,
      petType,
      petDescription,
      skill1,
      skill2,
      skill3,
    });
    res.status(201).json({ pet });
  } catch (err) {
    res.status(400).json(err);
  }
};
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find().sort("-petType");
    res.status(200).json({ pets });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json({ pet });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (pet.petName !== req.body.petName) {
      const pets = await Pet.find({ petName: req.body.petName });
      if (pets.length > 0) {
        return res
          .status(400)
          .json({ message: " this user has already exist" });
      }
    }
    const updatePet = await Pet.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true,
      }
    );
    res.status(200).json({ message: "pet has been updated" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const deletePet = async (req, res) => {
  try {
    await Pet.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Pet has been delteted" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const like = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (pet) {
      pet.likes = pet.likes + 1;
      await pet.save();
      res.status(200).json({ pet });
    } else {
      res.status(400).json({ message: "something went Wrong!" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
export { createPat, getPet, updatePet, deletePet, getAllPets, like };
