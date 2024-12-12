import { Request, Response } from "express";
import { certificateService } from "../services/certificateService.js";


export const certificateController = {
    //GET /certificate
    index: async (req: Request, res: Response) => {

        try {
            const findCertificate = await certificateService.findAll()
            return res.json(findCertificate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
              }
        }
    },

    //GET /certificateToOvercome
    over: async (req: Request, res: Response) => {

        try {
            const certificateToOvercome = await certificateService.findCertificateToOvercome()
            return res.json(certificateToOvercome)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }
}