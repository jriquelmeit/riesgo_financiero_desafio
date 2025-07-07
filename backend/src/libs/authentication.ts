import crypto from 'crypto'

const SECRET = 'SECRET-REST-API' //DEMO

export const encryptPassword = (password: string) => {
    return crypto.createHmac("sha256", password).update(SECRET).digest("hex");

}
