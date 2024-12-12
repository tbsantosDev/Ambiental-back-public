import { Company } from './Company.js';
import { EnvironmentalLicense } from './EnvironmentalLicense.js';
import { Conditioning } from './Conditioning.js';
import { User } from './User.js';
import { Log } from './Log.js';
import { DtrpLwart } from './DtrpLwart.js';
import { DtrpCtr } from './DtrpCtr.js';
import { Tightness } from './Tighness.js';
import { BrigadeTraining } from './BrigadeTraining.js';
import { Extinguisher } from './Extinguisher.js';
import { Avcb } from './Avcb.js';
import { CertificateCtr } from './CertificateCtr.js';
import { Course } from './Course.js';
import { Episode } from './Episode.js';


Company.hasOne(EnvironmentalLicense)
Company.hasOne(DtrpLwart)
Company.hasOne(DtrpCtr)
Company.hasOne(Tightness)
Company.hasOne(BrigadeTraining)
Company.hasOne(Extinguisher)
Company.hasOne(Avcb)
Company.hasOne(CertificateCtr)
Company.hasOne(Avcb)

EnvironmentalLicense.belongsTo(Company)
EnvironmentalLicense.hasMany(Conditioning, { as: 'conditionings' })


DtrpLwart.belongsTo(Company)
DtrpCtr.belongsTo(Company)
Tightness.belongsTo(Company)
BrigadeTraining.belongsTo(Company)
Extinguisher.belongsTo(Company)
Avcb.belongsTo(Company)
CertificateCtr.belongsTo(Company)
Conditioning.belongsTo(EnvironmentalLicense)

User.hasMany(Log)
Log.belongsTo(User)

Course.hasMany(Episode, { as: 'Episodes' })
Episode.belongsTo(Course)


export {
  Company,
  EnvironmentalLicense,
  Conditioning,
  DtrpLwart,
  DtrpCtr,
  Tightness,
  BrigadeTraining,
  Extinguisher,
  Avcb,
  CertificateCtr,
  User,
  Course,
  Episode,
  Log
}