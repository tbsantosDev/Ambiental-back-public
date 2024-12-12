import AdminJs, { ComponentLoader } from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { sequelize } from '../database/index.js'
import { adminJsResources } from './resources/index.js'
import bcrypt from 'bcrypt'
import { User } from '../models/User.js'
import { locales } from './locale.js'
import { Components, componentLoader } from './components/component.js'
import { dashboardHandler } from './dashboard.js'
import { ADMINJS_COOKIE_PASSWORD } from '../config/environment.js'
import session from 'express-session'
import connectSession from 'connect-session-sequelize'

const SequelizeStore = connectSession(session.Store)
const store = new SequelizeStore({db: sequelize})
store.sync()


AdminJs.registerAdapter(AdminJsSequelize)


export const adminJs = new AdminJs({
  databases: [sequelize],
  componentLoader,
  resources: adminJsResources,
  rootPath: '/admin',
  locale: locales,
  dashboard: {
    component: Components.Dashboard,
    handler: dashboardHandler
  },
  branding: {
    companyName: 'Administração',
    favicon: '/seuicone',
    logo: false,
    withMadeWithLove: false,
    theme: {
      colors: {
        primary100: '#006400',
	      primary80: '#008000',
	      primary60: '#008000',
	      primary40: '#228B22',
		    primary20: '#228B22',
      }
    }
  }
})


export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } })

    if (user && user.role === 'admin') {
      const matched = await bcrypt.compare(password, user.password)

      if (matched) {
        return user
      }
    }

    return false
  },
  cookiePassword: ADMINJS_COOKIE_PASSWORD
}, null, {
	resave: false,
	saveUninitialized: false,
  store: store,
  secret: ADMINJS_COOKIE_PASSWORD
})

adminJs.watch()
