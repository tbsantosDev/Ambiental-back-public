import { BrigadeTraining } from "../models/index.js";


export interface brigadeInterface {
    company: string
    number_of_days: string
}

export const brigadeService = {
    findAll: async () => {


        const brigade = await BrigadeTraining.findAll({
            attributes: ['id', 'company', 'trainingDate', 'dueDate', 'comments'],

        })
        return brigade
    },

    findBrigadeToOvercome: async () => {

        const brigadeToOvercome = await BrigadeTraining.sequelize?.query(
            `SELECT
            brigade_trainings.id,
            brigade_trainings.company,
            brigade_trainings.training_date,
            brigade_trainings.due_date,
            brigade_trainings.comments,
            brigade_trainings.due_date - brigade_trainings.training_date AS number_of_days
            FROM
            brigade_trainings
            WHERE
            brigade_trainings.due_date - brigade_trainings.training_date < 30;
            `
        )

        if(brigadeToOvercome) {
            const [result, metaData] = brigadeToOvercome
            return result
        } else {
            return null
        }
    }
}