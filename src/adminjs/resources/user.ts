import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs";

export const userResourceOptions: ResourceOptions = {
  navigation: 'administration',
  properties: {
    password: {
      type: 'password'
    },
    role: {
      availableValues: [
        { value: 'admin', label: 'Administrador' },
        { value: 'user', label: 'Usuário Padrão' }
      ]
    }
  },
  editProperties: [
    'name',
    'email',
    'password',
    'role'
  ],
  filterProperties: [
    'name',
    'email',
    'role',
  ],
  listProperties: [
    'id',
    'name',
    'email',
    'role'
  ],
  showProperties: [
    'id',
    'name',
    'email',
    'password',
    'email',
    'role',
    'createdAt',
    'updatedAt'
  ],
}


export const userResourceFeatures = (
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