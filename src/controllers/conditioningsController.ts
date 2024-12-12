import { Request, Response } from "express";
import { conditioningService } from "../services/conditioningService.js";


export const conditioningsController = {
  //GET /conditionings
  index: async (req: Request, res: Response) => {

    try {
      const conditionings = await conditioningService.findAll();
      return res.json(conditionings);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /conditioningsToOverCome
  over: async (req: Request, res: Response) => {

    try {
      const conditioningsToOverCome = await conditioningService.findconditioningToOvercome();
      return res.json(conditioningsToOverCome);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

};