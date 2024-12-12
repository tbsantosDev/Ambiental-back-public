import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './../database/index.js';

export interface Log {
  id: number;
  action: string;
  resource: string;
  userId: number;
  recordId: number;
  recordTitle: string;
  difference: JSON;
};

export interface LogCreationAttributes extends Optional<Log, 'id' > {}

export interface LogInstance extends Model<Log, LogCreationAttributes>, Log {}

export const Log = sequelize.define<LogInstance, Log>('Log', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  action: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  resource: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
  },
  recordId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recordTitle: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  difference: {
    type: DataTypes.JSONB,
    allowNull: true,
  }
})
