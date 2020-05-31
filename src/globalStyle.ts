import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    -webkit-overflow-scrolling: touch;
    font-size: 10px;
    box-sizing: border-box;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-overflow-scrolling: touch;
    font-family: -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", system-ui, "Segoe ui", "Roboto", "Helvetica Neue", sans-serif;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  li {
    list-style: none;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
  a {
    -webkit-text-decoration-skip: objects;
    text-decoration: inherit;
    color: inherit;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  img,
  video,
  canvas {
    max-width: 100%;
  }
`;
