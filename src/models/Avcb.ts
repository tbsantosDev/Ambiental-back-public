import { sequelize } from '../database/index.js'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Avcb {
  id: number
  company: string
  term: number,
  dueDate: Date,
  email: string,
  comments: Text,
  companyId: number
}

export interface AvcbCreationAttributes extends Optional<Avcb, 'id'> {}

export interface AvcbInstance extends Model<Avcb, AvcbCreationAttributes>, Avcb {}

export const Avcb = sequelize.define<AvcbInstance, Avcb>('Avcb', {
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
  email: {
    allowNull: true,
    type: DataTypes.STRING
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