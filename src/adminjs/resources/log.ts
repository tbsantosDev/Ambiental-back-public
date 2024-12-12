import loggerFeature, { createLoggerResource } from "@adminjs/logger";
import { Log } from "../../models/Log.js";
import { FeatureType } from "adminjs";
import importExportFeature from "@adminjs/import-export";
import { ComponentLoader } from "adminjs";
import { componentLoader } from "../components/component.js";


const logResourceOptions: any = {
  componentLoader,
  resource: Log,
  featureOptions: {
    propertiesMapping: {
      recordTitle: "title", //field to store logged record's title
      userIdAttribute: "id", //primary key currently logged user
    },
  },
};

export default createLoggerResource(logResourceOptions);


export const logResourceFeatures = (
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