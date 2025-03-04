import { Components } from "../admin/component-loader.js";
import AISystem from "../model/AImodel.js";
import { calculateTrustworthyScore } from "../utils/trustworthiness.js";
import { stepsData } from "../utils/aisteps.js";

export const AISystemResource = {
  resource: AISystem,
  options: {
    listProperties: [
      "system_name",
      "version_name",
      "intended_purpose",
      "intended_users",
    ],
    properties: {
      transparencyScore: {
        isVisible: { list: true, show: true, edit: false, filter: true }, 
      },
    },
    actions: {
      new: {
        isAccessible: ({currentAdmin }) => currentAdmin?.role === "Admin",
        component: Components.AISystemForm,
        before: async (request) => {
          if (request.payload) {
            console.log("Payload before saving:", JSON.stringify(request.payload, null, 2));
            const { payload, trustworthinessScore } = request.payload; 
            request.payload = { ...payload, trustworthinessScore};
            //console.log(request.payload);
           // request.payload = request.payload.payload;
          }
          return request;
        },
        after: async (response, request, context) => {
          const { trustworthinessScore} = request.payload
          console.log("Form Submitted:", JSON.stringify(request.payload, null, 2));
          return {
            record: response.record || response,
            trustworthinessScore,
            redirectUrl: `/admin/resources/${context.resource._decorated?.id || context.resource.id}`,
          };
        },
      },
      edit: {
        isAccessible: ({currentAdmin }) => currentAdmin?.role === "Admin",
        before: async (request) => {
          if (request.payload) {
            console.log("Payload before updating:", JSON.stringify(request.payload, null, 2));
            
            const { payload } = request; 
            const trustworthinessScore = calculateTrustworthyScore(stepsData, payload);
            
            request.payload = { ...payload, trustworthinessScore };
            console.log("Updated Payload with Score:", request.payload);
          }
          return request;
        },
      },
      delete: {
        isAccessible: ({currentAdmin }) => currentAdmin?.role === "Admin",
      }   
    },
  },
};
