import React from 'react';
import styled from 'styled-components';

const SpinnerStyle = styled.div`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  height: 1em;
  width: 1em;
  text-indent: -9999em;

  &:after{
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    border-top: .25ex solid rgba(255, 255, 255, 0.2);
    border-right: .25ex solid rgba(255, 255, 255, 0.2);
    border-bottom: .25ex solid rgba(255, 255, 255, 0.2);
    border-left: .25ex solid currentColor;
    transform: translateZ(0);
    animation: loading-animation 1.1s infinite linear;
  }

  @keyframes loading-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = () => <SpinnerStyle className="spinner">Loading...</SpinnerStyle>;
