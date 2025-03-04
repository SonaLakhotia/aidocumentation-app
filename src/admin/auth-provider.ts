// import { DefaultAuthProvider } from 'adminjs';

// import {componentLoader} from './component-loader.js';
// import { DEFAULT_ADMIN } from './constants.js';

// /**
//  * Make sure to modify "authenticate" to be a proper authentication method
//  */
// const provider = new DefaultAuthProvider({
//   componentLoader,
//   authenticate: async ({ email, password }) => {
//     if (email === DEFAULT_ADMIN.email) {
//       return { email };
//     }

//     return null;
//   },
// });

// export default provider;

import { DefaultAuthProvider } from 'adminjs';
import { componentLoader } from './component-loader.js';
import { User } from '../model/User.js';
import bcrypt from 'bcrypt'; 

const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return { email: user.email, role: user.role };
  },
});

export default provider;

