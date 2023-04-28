import React from "react";
import MainForm from "../../components/Form/MainForm";
import TokenForm from "../../components/Form/TokenForm";
import {tokenCookie} from "../../connections/cookies/token";


const Main: React.FC = () => {
    const {token} = tokenCookie();

    return (
        <>
            {token ? <MainForm /> : <TokenForm />}
        </>
    );
}

export default Main;