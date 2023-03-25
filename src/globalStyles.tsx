import {css} from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: 'GolosTextWebVF';
    src: url('./remote-assets/font/golos-text_vf.woff2') format('woff2'),
    url('./remote-assets/font/golos-text_vf.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  #app {
    font-family: 'GolosTextWebVF', sans-serif;
  }
`;