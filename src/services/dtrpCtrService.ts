import { DtrpCtr } from "../models/index.js";


export interface dtrpCtrInterface {
    company: string
    number_of_days: string
}


export const dtrpCtrService = {
    findAll: async () => {
        const ctr = await DtrpCtr.findAll({
            attributes: ['id', 'company', 'term', 'dueDate', 'comments'],
        })
        return ctr
    },

    findDtrpCtrToOvercome: async () => {

        const dtrpToOvercome = await DtrpCtr.sequelize?.query(
            `SELECT
            dtrp_ctrs.id,
            dtrp_ctrs.company,
            dtrp_ctrs.term,
            dtrp_ctrs.due_date,
            dtrp_ctrs.comments,
            dtrp_ctrs.due_date - CURRENT_DATE AS number_of_days
            FROM
            dtrp_ctrs
            WHERE
            dtrp_ctrs.due_date - CURRENT_DATE < 60;
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