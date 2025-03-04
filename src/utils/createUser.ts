import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from '../model/User.js';

dotenv.config();
const mongoURI = process.env.DATABASE_URL;

const createUser = async () => {
  await mongoose.connect(mongoURI);

  const users = [
    { email: 'admin@aol.com', role: 'Admin', password: 'Admin!' },
    { email: 'abc@aol.com', role: 'User', password: 'ABC!' },
    { email: 'xyz@aol.com', role: 'User', password: 'XYZ!' },
  ];

  for (const user of users) {
    const existingUser = await User.findOne({ email: user.email });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await User.create({ email: user.email, password: hashedPassword, role: user.role });
      console.log(`Created user: ${user.email} | Role: ${user.role}`);
    } else {
      console.log(`User already exists: ${user.email}`);
    }
  }

  mongoose.connection.close();
};

createUser().catch((err) => console.error(err));
