import { Request, Response } from "express";
import { extinguisherService } from "../services/extinguisherService.js";

export const extinguisherController = {
    //GET /extinguisher
    index: async (req: Request, res: Response) => {

        try {
            const findExtinguisherPaginated = await extinguisherService.findAll()
            return res.json(findExtinguisherPaginated)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
              }
        }
    },

    //GET /extinguisherToOvercome
    over: async (req: Request, res: Response) => {

        try {
            const extinguisherToOvercome = await extinguisherService.findExtinguisherToOvercome()
            return res.json(extinguisherToOvercome)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }
}