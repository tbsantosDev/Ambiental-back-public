import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs";

export const brigadeTrainingResourceOptions: ResourceOptions = {
  navigation: 'register',
  properties: {
    dueDate: {
      type: 'date',
    },
    trainingDate: {
        type: 'date'
    }
  },
  editProperties: ['company', 'trainingDate', 'dueDate', 'comments', 'companyId' ],
  filterProperties: ['company', 'trainingDate', 'dueDate', 'comments', 'companyId' ],
  listProperties: ['id', 'company', 'trainingDate', 'dueDate', 'comments'],
  showProperties: ['id', 'company', 'trainingDate', 'dueDate', 'comments', 'companyId', 'createdAt', 'updatedAt']
}


export const brigadeTrainingResourceFeatures = (
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