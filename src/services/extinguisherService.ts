import { Extinguisher } from "../models/index.js"

export interface extinguisherInterface {
    company: string
    number_of_days: string
}

export const extinguisherService = {
    findAll: async () => {
        const extinguisher = await Extinguisher.findAll({
            attributes: ['id', 'company', 'exchangeDate', 'dueDate', 'comments'],
        })
        return extinguisher
    },

    findExtinguisherToOvercome: async () => {


        const extinguisherToOvercome = await Extinguisher.sequelize?.query(
            `SELECT
            extinguishers.id,
            extinguishers.company,
            extinguishers.exchange_date,
            extinguishers.due_date,
            extinguishers.comments,
            extinguishers.due_date - CURRENT_DATE AS number_of_days
            FROM
            extinguishers
            WHERE
            extinguishers.due_date - CURRENT_DATE < 30;
            `
        )
        if(extinguisherToOvercome) {
            const [result, metadata] = extinguisherToOvercome
            return result
        } else {
            return null
        }
    }
}