import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	margin: 0;
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote::before, blockquote::after,
q::before, q::after {
	content: "";
	content: none;
}

table {
	border-spacing: 0;
	border-collapse: collapse;
}

/* additional styling that is not part of the css restet */
*,
*::before,
*::after {
		box-sizing: border-box;
}

html {
	font-size: 16px;
}

main {
	display: flex;
	flex-direction: column;
	align-items: flex-start ;
	gap: 0.8rem;
}

/* import fonts */
@font-face {
	font-family: 'Gentium Book Plus';
	font-style: normal;
	font-weight: normal;
	src: url("/fonts/GentiumBookPlus-Regular.ttf");
}

@font-face {
	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 400;
	src: url("/fonts/SourceSansPro-Regular.ttf");
}
@font-face {
	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 600;
	src: url("/fonts/SourceSansPro-SemiBold.ttf");
}
:root {
	--color-primary-light:#91B4C9;
	--color-secondary-light: #34EB7C;
	--color-primary-dark: #1786AD;
	--color-secondary-dark: #A7B8F5;
	--color-contrast: #FA773A;
	--color-whiteish: #F5F5F5;
	--color-blackish: #111;
	--font-sans: 'Source Sans Pro', sans-serif;
	--font-serif: 'Gentium Book Plus', serif;}

`;
