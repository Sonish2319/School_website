const db = require('../../models');
const HeroFunding = db.HeroFunding;

// const createHeroFunding = async (req, res) => {
//   try {
//     const background_image = req.file ? `/uploads/${req.file.filename}` : null;
//     const { title } = req.body;
//     const hero = await HeroFunding.create({ title, background_image });
//     res.status(201).json(hero);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const createHeroFunding = async (req, res) => {
  try {
    const background_image = req.file ? `/uploads/${req.file.filename}` : null;
    const item = await HeroFunding.create({ ...req.body, background_image });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllHeroFunding = async (req, res) => {
  try {
    const heroes = await HeroFunding.findAll();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHeroFundingById = async (req, res) => {
  try {
    const hero = await HeroFunding.findByPk(req.params.id);
    if (!hero) return res.status(404).json({ message: 'Not found' });
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const updateHeroFunding = async (req, res) => {
//   try {
//     const hero = await HeroFunding.findByPk(req.params.id);
//     if (!hero) return res.status(404).json({ message: 'Not found' });

//     const background_image = req.file ? `/uploads/${req.file.filename}` : hero.background_image;
//     await hero.update({ ...req.body, background_image });
//     res.json(hero);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const updateHeroFunding = async (req, res) => {
  try {
    const item = await HeroFunding.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });

    const background_image = req.file ? `/uploads/${req.file.filename}` : item.background_image;
    await item.update({ ...req.body, background_image });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteHeroFunding = async (req, res) => {
  try {
    const hero = await HeroFunding.findByPk(req.params.id);
    if (!hero) return res.status(404).json({ message: 'Not found' });

    await hero.destroy();
    res.json({ message: 'HeroFunding deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHeroFunding,
  getAllHeroFunding,
  getHeroFundingById,
  updateHeroFunding,
  deleteHeroFunding
};
