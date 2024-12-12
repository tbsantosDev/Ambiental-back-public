import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs";

export const avcbResourceOptions: ResourceOptions = {
  navigation: 'register',
  properties: {
    dueDate: {
      type: 'date',
    },
  },
  editProperties: ['company', 'term', 'dueDate', 'comments', 'email', 'companyId' ],
  filterProperties: ['company', 'term', 'dueDate', 'comments', 'email', 'companyId' ],
  listProperties: ['id', 'company', 'term', 'dueDate', 'comments', 'email'],
  showProperties: ['id', 'company', 'term', 'dueDate', 'comments', 'email', 'companyId', 'createdAt', 'updatedAt']
}



export const avcbResourceFeatures = (
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