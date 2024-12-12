import 'dotenv/config.js'


import express from 'express'
import { sequelize } from './database/index.js'
import { adminJs, adminJsRouter } from './adminjs/index.js'
import { router } from './routes.js'
import cors from 'cors'
import {scheduleJob} from 'node-schedule'
import main from './mail/index.js'

scheduleJob('00 08 * * 1', () => { //Toda segunda-feira as 08:00 am
  console.log('E-mail semanal enviado.')
  main()
})


const app = express()

const PORT = process.env.port || 3002

app.use(cors())

app.use(express.static('public'))
app.use('../uploads', express.static('uploads'));
app.use(router)

app.use(adminJs.options.rootPath, adminJsRouter)

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull.')
  })

  console.log(`Server started successfuly at port ${PORT}.`)
})

