import { Request, Response } from "express";
import { episodeService } from "../services/episodeService.js";
import { getPaginationParams } from "../helpers/getPaginationParams.js";
import path from "path";
import fs from 'fs'
import { fileURLToPath } from "url";

const __filename = fileURLToPath ( import.meta.url )
const __dirname = path.dirname(__filename);


export const episodesController = {
    search: async (req: Request, res: Response) => {
        const { name } = req.query
        const [page, perPage] = getPaginationParams(req.query)

        try {
            if(typeof name !== 'string') throw new Error('name param must be type string')
            const episodes = await episodeService.findByName(name, page, perPage)
        return res.json(episodes)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
              }
        }
    },

    //GET /episodes/stream
    stream: async (req: Request, res: Response) => {
        const { videoUrl }  = req.query

        try {
            if(typeof videoUrl !== 'string') {
                throw new Error('videoUrl deve ser do tipo \'string\'')
            }

            const filePath = path.join(__dirname, '../../uploads', videoUrl)
            const fileStat = fs.statSync(filePath)

            const range = req.headers.range

            if(range) {
                const parts = range.replace(/bytes=/, '').split('-')

                const start = parseInt(parts[0], 10)
                const end = parts[1] ? parseInt(parts[1], 10) : fileStat.size - 1

                const chunkSize = (end - start) + 1

                const file = fs.createReadStream(filePath, { start, end })

                const head = {
                    'Content-Range': `bytes ${start}-${end}/${fileStat.size}`,
                    'Accept-Ranges': 'bytes',
                    'Content-Length': chunkSize,
                    'Content-Type': 'video/mp4',
                }

                res.writeHead(206, head)
                file.pipe(res)
            } else {
                const head = {
                    'Content-Length': fileStat.size,
                    'Content-Type': 'video/mp4',
                  }
          
                  res.writeHead(200, head)
          
                  fs.createReadStream(filePath).pipe(res)
            }
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
              }
        }
    } 
}