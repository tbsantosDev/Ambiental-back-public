import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs";

export const environmentalLicenseResourceOptions: ResourceOptions = {
  navigation: 'register',
  properties: {
    dueDate: {
      type: 'date'
    },
  },
  editProperties: ['company', 'term', 'dueDate', 'comments', 'companyId'],
  filterProperties: ['company', 'term', 'comments', 'dueDate', 'companyId'],
  listProperties: ['id', 'company', 'term', 'dueDate'],
  showProperties: ['id', 'company', 'term', 'dueDate', 'comments', 'companyId', 'createdAt', 'updatedAt']
}



export const environmentalLicenseResourceFeatures = (
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