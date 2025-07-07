export interface IUser {
    id: number;
    rut: string;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
}

export interface JwtPayload {
    id: number
    role: 'admin' | 'user';
    rut?: string;
}
