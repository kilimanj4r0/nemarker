import axios from 'axios';
import {FromOpenAIMessage} from "./typings";
import Cookies from 'universal-cookie';
import {TOKEN_COOKIE_NAME} from "../cookies/token";

const cookies = new Cookies();

// TODO get url and token from config
const axiosInstance = axios.create({
    baseURL: "https://openai.batalov.me/v1",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    },
});

const API = {
    async getCompletion(prompt: string, text?: string) {
        const content = text ? `Примени запрос "${prompt}" к тексту: ${text}` : prompt;
        return axiosInstance.post<FromOpenAIMessage>("/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content,
            }],
            temperature: 0.7,
        }, {
            headers: {
                Authorization: `Bearer ${cookies.get(TOKEN_COOKIE_NAME)}`,
            }
        });
    }
}

export default API;
