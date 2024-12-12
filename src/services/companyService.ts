import { Company } from "../models/index.js";

export const companyService = {
  findAll: async () => {

    const company = await Company.findAll({
      attributes: ["id", "name", "cnpj"],

    });
    return company
  },
};
