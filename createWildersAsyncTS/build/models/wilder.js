"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const WilderSchema = new Schema({
    identity: {
        name: { type: String, unique: true },
        firstName: { type: String, unique: true },
        age: { type: String },
    },
    skills: [
        {
            title: String,
            votes: Number,
        },
    ],
});
module.exports = mongoose_1.default.model("WilderModel", WilderSchema);
//# sourceMappingURL=wilder.js.map