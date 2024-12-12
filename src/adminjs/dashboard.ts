import { Request, Response } from "express"
import { Avcb } from "../models/Avcb.js"
import { BrigadeTraining } from "../models/BrigadeTraining.js"
import { CertificateCtr } from "../models/CertificateCtr.js"
import { Company } from "../models/Company.js"
import { Conditioning } from "../models/Conditioning.js"
import { Course } from "../models/Course.js"
import { DtrpCtr } from "../models/DtrpCtr.js"
import { DtrpLwart } from "../models/DtrpLwart.js"
import { EnvironmentalLicense } from "../models/EnvironmentalLicense.js"
import { Extinguisher } from "../models/Extinguisher.js"
import { Tightness } from "../models/Tighness.js"

export const dashboardHandler = async (req: Request, res: Response) => {
    // Asynchronous code where you, e. g. fetch data from your database
    const avcbs = await Avcb.count()
    const brigades = await BrigadeTraining.count()
    const certificates = await CertificateCtr.count()
    const companies = await Company.count()
    const conditionings = await Conditioning.count()
    const courses = await Course.count()
    const dtrpctrs = await DtrpCtr.count()
    const dtrplwarts = await DtrpLwart.count()
    const environmentalLicenses = await EnvironmentalLicense.count()
    const extinguishers = await Extinguisher.count()
    const tightnesses = await Tightness.count()
    res.json({
        'Empresas': companies,
        'Licenças Ambientais': environmentalLicenses,
        'Condicionants': conditionings,
        'DTRP Lwart': dtrplwarts,
        'DTRP Ctr': dtrpctrs,
        'Teste de Estanqueidade': tightnesses,
        'Treinamento de Brigada': brigades,
        'Extintores': extinguishers,
        'Avcbs': avcbs,
        'Certificado de Regularidade': certificates,
        'Treinamentos': courses,
    })
  }