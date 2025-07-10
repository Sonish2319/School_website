const { Slider } = require('../models');

exports.createSlider = async (req, res) => {
  try {
    const { title, status } = req.body;
    const imagePaths = req.files.map(file => file.path);

    const slider = await Slider.create({
      title,
      images: imagePaths,
      status: status === 'true' || status === true
    });

    res.status(201).json(slider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllSliders = async (req, res) => {
  const sliders = await Slider.findAll();
  res.json(sliders);
};

exports.getSliderById = async (req, res) => {
  const slider = await Slider.findByPk(req.params.id);
  slider ? res.json(slider) : res.status(404).json({ message: 'Not found' });
};

exports.updateSlider = async (req, res) => {
  try {
    const { title, status } = req.body;
    const slider = await Slider.findByPk(req.params.id);
    if (!slider) return res.status(404).json({ message: 'Not found' });

    if (req.files && req.files.length > 0) {
      slider.images = req.files.map(file => file.path);
    }
    slider.title = title || slider.title;
    slider.status = status === 'true' || status === true;

    await slider.save();
    res.json(slider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSlider = async (req, res) => {
  const deleted = await Slider.destroy({ where: { id: req.params.id } });
  deleted
    ? res.json({ message: 'Deleted' })
    : res.status(404).json({ message: 'Not found' });
};
