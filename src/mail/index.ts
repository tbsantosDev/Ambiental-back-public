import nodemailer from "nodemailer";
import { userInterface } from "../services/userService.js";
import { avcbInterface } from "../services/avcbService.js";
import { brigadeInterface } from "../services/brigadeService.js";
import { certificateInterface } from "../services/certificateService.js";
import { conditioningsInterface } from "../services/conditioningService.js";
import { dtrpCtrInterface } from "../services/dtrpCtrService.js";
import { dtrpLwartInterface } from "../services/dtrpLwartService.js";
import { environmentalInterface } from "../services/environmentalLicenseService.js";
import { extinguisherInterface } from "../services/extinguisherService.js";
import { tightnessInterface } from "../services/tightnessService.js";
import { User } from "../models/User.js";
import { Avcb } from "../models/Avcb.js";
import { BrigadeTraining } from "../models/BrigadeTraining.js";
import { CertificateCtr } from "../models/CertificateCtr.js";
import { Conditioning } from "../models/Conditioning.js";
import { DtrpCtr } from "../models/DtrpCtr.js";
import { DtrpLwart } from "../models/DtrpLwart.js";
import { EnvironmentalLicense } from "../models/EnvironmentalLicense.js";
import { Extinguisher } from "../models/Extinguisher.js";
import { Tightness } from "../models/Tighness.js";


