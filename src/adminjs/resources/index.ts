import { ResourceWithOptions, ComponentLoader } from "adminjs";
import { Company } from "../../models/Company.js";
import { EnvironmentalLicense } from "../../models/EnvironmentalLicense.js";
import { companyResourceFeatures, companyResourceOptions } from "./company.js";
import { environmentalLicenseResourceFeatures, environmentalLicenseResourceOptions } from "./environmentalLicense.js";
import { Conditioning } from "../../models/Conditioning.js";
import { conditioningResourceFeatures, conditioningResourceOptions } from "./conditioning.js";
import { User } from "../../models/User.js";
import { userResourceFeatures, userResourceOptions } from "./user.js";
import logResourceOptions, { logResourceFeatures } from './log.js'
import { DtrpLwart } from "../../models/DtrpLwart.js";
import { dtrpLwartResourceFeatures, dtrpLwartResourceOptions } from "./dtrpLwart.js";
import { DtrpCtr } from "../../models/DtrpCtr.js";
import { dtrpCtrResourceFeatures, dtrpCtrResourceOptions } from "./dtrpCtr.js";
import { Tightness } from "../../models/Tighness.js";
import { tightnessResourceFeatures, tightnessResourceOptions } from "./tightness.js";
import { BrigadeTraining } from "../../models/BrigadeTraining.js";
import { brigadeTrainingResourceFeatures, brigadeTrainingResourceOptions } from "./brigadeTraining.js";
import { Extinguisher } from "../../models/Extinguisher.js";
import { extinguisherResourceFeatures, extinguisherResourceOptions } from "./extinguisher.js";
import { Avcb } from "../../models/Avcb.js";
import { avcbResourceFeatures, avcbResourceOptions } from "./avcb.js";
import { CertificateCtr } from "../../models/CertificateCtr.js";
import { certificateCtrFeatures, certificateCtrResourceOptions } from "./certificateCtr.js";
import { Course } from "../../models/Course.js";
import { courseResourceFeatures, courseResourceOptions } from "./course.js";
import { Episode } from "../../models/Episode.js";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode.js";
import { componentLoader } from "../components/component.js";


export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Company,
    options: companyResourceOptions,
    features: companyResourceFeatures(componentLoader)
  },
  {
    resource: EnvironmentalLicense,
    options: environmentalLicenseResourceOptions,
    features: environmentalLicenseResourceFeatures(componentLoader)
  },
  {
    resource: Conditioning,
    options: conditioningResourceOptions,
    features: conditioningResourceFeatures(componentLoader)
  },
  {
    resource: DtrpLwart,
    options: dtrpLwartResourceOptions,
    features: dtrpLwartResourceFeatures(componentLoader)
  },
  {
    resource: DtrpCtr,
    options: dtrpCtrResourceOptions,
    features: dtrpCtrResourceFeatures(componentLoader)
  },
  {
    resource: Tightness,
    options: tightnessResourceOptions,
    features: tightnessResourceFeatures(componentLoader)
  },
  {
    resource: BrigadeTraining,
    options: brigadeTrainingResourceOptions,
    features: brigadeTrainingResourceFeatures(componentLoader)
  },
  {
    resource: Extinguisher,
    options: extinguisherResourceOptions,
    features: extinguisherResourceFeatures(componentLoader)
  },
  {
    resource: Avcb,
    options: avcbResourceOptions,
    features: avcbResourceFeatures(componentLoader)
  },
  {
    resource: CertificateCtr,
    options: certificateCtrResourceOptions,
    features: certificateCtrFeatures(componentLoader)
  },
  {
    resource: User,
    options: userResourceOptions,
    features: userResourceFeatures(componentLoader)
  },
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures(componentLoader)
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures(componentLoader)
  },
  {
    resource: logResourceOptions.resource,
    options: logResourceOptions.options,
    features: logResourceFeatures(componentLoader)
  },
];