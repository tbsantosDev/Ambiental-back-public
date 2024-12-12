import { sequelize } from '../database/index.js'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Tightness {
  id: number
  company: string
  description: Text,
  term: number,
  dueDate: Date,
  comments: Text,
  companyId: number
}

export interface TightnessCreationAttributes extends Optional<Tightness, 'id'> {}

export interface TightnessInstance extends Model<Tightness, TightnessCreationAttributes>, Tightness {}

export const Tightness = sequelize.define<TightnessInstance, Tightness>('Tightness', {
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
    allowNull: false,
    type: DataTypes.INTEGER
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