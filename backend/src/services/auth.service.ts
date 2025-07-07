import {IUser} from '@/models/user'
import users from './user.json'

export const findUserEmail = async (email: string): Promise<IUser> => {
    return users.find(user => user.email === email) as IUser;
}
