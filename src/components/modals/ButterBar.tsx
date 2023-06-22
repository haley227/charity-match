import React from 'react';
import styled from 'styled-components';
import { colors } from '../../includes/style';

export const ButterBarStyle = styled.aside`
  background: ${colors.orange};
  color: white;
  padding: 1ex 1em;
  text-align: center;
`;

export type ButterBarProps = {
  message: string;
};

export default function ButterBar({ message }: ButterBarProps) {
  return <ButterBarStyle className="butterbar">{message}</ButterBarStyle>;
}
