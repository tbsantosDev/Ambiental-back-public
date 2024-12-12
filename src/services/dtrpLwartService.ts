import { DtrpLwart } from "../models/index.js";

export interface dtrpLwartInterface {
    company: string
    number_of_days: string
}

export const dtrpLwartService = {
    findAll: async () => {

        const lwart = await DtrpLwart.findAll({
            attributes: ['id', 'company', 'term', 'dueDate', 'comments'],
        })
        return lwart
    },

    findDtrpLwartToOvercome: async () => {

        const dtrpToOvercome = await DtrpLwart.sequelize?.query(
            `SELECT
            dtrp_lwarts.id,
            dtrp_lwarts.company,
            dtrp_lwarts.term,
            dtrp_lwarts.due_date,
            dtrp_lwarts.comments,
            dtrp_lwarts.due_date - CURRENT_DATE AS number_of_days
            FROM
            dtrp_lwarts
            WHERE
            dtrp_lwarts.due_date - CURRENT_DATE < 60;
            `
        )
        if(dtrpToOvercome) {
            const [result, metaData] = dtrpToOvercome
            return result
        } else {
            return null
        }
    }
}