import {useCookies} from "react-cookie";

export const TOKEN_COOKIE_NAME = 'token';

export const tokenCookie = () => {
    const [cookies, setCookie, removeCookie] = useCookies([TOKEN_COOKIE_NAME]);
    return {
        token: cookies[TOKEN_COOKIE_NAME] as string | undefined,
        setToken: (token: string) => {
            setCookie(TOKEN_COOKIE_NAME, token, {path: '/', maxAge: 60 * 60 * 24 * 7}); // 7 days
        },
        removeToken: () => {
            removeCookie(TOKEN_COOKIE_NAME, {path: '/'});
        }
    }
}