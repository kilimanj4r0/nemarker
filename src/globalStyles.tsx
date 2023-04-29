import {css} from "@emotion/react";

export const colors = {
    blueAccent: '#30BCED',
    redAccent: '#FC5130',
    redLight: '#FFDDD6',
    redSuperlight: '#FEFAFF',
    white: '#FFFFFF',
    dark: '#303035',
    black: '#050401',
}

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
    --color-blue-accent: ${colors.blueAccent};
    --color-red-accent: ${colors.redAccent};
    --color-red-light: ${colors.redLight};
    --color-red-superlight: ${colors.redSuperlight};
    --color-white: ${colors.white};
    --color-dark: ${colors.dark};
    --color-black: ${colors.black};

    font-family: 'GolosTextWebVF', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    background: var(--color-red-superlight) !important;
    color: var(--color-dark);
  }
`;