let users: any[] = []
async function getUsers() {
  try {
    users = await User.findAll({
      where: {
        role: 'admin'
      }
    })
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let avcbsToOvercome: any[] = []
async function getAvcbs() {
  try {
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
      avcbsToOvercome = result
  } else {
      return null
  }
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let brigadesToOvercome: any[] = []
async function getBrigades() {
  try {
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
      brigadesToOvercome = result
    } else {
      return null
    }
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let certificatesToOvercome: any[] = []
async function getCertificates() {
  try {
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
      certificatesToOvercome = result
  } else {
      return null
  }
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let conditioningsToOvercome: any[] = []
async function getConditionings() {
  try {
    const conditionsToOvercome = await Conditioning.sequelize?.query(
      `SELECT
      conditionings.id,
      conditionings.company,
      conditionings.description,
      conditionings.term,
      conditionings.due_date,
      conditionings.comments,
      conditionings.due_date - CURRENT_DATE AS number_of_days
      FROM
      conditionings
      WHERE
      conditionings.due_date - CURRENT_DATE < 30;
      `
  )

  if(conditionsToOvercome) {
      const [result, metaData] = conditionsToOvercome
      conditioningsToOvercome = result
  } else {
      return null
  }
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let dtrpCtrToOvercome: any[] = []
async function getDtrpCtr() {
  try {
    const dtrpToOvercome = await DtrpCtr.sequelize?.query(
      `SELECT
      dtrp_ctrs.id,
      dtrp_ctrs.company,
      dtrp_ctrs.term,
      dtrp_ctrs.due_date,
      dtrp_ctrs.comments,
      dtrp_ctrs.due_date - CURRENT_DATE AS number_of_days
      FROM
      dtrp_ctrs
      WHERE
      dtrp_ctrs.due_date - CURRENT_DATE < 60;
      `
  )

  if(dtrpToOvercome) {
      const [result, metaData] = dtrpToOvercome
      dtrpCtrToOvercome = result
  } else {
      return null
  }
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let dtrpLwartToOvercome: any[] = []
async function getDtrpLwart() {
  try {
    const dtrpToOvercome = await DtrpLwart.sequelize?.query(
      `SELECT
      dtrp_lwarts.id,
      dtrp_lwarts.company,
      dtrp_lwarts.term,
      dtrp_lwarts.due_date,
      dtrp_lwarts.comments,
      dtrp_lwarts.due_date - CURRENT_DATE AS number_of_days
      FROM
      dtrp_lwarts
      WHERE
      dtrp_lwarts.due_date - CURRENT_DATE < 60;
      `
  )
  if(dtrpToOvercome) {
      const [result, metaData] = dtrpToOvercome
      dtrpLwartToOvercome = result
  } else {
      return null
  }
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let environmentalsToOvercome: any[] = []
async function getEnvironmental() {
  try {
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
      environmentalsToOvercome = result
  } else {
      return null
  }
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let extinguishersToOvercome: any = []
async function getExtinguisher() {
  try {
    const extinguisherToOvercome = await Extinguisher.sequelize?.query(
      `SELECT
      extinguishers.id,
      extinguishers.company,
      extinguishers.exchange_date,
      extinguishers.due_date,
      extinguishers.comments,
      extinguishers.due_date - CURRENT_DATE AS number_of_days
      FROM
      extinguishers
      WHERE
      extinguishers.due_date - CURRENT_DATE < 30;
      `
  )
  if(extinguisherToOvercome) {
      const [result, metadata] = extinguisherToOvercome
      extinguishersToOvercome = result
  } else {
      return null
  }
  } catch (error) {
    console.error('There is a error:', error);
  }
}

let tightnessesToOvercome: any = []
async function getTightness() {
  try {
    const tightnessToOvercome = await Tightness.sequelize?.query(
      `SELECT
      tightnesses.id,
      tightnesses.company,
      tightnesses.term,
      tightnesses.due_date,
      tightnesses.comments,
      tightnesses.due_date - CURRENT_DATE AS number_of_days
      FROM
      tightnesses
      WHERE
      tightnesses.due_date - CURRENT_DATE < 30;
      `
  )
  
  if(tightnessToOvercome) {
      const [result, metadata] = tightnessToOvercome
      tightnessesToOvercome = result
  } else {
      return null
  }
  } catch (error) {
    console.error('There is a error:', error);
  }
}


async function createAndSendEmail() {
  users.forEach((user: userInterface) => {
    let findAvcbs = "";
    avcbsToOvercome.forEach((avcb: avcbInterface) => {
      findAvcbs += `<p>Empresa: ${avcb.company} - Dias restantes: ${avcb.number_of_days}</p>`;
    });
  
    let findBrigades = "";
    brigadesToOvercome.forEach((brigade: brigadeInterface) => {
      findBrigades += `<p>Empresa: ${brigade.company} - Dias restantes: ${brigade.number_of_days}</p>`;
    });
  
    let findCertificates = "";
    certificatesToOvercome.forEach((certificate: certificateInterface) => {
      findCertificates += `<p>Empresa: ${certificate.company} - Dias restantes: ${certificate.number_of_days}</p>`;
    });
  
    let findConditionings = "";
    conditioningsToOvercome.forEach((conditionings: conditioningsInterface) => {
      findConditionings += `<p>Empresa: ${conditionings.company} - Dias restantes: ${conditionings.number_of_days}</p>`;
    });
  
    let findDtrpCtr = "";
    dtrpCtrToOvercome.forEach((dtrpCtr: dtrpCtrInterface) => {
      findDtrpCtr += `<p>Empresa: ${dtrpCtr.company} - Dias restantes: ${dtrpCtr.number_of_days}</p>`;
    });
  
    let findDtrpLwart = "";
    dtrpLwartToOvercome.forEach((dtrpLwart: dtrpLwartInterface) => {
      findDtrpLwart += `<p>Empresa: ${dtrpLwart.company} - Dias restantes: ${dtrpLwart.number_of_days}</p>`;
    });
  
    let findEnvironmental = "";
    environmentalsToOvercome.forEach((environmental: environmentalInterface) => {
      findEnvironmental += `<p>Empresa: ${environmental.company} - Dias restantes: ${environmental.number_of_days}</p>`;
    });
  
    let findExtinguisher = "";
    extinguishersToOvercome.forEach((extinguisher: extinguisherInterface) => {
      findExtinguisher += `<p>Empresa: ${extinguisher.company} - Dias restantes: ${extinguisher.number_of_days}</p>`;
    });
  
    let findTightness = "";
    tightnessesToOvercome.forEach((tightness: tightnessInterface) => {
      findTightness += `<p>Empresa: ${tightness.company} - Dias restantes: ${tightness.number_of_days}</p>`;
    });
  
    let transport = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "seuemail@hotmail.com",
        pass: "suasenha",
      },
    });

    let mailTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Sua empresa - Ambiental</title>
            </head>
            <body>
                <h1>Olá, ${user.name}</h1>
                <p>Nessa lista você pode conferir os documentos que estão para vencer.</p>
                <hr>
                <h3>AVCBS</h3>
                ${findAvcbs}
                <hr>
                <h3>Treinamento de Brigada</h3>
                ${findBrigades}
                <hr>
                <h3>Certificados de regularidade - (CTR)</h3>
                ${findCertificates}
                <hr>
                <h3>Condicionantes</h3>
                ${findConditionings}
                <hr>
                <h3>DTRP CTR</h3>
                ${findDtrpCtr}
                <hr>
                <h3>DTRP LWART</h3>
                ${findDtrpLwart}
                <hr>
                <h3>Licenças Ambientais</h3>
                ${findEnvironmental}
                <hr>
                <h3>Extintores</h3>
                ${findExtinguisher}
                <hr>
                <h3>Estanqueidade</h3>
                ${findTightness}
            </body>
            </html>
        `;

  
    transport
      .sendMail({
        from: "seuemail@hotmail.com",
        to: user.email,
        subject: "Sua empresa - Vencimentos",
        html: mailTemplate,
        text: "E-mail contendo lista de vencimentos",
      })
      .then(() => "E-mail enviado")
      .catch((err) => "deu erro");
  });
}






export default async function main() {
  await getUsers();
  await getAvcbs()
  await getBrigades()
  await getCertificates()
  await getConditionings()
  await getDtrpCtr()
  await getDtrpLwart()
  await getEnvironmental()
  await getExtinguisher()
  await getTightness()
  await createAndSendEmail();
}
/* 
main() */