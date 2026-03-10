import jwt from 'jsonwebtoken';

/**
 * Protects routes by verifying the JWT sent in the Authorization header.
 * Expected format: Authorization: Bearer <token>
 */
export const protect = async (req, res, next) => {
  let token;

  // 1. Check if the header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 2. Extract the token
      token = req.headers.authorization.split(' ')[1];

      // 3. Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Attach the user ID to the request object for use in controllers
      req.user = decoded.id;

      // 5. Move to the next middleware or controller
      return next();
    } catch (error) {
      console.error('JWT Verification Error:', error.message);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // 6. If no token was found at all
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};