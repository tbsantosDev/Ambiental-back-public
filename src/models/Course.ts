import { sequelize } from '../database/index.js'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Course {
  id: number
  name: string
  synopsis: string
  thumbnailUrl: string
}

export interface CourseCreationAttributes extends Optional<Course, 'id' > {}

export interface CourseInstance extends Model<Course, CourseCreationAttributes>, Course {}

export const Course = sequelize.define<CourseInstance, Course>('Course', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  synopsis: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  thumbnailUrl: {
    type: DataTypes.STRING
  }
})