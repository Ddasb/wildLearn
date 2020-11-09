"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const wilder_1 = __importDefault(require("../models/wilder"));
module.exports = {
    create: async (req) => {
        const datas = req.body;
        await wilder_1.default.init();
        const createWilder = new wilder_1.default(datas);
        await createWilder.save();
    },
    update: async (req) => {
        const { wilderID } = req.params;
        const datas = req.body;
        const update = datas;
        await wilder_1.default.findOneAndUpdate({
            _id: wilderID,
        }, update, {
            new: true,
        });
    },
    getAll: async (req, res) => {
        const result = await wilder_1.default.find();
        res.json(result);
    },
    getOne: async (req, res) => {
        const { wilderID } = req.params;
        const result = await wilder_1.default.find({
            _id: wilderID,
        });
        res.json(result);
    },
    remove: async (req, res) => {
        const { wilderID } = req.params;
        const result = await wilder_1.default.deleteMany({
            _id: wilderID,
        });
        res.json(result);
    },
};
//# sourceMappingURL=wilder.js.map