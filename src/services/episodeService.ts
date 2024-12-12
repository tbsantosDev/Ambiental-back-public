import { Op } from "sequelize"
import { Episode } from "../models/index.js"


export const episodeService = {
    findByName: async (name: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage

        const { count, rows } = await Episode.findAndCountAll({
            attributes: ['id', 'name', 'synopsis', 'order', ['video_url', 'videoUrl'], ['seconds_long', 'secondsLong'], ['course_id', 'courseId']],
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            limit: perPage,
            offset
        })
        return {
            episodes: rows,
            page,
            perPage,
            total: count
        }
    }
}