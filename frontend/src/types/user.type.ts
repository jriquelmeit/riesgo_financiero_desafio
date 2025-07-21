export interface IUser {
    id?: any | null,
    username: string,
    email: string,
    password: string,
    roles?: Array<string>
}

export interface IToken {
    role: string,
    rut: string
}
