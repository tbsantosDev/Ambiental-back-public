import { sequelize } from '../database/index.js'
import { DataTypes, Deferrable, Model, Optional } from 'sequelize'
import { EnvironmentalLicense } from './EnvironmentalLicense.js'

export interface ConditioningInterface {
  id: number
  company: string
  description: Text,
  term: number,
  dueDate: Date,
  comments: Text,
  environmentalLicenseId: number
}

export interface ConditioningCreationAttributes extends Optional<ConditioningInterface, 'id'> {}

export interface ConditioningInstance extends Model<ConditioningInterface, ConditioningCreationAttributes>, ConditioningInterface {}

export const Conditioning = sequelize.define<ConditioningInstance, ConditioningInterface>('Conditioning', {
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
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  term: {
    type: DataTypes.INTEGER
  },
  dueDate: {
    type: DataTypes.DATEONLY
  },
  comments: {
    type: DataTypes.TEXT
  },
  environmentalLicenseId: {
    allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'environmental_licenses', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
  }
})
