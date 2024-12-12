import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams.js";
import { avcbService } from "../services/avcbService.js";


export const avcbController = {
    //GET /avcb
    index: async (req: Request, res: Response) => {

        try {
            const findAvcbPaginated = await avcbService.findAll()
            return res.json(findAvcbPaginated)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
              }
        }
    },

    //GET /avcbToOvercome
    over: async (req: Request, res: Response) => {

        try {
            const avcbToOvercome = await avcbService.findAvcbToOvercome()
            return res.json(avcbToOvercome)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }
}