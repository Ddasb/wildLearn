import { Request, Response } from "express";

import WilderModel from "../models/wilder";

export = {
  create: async (req: Request): Promise<void> => {
    const datas = req.body;
    await WilderModel.init();
    const createWilder = new WilderModel(datas);
    await createWilder.save();
  },

  update: async (req: Request): Promise<void> => {
    const { wilderID } = req.params;
    const datas = req.body;
    const update = datas;
    await WilderModel.findOneAndUpdate(
      {
        _id: wilderID,
      },
      update,
      {
        new: true,
      }
    );
  },

  getAll: async (req: Request, res: Response): Promise<void> => {
    const result = await WilderModel.find();
    res.json(result);
  },

  getOne: async (req: Request, res: Response): Promise<void> => {
    const { wilderID } = req.params;
    const result = await WilderModel.find({
      _id: wilderID,
    });
    res.json(result);
  },

  remove: async (req: Request, res: Response): Promise<void> => {
    const { wilderID } = req.params;
    const result = await WilderModel.deleteMany({
      _id: wilderID,
    });
    res.json(result);
  },
};
