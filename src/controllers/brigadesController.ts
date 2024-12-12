import { Request, Response } from "express";
import { brigadeService } from "../services/brigadeService.js";


export const brigadeController = {
    //GET /brigade
    index: async (req: Request, res: Response) => {

        try {
            const findBrigade= await brigadeService.findAll()
            return res.json(findBrigade)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
              }
        }
    },

    //GET /brigadeToOvercome
    over: async (req: Request, res: Response) => {

        try {
            const brigadeToOvercome = await brigadeService.findBrigadeToOvercome()
            return res.json(brigadeToOvercome)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }
}