import { ComponentLoader } from 'adminjs';
const componentLoader = new ComponentLoader();

const Components = {
    Dashboard: componentLoader.add('Dashboard', '../dashboard/custom-dashboard.js'),
    DataForm: componentLoader.add('DataForm', '../components/DataForm.js'),
    MLForm: componentLoader.add('MLForm', '../components/MLForm.js'),
    AISystemForm: componentLoader.add('AISystemForm', '../components/AISystemForm.js')
}


export { componentLoader, Components };
