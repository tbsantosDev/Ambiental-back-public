import { Request, Response } from "express";
import { dtrpLwartService } from "../services/dtrpLwartService.js";

export const dtrpLwartsController = {
  //GET /dtrplwart
  index: async (req: Request, res: Response) => {

    try {
      const findDtrpLwartPaginated = await dtrpLwartService.findAll();
      return res.json(findDtrpLwartPaginated);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /dtrplwartToOvercome
  over: async (req: Request, res: Response) => {

    try {
        const dtrpLwartToOvercome = await dtrpLwartService.findDtrpLwartToOvercome()
        return res.json(dtrpLwartToOvercome)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message });
        }
    }
  }
};
