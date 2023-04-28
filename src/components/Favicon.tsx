import React from "react";


export const Favicon: React.FC = () => {
    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href={`${__webpack_public_path__}remote-assets/favicon/apple-touch-icon.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${__webpack_public_path__}remote-assets/favicon/favicon-32x32.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${__webpack_public_path__}remote-assets/favicon/favicon-16x16.png`} />
            <link rel="manifest" href={`${__webpack_public_path__}remote-assets/favicon/site.webmanifest`} />
            <link rel="mask-icon" href={`${__webpack_public_path__}remote-assets/favicon/safari-pinned-tab.svg`} color="#5bbad5" />
            <link rel="shortcut icon" href={`${__webpack_public_path__}remote-assets/favicon/favicon.ico`} />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-config" content={`${__webpack_public_path__}remote-assets/favicon/browserconfig.xml`} />
            <meta name="theme-color" content="#ffffff" />
        </>
    );
}
