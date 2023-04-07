import {css} from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: 'GolosTextWebVF';
    src: url('/remote-assets/font/golos-text_vf.woff2') format('woff2'),
      url('/remote-assets/font/golos-text_vf.woff') format('woff');
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
    background: var(--color-red-superlight) !important;
    color: var(--color-dark);
  }
`;