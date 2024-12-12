import { Avcb } from "../models/index.js"


export interface avcbInterface {
    company: string
    number_of_days: string
}

export const avcbService = {
    findAll: async () => {

        const  avcb = await Avcb.findAll({
            attributes: ['id', 'company', 'term', 'dueDate', 'email', 'comments'],
        })
        return avcb 
    },

    findAvcbToOvercome: async () => {

        const avcbToOvercome = await Avcb.sequelize?.query(
            `SELECT
            avcbs.id,
            avcbs.company,
            avcbs.term,
            avcbs.due_date,
            avcbs.email,
            avcbs.comments,
            avcbs.due_date - CURRENT_DATE AS number_of_days
            FROM
            avcbs
            WHERE
            avcbs.due_date - CURRENT_DATE < 60;
            `
        )
        if(avcbToOvercome) {
            const [result, metaData] = avcbToOvercome
            return result
        } else {
            return null
        }
    }
}