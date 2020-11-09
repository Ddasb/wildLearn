import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Import des Controllers
import wilderController from "./controllers/wilder";

const app = express();

mongoose
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
  .catch((err: any) => {
    console.error(err);
  });

app.use(bodyParser.json());
app.use(cors());

const errorHandler = (
  controller: (req: Request, res: Response) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch ({ code, message, status }) {
      res.status(status || 500).json({
        code,
        message,
      });
    }
  };
};

app.post("/api/wilders", errorHandler(wilderController.create));
app.patch("/api/wilders/:wilderID", errorHandler(wilderController.update));
app.get("/api/wilders", errorHandler(wilderController.getAll));
app.get("/api/wilders/:wilderID", errorHandler(wilderController.getOne));
app.delete("/api/wilders/:wilderID", errorHandler(wilderController.remove));

app.use("*", (req: Request, res: Response) => {
  console.log("test");
  res.status(404).json({
    error: "Not found",
  });
});

app.listen(3200, () => {
  console.log("Server launched");
});
