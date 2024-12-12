import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from 'adminjs'


export const conditioningResourceOptions: ResourceOptions = {
  navigation: 'register',
  properties: {
    dueDate: {
      type: 'date'
    },
  },
  editProperties: ['company', 'description', 'term', 'dueDate', 'comments', 'environmentalLicenseId' ],
  filterProperties: ['company', 'description', 'term', 'dueDate', 'comments', 'environmentalLicenseId' ],
  listProperties: ['id', 'company', 'description', 'term', 'dueDate', 'comments'],
  showProperties: ['id', 'company', 'description', 'term', 'dueDate', 'comments', 'environmentalLicenseId', 'createdAt', 'updatedAt']
}



export const conditioningResourceFeatures = (
  componentLoader: ComponentLoader
): FeatureType[] => [
  importExportFeature({
    componentLoader
  }),
  loggerFeature({
    componentLoader,
    propertiesMapping: {
      user: 'userId',
    },
    userIdAttribute: 'id',
  })
]