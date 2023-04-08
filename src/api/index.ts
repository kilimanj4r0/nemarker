import axios from 'axios';
import {FromOpenAIMessage} from "./typings";
import {getConfigValue} from "@ijl/cli";

// TODO get url and token from config
const axiosInstance = axios.create({
    baseURL: "https://openai.batalov.me/v1",
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${getConfigValue("nemarker.token")}`,
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
        });
    }
}

export default API;
