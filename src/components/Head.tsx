import React from 'react';
import { HeadProvider, Title, Link, Meta } from 'react-head';


export const Head: React.FC = ()  => {
    return <HeadProvider>
        <Link rel="apple-touch-icon" sizes="180x180" href={`${__webpack_public_path__}remote-assets/favicon/apple-touch-icon.png`} />
        <Link rel="icon" type="image/png" sizes="32x32" href={`${__webpack_public_path__}remote-assets/favicon/favicon-32x32.png`} />
        <Link rel="icon" type="image/png" sizes="16x16" href={`${__webpack_public_path__}remote-assets/favicon/favicon-16x16.png`} />
        <Link rel="manifest" href={`${__webpack_public_path__}remote-assets/favicon/site.webmanifest`} />
        <Link rel="mask-icon" href={`${__webpack_public_path__}remote-assets/favicon/safari-pinned-tab.svg`} color="#5bbad5" />
        <Link rel="shortcut icon" href={`${__webpack_public_path__}remote-assets/favicon/favicon.ico`} />
        <Meta name="msapplication-TileColor" content="#da532c" />
        <Meta name="msapplication-config" content={`${__webpack_public_path__}remote-assets/favicon/browserconfig.xml`} />
        <Meta name="theme-color" content="#ffffff" />
    </HeadProvider>
}