import { Tightness } from "../models/index.js"

export interface tightnessInterface {
    company: string
    number_of_days: string
}


export const tightnessService = {
    findAll: async () => {

        const tightness = await Tightness.findAll({
            attributes: ['id', 'company', 'term', 'dueDate', 'comments'],
        })
        return tightness
    },

    findTightnessToOvercome: async () => {

        const tightnessToOvercome = await Tightness.sequelize?.query(
            `SELECT
            tightnesses.id,
            tightnesses.company,
            tightnesses.term,
            tightnesses.due_date,
            tightnesses.comments,
            tightnesses.due_date - CURRENT_DATE AS number_of_days
            FROM
            tightnesses
            WHERE
            tightnesses.due_date - CURRENT_DATE < 30;
            `
        )

        if(tightnessToOvercome) {
            const [result, metadata] = tightnessToOvercome
            return result
        } else {
            return null
        }
    }
}