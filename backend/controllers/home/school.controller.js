const db = require("../../models"); // this is index.js
const Model = db.HomeSchoolSection;

const createHeroHomeSchool = async (req,res) =>{
    try{
        const image = req.file ? `/uploads/${req.file.filename}`: null;
        const item =  await Model.create({...req.body, image});
        res.status(201).json(item);

    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getAllHomeSchool = async (req,res) => {
    try{
        const items = await Model.findAll();
        res.json(items);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getHomeSchoolById = async (req,res) => {
    try{
        const item = await Model.findByPk(req.params.id);
        if(!item) return res.status(404).json({message: 'Not Found'});
        res.json(item);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const updateHomeSchool = async (req, res) =>{
    try{
        const item = await Model.findByPk(req.params.id);
        if(!item) return res.status(400).json({message: 'Not Found'});

        const image = req.file ? `/uploads/${req.file.filename}` : item.image;
        await item.update({...req.body, image});
        res.json(item);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const deleteHomeSchool = async (req, res) => {
    try{
        const item = await Model.findByPk(req.params.id);
        if(!item) return res.status(400).json({message: 'not Found'});
        await item.destroy();
        res.json({message: 'Deleted successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {createHeroHomeSchool, getAllHomeSchool, getHomeSchoolById, updateHomeSchool, deleteHomeSchool};