import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define the User type (adjust based on your actual user data model)
interface JwtPayload {
  userId: string;
  verified: boolean;
  // add other fields if necessary
}

export const identifier = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  let token: string | undefined;

  // If the request doesn't come from a browser, check the authorization header for a token
  if (req.headers.client === 'not-browser') {
    token = req.headers.authorization;
  } else {
    // Otherwise, try to extract the token from the cookies
    token = req.cookies['Authorization'];
  }

  // If no token is found, respond with Unauthorized
  if (!token) {
    res.status(403).json({ success: false, message: 'Unauthorized' });
    return; // explicitly return to exit the function
  }

  try {
    // Split token to extract the JWT
    const userToken = token.split(' ')[1];  // Assuming the token comes in the format "Bearer <token>"

    // Verify the JWT
    const jwtVerified = jwt.verify(userToken, process.env.TOKEN_SECRET as string);

    // If JWT is verified, attach the user data to the request object
    if (jwtVerified) {
      req.user = jwtVerified as JwtPayload;  // Attach verified user data to the request

      return next();  // Pass control to the next middleware
    } else {
      throw new Error('Invalid token');
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({ success: false, message: 'Unauthorized' });
    return;  // explicitly return to exit the function
  }
};
