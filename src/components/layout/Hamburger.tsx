import React from 'react';
import styled from 'styled-components';

const HamburgerStyle = styled.div`
  padding: 10px;
  cursor: pointer;

  .lines{
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 5px;
    background-clip: padding-box;
    position: relative;
    margin-top: 9px;
    margin-bottom: 9px;

    &:before {
      display: inline-block;
      width: 20px;
      height: 2px;
      border-radius: 5px;
      background-clip: padding-box;
      position: absolute;
      left: 0;
      content: '';
      transform-origin: 50% 50%;
      top: 6px;
    }
    &:after {
      display: inline-block;
      width: 20px;
      height: 2px;
      border-radius: 5px;
      background-clip: padding-box;
      position: absolute;
      left: 0;
      content: '';
      transform-origin: 50% 50%;
      top: -6px;
    }

    &,
    &:before,
    &:after {
      background: #ffffff;
      transition: .3s;
    }
  }

  &[data-menu-open="true"] {
    .lines{
      &:before {
        top: 0;
        width: 20px;
        transform: rotate3d(0, 0, 1, 45deg);
        transition: top 0.3s ease-in-out, transform 0.3s 0.5s ease-in-out;
      }
      &:after {
        top: 0;
        width: 20px;
        transform: rotate3d(0, 0, 1, -45deg);
        transition: top 0.3s ease-in-out, transform 0.3s 0.5s ease-in-out;
      }
      transition: background 0.3s 0s ease-in-out;
      background: transparent !important;
    }
  }
`;
type HamburgerProps = {
  isOpen: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Hamburger({ isOpen, className, onClick }: HamburgerProps) {
  return <HamburgerStyle className={className} data-menu-open={isOpen} onClick={onClick}><span className="lines"></span></HamburgerStyle>;
}
