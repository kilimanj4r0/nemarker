import React from "react";
import TokenForm from "../../components/Form/TokenForm";
import {tokenCookie} from "../../connections/cookies/token";
import MainFormWithCards from "../../components/Form/MainFormWithCards";


const Main: React.FC = () => {
    const {token} = tokenCookie();

    if (!token) {
        return <TokenForm/>;
    }
    return <MainFormWithCards />
}

export default Main;