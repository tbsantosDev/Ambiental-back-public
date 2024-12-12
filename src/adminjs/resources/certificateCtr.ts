import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs";

export const certificateCtrResourceOptions: ResourceOptions = {
  navigation: 'register',
  properties: {
    dueDate: {
      type: 'date'
    },
  },
  editProperties: ['company', 'term', 'dueDate', 'comments', 'companyId' ],
  filterProperties: ['company', 'term', 'dueDate', 'comments', 'companyId' ],
  listProperties: ['id', 'company', 'term', 'dueDate', 'comments'],
  showProperties: ['id', 'company', 'term', 'dueDate', 'comments', 'companyId', 'createdAt', 'updatedAt']
}


export const certificateCtrFeatures = (
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