// controllers/aboutus/hero.controller.js

const db = require('../../models');
const HeroSection = db.HeroSection;

console.log('HeroSection:', HeroSection); 


const createHero = async (req, res) => {
  try {
    const background_image = req.file ? `/uploads/${req.file.filename}` : null;
    const { title } = req.body;
    const hero = await HeroSection.create({ title, background_image });
    res.status(201).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllHeroes = async (req, res) => {
  console.log('getAllHeroes called');
  try {
    const heroes = await HeroSection.findAll();
    res.json(heroes);
  } catch (error) {
    console.error('getAllHeroes error:', error);
    res.status(500).json({ message: error.message });
  }
};

const getHeroById = async (req, res) => {
  try {
    const hero = await HeroSection.findByPk(req.params.id);
    if (!hero) return res.status(404).json({ message: 'Not found' });
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHero = async (req, res) => {
  try {
    const hero = await HeroSection.findByPk(req.params.id);
    if (!hero) return res.status(404).json({ message: 'Not found' });

    const background_image = req.file ? `/uploads/${req.file.filename}` : hero.background_image;
    await hero.update({ ...req.body, background_image });
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHero = async (req, res) => {
  try {
    const hero = await HeroSection.findByPk(req.params.id);
    if (!hero) return res.status(404).json({ message: 'Not found' });

    await hero.destroy();
    res.json({ message: 'Hero deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createHero, getAllHeroes, getHeroById, updateHero,deleteHero };
