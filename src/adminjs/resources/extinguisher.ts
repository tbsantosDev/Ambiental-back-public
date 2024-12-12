import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs";

export const extinguisherResourceOptions: ResourceOptions = {
  navigation: 'register',
  properties: {
    dueDate: {
      type: 'date',
    },
    exchangeDate: {
        type: 'date'
    }
  },
  editProperties: ['company', 'exchangeDate', 'dueDate', 'comments', 'companyId' ],
  filterProperties: ['company', 'exchangeDate', 'dueDate', 'comments', 'companyId' ],
  listProperties: ['id', 'company', 'exchangeDate', 'dueDate', 'comments'],
  showProperties: ['id', 'company', 'exchangeDate', 'dueDate', 'comments', 'companyId', 'createdAt', 'updatedAt']
}


export const extinguisherResourceFeatures = (
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