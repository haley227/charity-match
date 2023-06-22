import React, { ComponentType } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../includes/style';

type ButtonVariants = 'blue';
type ButtonProps = {
  as?: string | ComponentType<any> | undefined,
  variant?: ButtonVariants,
};

const ButtonStyle = styled.button<ButtonProps>`
  display: inline-block;
  border-radius: 3px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  padding: 18px 40px;
  text-decoration: none;
  transition: color 200ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px 0px;
  text-align: center;

  border: 2px solid ${colors.orange};
  background: ${colors.orange};
  color: white;
  cursor: pointer;

  &:hover {
    background: none;
    color: ${colors.orange};
  }

  ${(props) => (props.variant === 'blue' ? css`
    border: 2px solid ${colors.blue};
    background: ${colors.blue};
    color: white;

    &:hover {
      background: white;
      color: ${colors.blue};
    }
  ` : '')}
`;

export default function Button(props: ButtonProps&(React.ButtonHTMLAttributes<HTMLButtonElement>|React.AnchorHTMLAttributes<HTMLAnchorElement>)) {
  return <ButtonStyle { ... props } data-variant={props.variant}>{props.children}</ButtonStyle>;
}
