import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams.js";
import { companyService } from "../services/companyService.js";

export const companiesController = {
  index: async (req: Request, res: Response) => {

    try {
      const companies = await companyService.findAll()
      return res.json(companies)
      
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
