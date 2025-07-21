import axios from "axios";
import {IScore} from "../types/score.type";
const API_URL = "http://localhost:3001/";

export const score = (rut: string)=> {

    return axios
        .get(API_URL + `score/${rut}`)
        .then((response: any) => {
            console.log(response)
            return response.data as IScore
        });
};
