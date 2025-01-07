// src/types/express.d.ts

import { User } from "../models/usersModel"; // Adjust this import path to your User model

declare global {
  namespace Express {
    interface Request {
      user?: User; // Or replace `User` with the appropriate type you're using
    }
  }
}
