import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { IToken, IUser} from "../types/user.type";

const API_URL = "http://localhost:3001/";


export const login = (username: string, password: string) => {


    return axios
        .post(API_URL + "login", {
            email: username,
            password,
        })
        .then((response: any) => {

            console.log(response)
            if (response.data.accessToken) {
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
            }
            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("accessToken");
};

export const getCurrentUser = (): IToken | null=> {

    const token = getJwtPayload() as IToken;
    if (token) {
        const user: IToken = {
            role: token.role,
            rut: token.rut
        };
        return user;
    }
    return null;
};


export const getJwtPayload = () => {
  const tokenStr = localStorage.getItem("accessToken");
  console.log(tokenStr)
  if (!tokenStr) return null;
  try {
    // If you stored the token as a JSON string, parse it first
    const token = JSON.parse(tokenStr);
    return jwtDecode(token);
  } catch {
    return null;
  }
};

axios.interceptors.request.use((config) => {
  const tokenStr = localStorage.getItem("accessToken");
  if (tokenStr) {
    const token = JSON.parse(tokenStr);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));
