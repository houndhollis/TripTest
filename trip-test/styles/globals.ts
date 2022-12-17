import { css } from '@emotion/react'


export const global = css`

@font-face {
    font-family: 'GmarketSans';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff') format('woff');
    font-display: swap;
}
@font-face {
    font-family: "GmarketSans";
    font-weight: 300;
    font-style: normal;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.woff")
        format("woff");
    font-display: swap;
}
@font-face {
    font-family: "GmarketSans";
    font-weight: 500;
    font-style: normal;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff")
        format("woff");
    font-display: swap;
}
 

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
`;
