import { Request, Response } from "express";
import { environmentalLicenseService } from "../services/environmentalLicenseService.js";


export const environmentalLicensesController = {
  //GET /environmentalLiceses
  index: async (req: Request, res: Response) => {

    try {
      const paginatedEnvironmental =
        await environmentalLicenseService.findAll();
      return res.json(paginatedEnvironmental);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /environmentalLicencesToOvercome
  over: async (req: Request, res: Response) => {

    try {
      const environmentalLicensesToOvercome = await environmentalLicenseService.findEnvironmentalLicensesToOvercome();
      return res.json(environmentalLicensesToOvercome);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

    //GET /environmentalLicenses/:id
    show: async (req: Request, res: Response) => {
      const { id } = req.params;
  
      try {
          const licenseWithConditionings = await environmentalLicenseService.findByIdWithConditioning(id)
          return res.json(licenseWithConditionings)
      } catch (err) {
          if (err instanceof Error) {
              return res.status(400).json({ message: err.message });
            }
      }
    }
};
