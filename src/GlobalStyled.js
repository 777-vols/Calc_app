import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
html {
	box-sizing: border-box;
}

*,
*::after,
*::before {
	box-sizing: inherit;
}

ul[class],
ol[class] {
	padding: 0;
}

ul[class] {
	list-style: none;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
	margin: 0;
	font-size: inherit;
}

input,
button,
textarea,
select {
	font: inherit;
}

a {
	text-decoration: none;
}`;