import { sequelize } from '../database/index.js'
import { DataTypes, Model, Optional } from 'sequelize'

export interface EnvironmentalLicenseInterface {
  id: number
  company: string
  term: number
  dueDate: Date
  comments: string
  companyId: number
}

export interface EnvironmentalLicenseCreationAttributes extends Optional<EnvironmentalLicenseInterface, 'id' | 'company' | 'term' > {}

export interface EnvironmentalLicenseInstance extends Model<EnvironmentalLicenseInterface, EnvironmentalLicenseCreationAttributes>, EnvironmentalLicenseInterface {}

export const EnvironmentalLicense = sequelize.define<EnvironmentalLicenseInstance, EnvironmentalLicenseInterface>('EnvironmentalLicense', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  company: {
    allowNull: false,
    type: DataTypes.STRING
  },
  term: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  dueDate: {
    allowNull: false,
    type: DataTypes.DATEONLY
  },
  comments: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  companyId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'companies', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
})

/* await sequelize.sync({ alter: true }); */