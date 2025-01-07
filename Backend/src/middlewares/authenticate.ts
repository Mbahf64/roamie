import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import {User} from '../models/usersModel';
import dotenv from 'dotenv';
dotenv.config();

export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error('Authorization header is missing');
    }
    
  
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from the header
  if (!token) {
     res.status(401).json({ message: 'Authentication token is missing' });
     return 
  }
  

    
  
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as { id: string };
  
      // Fetch user details from the database
      const user = await User.findById(decoded.id);
      if (!user) {
      
        res.status(401).json({ message: 'Unauthorized: User not found' });
        return 
      }
  
      req.user = user;  // Attach the user to the request
      next();
    } catch (error) {
      console.error('Authentication error:', error);
      res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
