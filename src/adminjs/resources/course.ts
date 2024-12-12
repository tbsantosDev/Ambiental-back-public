import importExportFeature from "@adminjs/import-export";
import loggerFeature from "@adminjs/logger";
import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs";
import path from "path";
import { fileURLToPath } from "url";

export const courseResourceOptions: ResourceOptions = {
  navigation: 'training',
  editProperties: ['name', 'synopsis', 'uploadThumbnail'],
  filterProperties: ['name', 'synopsis', 'thumbnailUrl', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'synopsis'],
  showProperties: ['id', 'name', 'synopsis', 'thumbnailUrl', 'createdAt', 'updatedAt']
}


const __filename = fileURLToPath ( import.meta.url )
const __dirname = path.dirname(__filename);

export const courseResourceFeatures = (
  componentLoader: ComponentLoader
): FeatureType[] => [
  uploadFileFeature({
    componentLoader,
    provider: {
      local: {
        bucket: path.join(__dirname, '../../../public'),
        opts: {
          baseUrl: '../../../public'
        }
      }
    },
    properties: {
      key: 'thumbnailUrl',
      file: 'uploadThumbnail'
    },
    uploadPath: (record, filename) => `thumbnails/course-${record.get('id')}/${filename}`,
  })
]