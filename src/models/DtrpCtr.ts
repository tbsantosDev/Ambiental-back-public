import { sequelize } from '../database/index.js'
import { DataTypes, Model, Optional } from 'sequelize'

export interface DtrpCtr {
  id: number
  company: string
  description: Text,
  term: number,
  dueDate: Date,
  comments: Text,
  companyId: number
}

export interface DtrpCtrCreationAttributes extends Optional<DtrpCtr, 'id'> {}

export interface DtrpCtrInstance extends Model<DtrpCtr, DtrpCtrCreationAttributes>, DtrpCtr {}

export const DtrpCtr = sequelize.define<DtrpCtrInstance, DtrpCtr>('DtrpCtr', {
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
  companyId: {
    allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'companies', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
  }
})