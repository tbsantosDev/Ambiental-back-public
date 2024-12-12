import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs"

export const companyResourceOptions: ResourceOptions = {
  navigation: 'register',
  editProperties: ['name', 'cnpj'],
  filterProperties: ['name', 'cnpj'],
  listProperties: ['id', 'name', 'cnpj'],
  showProperties: ['id', 'name', 'cnpj', 'createdAt', 'updatedAt'],
}


export const companyResourceFeatures = (
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