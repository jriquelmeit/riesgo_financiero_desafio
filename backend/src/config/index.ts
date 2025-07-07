import dotenv from 'dotenv'

import type ms from 'ms'

dotenv.config()

const config = {
    PORT: process.env.PORT || 3000,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY as ms.StringValue,
};
export default config;
