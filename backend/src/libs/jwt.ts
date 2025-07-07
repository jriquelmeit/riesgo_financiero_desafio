import jwt from 'jsonwebtoken';

import config from "@/config";

export const generateAccessToken = (sub: number, role:string, rut?: string) => {
    return jwt.sign({user: {sub, role, rut}}, config.JWT_ACCESS_SECRET, {
        expiresIn: config.ACCESS_TOKEN_EXPIRY,
        subject: 'accessToken',
    })
}

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, config.JWT_ACCESS_SECRET);
};

