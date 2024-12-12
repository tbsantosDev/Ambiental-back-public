import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import { ComponentLoader } from "adminjs";
import path from "path";
import { fileURLToPath } from 'url';

export const episodeResourceOptions: ResourceOptions = {
  navigation: 'training',
  editProperties: ['name', 'synopsis', 'courseId', 'order', 'uploadVideo', 'secondsLong'  ],
  filterProperties: ['name', 'synopsis', 'courseId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'courseId', 'order', 'secondsLong'],
  showProperties: ['id', 'name', 'synopsis', 'courseId', 'order', 'videoUrl', 'secondsLong', 'createdAt', 'updatedAt']
}

const __filename = fileURLToPath ( import.meta.url )
const __dirname = path.dirname(__filename);



export const episodeResourceFeatures = (
  componentLoader: ComponentLoader
): FeatureType[] => [
  uploadFileFeature({
    componentLoader,
    provider: {
      local: {
        bucket: path.join(__dirname, '../../../uploads'),
        opts: {
          baseUrl: '../../../uploads'
        },
      }
    },
    properties: {
      key: 'videoUrl',
      file: 'uploadVideo'
    },
    uploadPath: (record, filename) => `videos/course-${record.get('courseId')}/${filename}`,
  })
]