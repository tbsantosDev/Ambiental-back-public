import { Request, Response } from "express";
import { dtrpCtrService } from "../services/dtrpCtrService.js";


export const dtrpCtrController = {
    //GET /dtrpctr
    index: async (req: Request, res: Response) => {
  
      try {
        const findDtrpCtr = await dtrpCtrService.findAll();
        return res.json(findDtrpCtr);
      } catch (err) {
        if (err instanceof Error) {
          return res.status(400).json({ message: err.message });
        }
      }
    },
  
    //GET /dtrpctrToOvercome
    over: async (req: Request, res: Response) => {
  
      try {
          const dtrpCtrToOvercome = await dtrpCtrService.findDtrpCtrToOvercome()
          return res.json(dtrpCtrToOvercome)
      } catch (err) {
          if (err instanceof Error) {
              return res.status(400).json({ message: err.message });
          }
      }
    }
  };
  