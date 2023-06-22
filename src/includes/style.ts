import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { media } from './breakpoints';
import './fonts.scss';

export const colors = {
  silver: '#eeeeee',
  gray: '#303133',
  orange: '#ff590b',
  blue: '#399bff',
  darkBlue: '#2a86e6',
} as const;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  #gatsby-focus-wrapper{
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    > #content{
      flex-grow: 1;
    }
  }

  body {
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: ${colors.gray};
    background: white;
    /* min-width: 375px; */
  }

  a{
    color: ${colors.blue};
    text-decoration: none;

    &:hover{
      color: ${colors.orange};
    }
  }

  button{
    cursor: pointer;
    color: inherit; //This is important for iOS
    padding: 6px; //This differs between browsers
  }

  //This is off screen until you use tab to focus the element
  .skip-to-content {
    position: absolute;
    right: 100%;

    &:focus{
      z-index: 10000;
      right: 50%;
      padding: 4px 12px;
      background: white;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      box-shadow: 0px 2px 6px rgba(0,0,0,.5);
      transform: translateX(50%);
    }
  }

  .container {
    max-width: 1200px;
    padding: 48px 32px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;

    ${media.mobile`
      padding: 96px 36px;
    `}
  }

  h1,.h1 {
    font-family: 'Merriweather', serif;
    font-size: 28px;
    line-height: 35px;
    font-weight: normal;
    text-align: center;

    margin: 0 0 24px;

    ${media.mobile`
      font-size: 48px;
      line-height: 60px;
    `}
  }

  h2,.h2 {
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 24px;
    line-height: 30px;
    font-weight: normal;
    text-align: center;

    margin: 0 0 24px;

    ${media.mobile`
      font-size: 36px;
      line-height: 45px;
    `}
  }

  h3,.h3 {
    margin: 0 0 24px;
  }

  p {
    margin-top: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  hr {
    border: none;
    height: 2px;
    background: #eaeaea;

    margin: 48px 0;
  }

  svg{
    //iOS Safari tends to shrink SVG on us while other browsers don't
    flex-shrink: 0;
  }
`;
