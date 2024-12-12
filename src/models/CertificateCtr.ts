import { sequelize } from '../database/index.js'
import { DataTypes, Model, Optional } from 'sequelize'

export interface CertificateCtr {
  id: number
  company: string,
  term: number,
  dueDate: Date,
  comments: Text,
  companyId: number
}

export interface CertificateCtrCreationAttributes extends Optional<CertificateCtr, 'id'> {}

export interface CertificateCtrInstance extends Model<CertificateCtr, CertificateCtrCreationAttributes>, CertificateCtr {}

export const CertificateCtr = sequelize.define<CertificateCtrInstance, CertificateCtr>('CertificateCtr', {
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