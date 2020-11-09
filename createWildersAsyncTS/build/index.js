"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// Import des Controllers
const wilder_1 = __importDefault(require("./controllers/wilder"));
const app = express_1.default();
mongoose_1.default
    .connect("mongodb://localhost:27017/createWilders", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
    useFindAndModify: false,
})
    .then(() => {
    console.log("Database connected !");
})
    .catch((err) => {
    console.error(err);
});
app.use(body_parser_1.default.json());
app.use(cors_1.default());
const errorHandler = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res);
        }
        catch ({ code, message, status }) {
            res.status(status || 500).json({
                code,
                message,
            });
        }
    };
};
app.post("/api/wilders", errorHandler(wilder_1.default.create));
app.patch("/api/wilders/:wilderID", errorHandler(wilder_1.default.update));
app.get("/api/wilders", errorHandler(wilder_1.default.getAll));
app.get("/api/wilders/:wilderID", errorHandler(wilder_1.default.getOne));
app.delete("/api/wilders/:wilderID", errorHandler(wilder_1.default.remove));
app.use("*", (req, res) => {
    console.log("test");
    res.status(404).json({
        error: "Not found",
    });
});
app.listen(3200, () => {
    console.log("Server launched");
});
//# sourceMappingURL=index.js.map