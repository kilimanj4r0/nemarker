import {css} from "@emotion/react";

// noinspection CssUnknownTarget (fonts)
export const globalStyles = css`
@font-face {
    font-family: 'GolosTextWebVF';
    
    src: url('${__webpack_public_path__}remote-assets/font/golos-text_vf.woff2') format('woff2'),
      url('${__webpack_public_path__}remote-assets/font/golos-text_vf.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  #nemarker {
    --size-header-height: 80px;
    --size-header-height-padding: 48px;
    --color-blue-accent: #30BCED;
    --color-red-accent: #FC5130;
    --color-red-light: #FFDDD6;
    --color-red-superlight: #FEFAFF;
    --color-white: #FFFFFF;
    --color-dark: #303035;
    --color-black: #050401;

    font-family: 'GolosTextWebVF', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    background: var(--color-red-superlight) !important;
    color: var(--color-dark);
  }
`;