import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from 'adminjs';

export const dtrpCtrResourceOptions: ResourceOptions = {
  navigation: 'register',
  properties: {
    dueDate: {
      type: 'date'
    },
  },
  editProperties: ['company', 'description', 'term', 'dueDate', 'comments', 'companyId' ],
  filterProperties: ['company', 'description', 'term', 'dueDate', 'comments', 'companyId' ],
  listProperties: ['id', 'company', 'description', 'term', 'dueDate', 'comments'],
  showProperties: ['id', 'company', 'description', 'term', 'dueDate', 'comments', 'companyId', 'createdAt', 'updatedAt']
}


export const dtrpCtrResourceFeatures = (
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