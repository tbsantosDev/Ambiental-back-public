
import { User } from "../models/index.js"

export interface userInterface {
    name: string
    email: string
}


export const userService = {
    findByEmail: async (email: string) => {
        const user = await User.findOne({
            where: {
                email: email
            }
        })

        return user
    },
    findAll: async () => {
        const user = await User.findAll({
            where: {
                role: 'admin'
            }
        })
        return user
    }
}

