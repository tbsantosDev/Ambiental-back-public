import { CertificateCtr } from "../models/index.js"


export interface certificateInterface {
    company: string
    number_of_days: string
}


export const certificateService = {
    findAll: async () => {

        const certificate = await CertificateCtr.findAll({
            attributes: ['id', 'company', 'term', 'dueDate', 'comments'],
        })
        return certificate
    },

    findCertificateToOvercome: async () => {

        const certificateToOvercome = await CertificateCtr.sequelize?.query(
            `SELECT
            certificate_ctrs.id,
            certificate_ctrs.company,
            certificate_ctrs.term,
            certificate_ctrs.due_date,
            certificate_ctrs.comments,
            certificate_ctrs.due_date - CURRENT_DATE AS number_of_days
            FROM
            certificate_ctrs
            WHERE
            certificate_ctrs.due_date - CURRENT_DATE < 30;
            `
        )
        if(certificateToOvercome) {
            const [result, metaData] = certificateToOvercome
            return result
        } else {
            return null
        }
    }
}