import { sequelize } from '../database/index.js'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Extinguisher {
  id: number
  company: string
  exchangeDate: Date,
  dueDate: Date,
  comments: Text,
  companyId: number
}

export interface ExtinguisherCreationAttributes extends Optional<Extinguisher, 'id'> {}

export interface ExtinguisherInstance extends Model<Extinguisher, ExtinguisherCreationAttributes>, Extinguisher {}

export const Extinguisher = sequelize.define<ExtinguisherInstance, Extinguisher>('Extinguisher', {
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
  exchangeDate: {
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