import { actions, AdminJSOptions } from 'adminjs';
import {componentLoader, Components} from './component-loader.js';
import { DataResource } from '../resource/dataResource.js';
import { MLModelResource } from '../resource/modelResource.js';
import { AISystemResource } from '../resource/systemResource.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [ DataResource, MLModelResource, AISystemResource ],
  databases: [],
  dashboard: {
    component: Components.Dashboard
  },
  branding: {
    logo: false,
    companyName: "AI DocuEase",
    withMadeWithLove: false,
  }
};

export default options;
