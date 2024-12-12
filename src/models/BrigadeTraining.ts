import { sequelize } from '../database/index.js'
import { DataTypes, Model, Optional } from 'sequelize'

export interface BrigadeTraining {
  id: number
  company: string
  trainingDate: Date,
  dueDate: Date,
  comments: Text,
  companyId: number
}

export interface BrigadeTrainingCreationAttributes extends Optional<BrigadeTraining, 'id'> {}

export interface BrigadeTrainingInstance extends Model<BrigadeTraining, BrigadeTrainingCreationAttributes>, BrigadeTraining {}

export const BrigadeTraining = sequelize.define<BrigadeTrainingInstance, BrigadeTraining>('BrigadeTraining', {
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
  trainingDate: {
    allowNull: false,
    type: DataTypes.DATEONLY
  },
  dueDate: {
    allowNull: false,
    type: DataTypes.DATEONLY
  },
  comments: {
    type: DataTypes.TEXT
  },
  companyId: {
    allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'companies', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
  }
})