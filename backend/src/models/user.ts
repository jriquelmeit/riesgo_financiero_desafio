export interface IUser {
    id: number;
    rut: string;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
}

export interface JwtPayload {
    sub: string
    role: 'admin' | 'user';
    rut?: string;
}
