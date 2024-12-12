import express from 'express'
import { avcbController } from './controllers/avcbsController.js'
import { companiesController } from './controllers/companiesController.js'
import { environmentalLicensesController } from './controllers/environmentalLicensesController.js'
import { conditioningsController } from './controllers/conditioningsController.js'
import { dtrpLwartsController } from './controllers/dtrpLwartsController.js'
import { dtrpCtrController } from './controllers/dtrpCtrController.js'
import { tightnessController } from './controllers/tightnessController.js'
import { brigadeController } from './controllers/brigadesController.js'
import { certificateController } from './controllers/certificatesController.js'
import { coursesController } from './controllers/coursesController.js'
import { episodesController } from './controllers/episodesController.js'
import { extinguisherController } from './controllers/extinguishersController.js'
import { LoginController } from './controllers/loginController.js'
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth.js'

const router = express.Router()
router.use(express.json())

router.post('/login', LoginController.login)
router.get('/currentUser', ensureAuth, LoginController.index)

router.get('/companies', ensureAuth, companiesController.index)

router.get('/environmentalLicenses', ensureAuth, environmentalLicensesController.index)
router.get('/environmentalToOvercome', ensureAuth, environmentalLicensesController.over)
router.get('/environmentalLicenses/:id', ensureAuth, environmentalLicensesController.show)

router.get('/conditionings', ensureAuth, conditioningsController.index)
router.get('/conditioningsToOvercome', ensureAuth, conditioningsController.over)

router.get('/dtrplwart', ensureAuth, dtrpLwartsController.index)
router.get('/dtrplwartToOvercome', ensureAuth, dtrpLwartsController.over)

router.get('/dtrpctr', ensureAuth, dtrpCtrController.index)
router.get('/dtrpctrToOvercome', ensureAuth, dtrpCtrController.over)

router.get('/tightness', ensureAuth, tightnessController.index)
router.get('/tightnessToOvercome', ensureAuth, tightnessController.over)

router.get('/brigade', ensureAuth, brigadeController.index)
router.get('/brigadeToOvercome', ensureAuth, brigadeController.over)

router.get('/extinguisher', ensureAuth, extinguisherController.index)
router.get('/extinguisherToOvercome', ensureAuth, extinguisherController.over)

router.get('/avcb', ensureAuth, avcbController.index)
router.get('/avcbToOvercome', ensureAuth, avcbController.over)

router.get('/certificate', ensureAuth, certificateController.index)
router.get('/certificateToOvercome', ensureAuth, certificateController.over)

router.get('/courses', ensureAuth, coursesController.index)
router.get('/courses/:id', ensureAuth, coursesController.show)


router.get('/episodes/search', ensureAuth, episodesController.search)
router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream)


export { router }