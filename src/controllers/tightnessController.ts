import { Request, Response } from "express";
import { tightnessService } from "../services/tightnessService.js";

export let tightnessToOver: any = []

export const tightnessController = {
    //GET /tightness
    index: async (req: Request, res: Response) => {

        try {
            const findTightness = await tightnessService.findAll()
            return res.json(findTightness)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
              }
        }
    },

    //GET /tightnessToOvercome
    over: async (req: Request, res: Response) => {
        try {
            const tightnessToOvercome = await tightnessService.findTightnessToOvercome()
            return res.json(tightnessToOvercome)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }

    }
}