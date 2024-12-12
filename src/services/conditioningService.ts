import { Conditioning } from "../models/index.js";

export interface conditioningsInterface {
    company: string
    number_of_days: string
}


export const conditioningService = {
    findAll: async () => {

        const conditionings = await Conditioning.findAll({
            attributes: ['id', 'company', 'description', 'term', 'dueDate', 'comments'],
        })
        return conditionings
    },

    findconditioningToOvercome: async () => {

        const conditionsToOvercome = await Conditioning.sequelize?.query(
            `SELECT
            conditionings.id,
            conditionings.company,
            conditionings.description,
            conditionings.term,
            conditionings.due_date,
            conditionings.comments,
            conditionings.due_date - CURRENT_DATE AS number_of_days
            FROM
            conditionings
            WHERE
            conditionings.due_date - CURRENT_DATE < 30;
            `
        )

        if(conditionsToOvercome) {
            const [result, metaData] = conditionsToOvercome
            return result
        } else {
            return null
        }
    },
}