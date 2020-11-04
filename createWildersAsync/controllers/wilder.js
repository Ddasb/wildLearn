const WilderModel = require("../models/wilder");

module.exports = {
    create: async (req, res, next) => {
        let datas = req.body;
        await WilderModel.init();
        const firstWilder = new WilderModel(datas);
        const result = await resFirstWilder.save();
    },

    update: async (req, res) => {
        let wilderID = req.params.wilderID;
        let datas = req.body;
        let update = datas;
        await WilderModel.findOneAndUpdate({ "_id": wilderID}, update, {new: true});
    },

    getAll: async (req, res) => {
        const result = await WilderModel.find();
        res.json(result);
    },

    getOne: async (req, res) => {
        const result = await WilderModel.find({ "_id": wilderID});
        res.json(result);
    },

    remove: async (req, res) => {
        let wilderID = req.params.wilderID;
        const result = await WilderModel.deleteMany({ "_id": wilderID});
        res.json(result);
    }
}