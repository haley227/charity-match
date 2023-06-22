import React, { useState } from 'react';
import styled from 'styled-components';
import logoImg from '../../images/cro-logo.png';
import { media } from '../../includes/breakpoints';
import { colors } from '../../includes/style';
import Container from './Container';
import Hamburger from './Hamburger';

const NavigationStyle = styled.nav`
  background-color: ${colors.blue};

  .object-fit-polyfill{
    position: static !important; //Fixes things on IE11. Not sure why this is necessary
  }

  ${Container}{
    padding-top: 0px;
    padding-bottom: 0px;

    ${media.large`
      display: flex;
      justify-content: space-evenly;
      height: 80px;
    `}
  }

  .navbar-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    ${media.large`
      width: auto;
    `};
  }

  .logo-wrapper{
    padding-right: 15px;

    .logo{
      display: block;
      min-width: 100px;
    }
  }

  .navbar-mobile-button{
    ${media.large`
      display: none;
    `};
  }
`;

const MainMenu = styled.ul`
  list-style: none;
  padding: 10px 0 20px;
  margin: 0;

  &[data-menu-open="false"]{
    display: none;
  }
  ${media.large`
    &,
    &[data-menu-open="false"]{
      display: flex;
    }

    justify-content: space-evenly;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    padding: 0;
  `}

  li{
    padding: 0 5px;

    a{
      display: inline-block;
    }
  }

  ${media.desktop`
    justify-content: center;

    li{
      padding: 0 14px;
    }
  `}

  .menu-item-link{
    ${media.large`
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}

    &:hover{
      background-color: ${colors.darkBlue};
    }
  }

  .menu-item-button a{
    border: 1px solid #fff;
    padding: 10px;
    line-height: 1em;
    margin-top: 8px;
    ${media.large`
      margin: 0;
    `}

    &:hover{
      background-color: ${colors.darkBlue};
    }
  }

  a{
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #ffffff;
    border: 0;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    white-space: nowrap;
  }
`;

export default function Header() {
  const [isOpen, setOpenStatus] = useState(false);

  return <NavigationStyle id="navigation" className="navbar">
    <Container>
      <div className="navbar-header">
        <a href="https://crometrics.com" id="main-logo" className="logo-wrapper">
          {/* loading="eager" fixes the FOUC issues seen between pages */}
          {/* <StaticImage src="../../images/cro-logo.png" alt="Cro Metrics logo" height={50} className="logo" placeholder="none" loading="eager"/> */}
          <img src={logoImg} className="logo" alt="Cro Metrics logo" height={50}/>
        </a>
        <Hamburger className="navbar-mobile-button" isOpen={isOpen} onClick={() => { setOpenStatus(!isOpen); }} />
      </div>
      <MainMenu id="main-menu" className={`navbar-menu ${isOpen ? 'opened' : 'closed'}`} data-menu-open={isOpen}>
        <li className="menu-item-link">
          <a title="Services" href="https://crometrics.com/services/">Services</a>
        </li>
        <li className="menu-item-link">
          <a title="Clients" href="https://crometrics.com/clients/">Clients</a>
        </li>
        <li className="menu-item-link">
          <a title="Meet the Team" href="https://crometrics.com/meet-the-team/">Meet the Team</a>
        </li>
        <li className="menu-item-link">
          <a title="Culture" href="https://crometrics.com/culture/">Culture</a>
        </li>
        <li className="menu-item-link">
          <a title="Careers" href="https://careers.crometrics.com/">Careers</a>
        </li>
        <li className="menu-item-link">
          <a title="Articles" href="https://crometrics.com/articles/">Articles</a>
        </li>
        <li className="menu-item-link">
          <a title="Contact" href="https://crometrics.com/contact/">Contact</a>
        </li>
        <li className="menu-item-button">
          <a title="Client Login" target="_blank" rel="noreferrer" href="https://my.crometrics.com">Client Login</a>
        </li>
      </MainMenu>
      {/* <div id="menu-login"></div> */}
    </Container>
  </NavigationStyle>;
}
