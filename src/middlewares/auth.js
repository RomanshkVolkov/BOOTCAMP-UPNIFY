/* eslint-disable import/prefer-default-export */
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            message: 'No token provided',
        });
    }

    try {
        const decode = JWT.verify(token, process.env.SECRET_KEY);

        req.user = decode;

        next();
    } catch (error) {
        res.status(401).json({
            message: 'Unauthorized',
        });
    }
};