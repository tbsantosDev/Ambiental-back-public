import { EnvironmentalLicense } from "../models/index.js";

export interface environmentalInterface {
    company: string
    number_of_days: string
}


export const environmentalLicenseService = {
    findAll: async () => {

        const environmentalLicenses = await EnvironmentalLicense.findAll({
            attributes: ['id', 'company', 'term', 'dueDate', 'comments', 'companyId'],
        })
        return environmentalLicenses
    },

    findEnvironmentalLicensesToOvercome: async () => {
        
        const environmentalToOvercome = await EnvironmentalLicense.sequelize?.query(
            `SELECT
            environmental_licenses.id,
            environmental_licenses.company,
            environmental_licenses.term,
            environmental_licenses.due_date,
            environmental_licenses.comments,
            environmental_licenses.due_date - CURRENT_DATE AS number_of_days
            FROM
            environmental_licenses
            WHERE
            environmental_licenses.due_date - CURRENT_DATE < 180;
            `
        )
        if(environmentalToOvercome) {
            const [result, metaData] = environmentalToOvercome
            return result
        } else {
            return null
        }
    },
    findByIdWithConditioning: async (id: string) => {

        const environmentalLicenseWithConditioning = await EnvironmentalLicense.findByPk(id, {
            attributes: ['id', 'company'],
            include: {
                association: 'conditionings',
                attributes: ['id', 'company','term', ['due_date', 'dueDate'], 'comments']
            }
        })
        return environmentalLicenseWithConditioning
    }
}