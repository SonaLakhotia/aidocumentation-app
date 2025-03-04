import { Pagination } from '@adminjs/design-system';
import { Components } from '../admin/component-loader.js';
import DatasetCard from '../model/Datamodel.js';
import { calculateTrustworthyScore } from '../utils/trustworthiness.js';
import  { dataStepsData } from '../utils/datasteps.js';

export const DataResource = {
  resource: DatasetCard,
  options: {
    listProperties: ["name", "version_name", "license", "publisher", "transparencyScore"],
    properties: {
      transparencyScore: {
        isVisible: { list: true, show: true, edit: false, filter: true }, 
      },
    },
    actions: {
      new: {
        isAccessible: ({currentAdmin }) => currentAdmin?.role === "Admin",
        component: Components.DataForm,
        before: async (request) => {
          if (request.payload) {
            console.log("Payload before saving:", JSON.stringify(request.payload, null, 2));
            const { payload, transparencyScore } = request.payload; 
            request.payload = { ...payload, transparencyScore};
            //request.payload = request.payload.payload;
          }
          return request;
        },
        after: async (response, request, context) => {
          console.log("Form Submitted:", JSON.stringify(request.payload, null, 2));
          // return response;
          return {
            record: response.record || response,
            redirectUrl: `/admin/resources/${context.resource._decorated?.id || context.resource.id}`,
          };
        },
      },
      edit: {
        isAccessible: ({currentAdmin }) => currentAdmin.role === "Admin",
        before: async (request) => {
          if (request.payload) {
            console.log("Payload before updating:", JSON.stringify(request.payload, null, 2));
            
            const { payload } = request; 
            const transparencyScore = calculateTrustworthyScore(dataStepsData, payload);
            
            request.payload = { ...payload, transparencyScore };
            console.log("Updated Payload with Score:", request.payload);
          }
          return request;
        },
      },
      list: {
        after: async (response) => {
          response.records = response.records.map((record) => {
            const score = record.params.transparencyScore;
            record.params.transparencyScore = score ? `${score}%` : "N/A";
            return record;
          });
          return response;
        },
      },
      show: {
        after: async (response) => {
          const score = response.record.params.transparencyScore;
          response.record.params.transparencyScore = score ? `${score}%` : "N/A";
          return response;
        },
      },
      delete:{
        isAccessible: ({currentAdmin }) => currentAdmin.role === "Admin",
      }     
    },
  },
};
