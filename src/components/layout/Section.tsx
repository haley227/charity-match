import React from 'react';
import styled from 'styled-components';

// This is a hacky way of prefilling the id property with the name of the component
const SectionStyle = styled.section.attrs((props) => {
  if (props.id) return;
  const match = props.className?.match(/([a-z]+)__/i);
  const id = match && match[1].toLowerCase();
  return { id };
})`
  /* text-align: center; */
`;

type SectionProps = {
  className?: string;
  id?: string;
  children: React.ReactNode
};

// React.FunctionComponent<BoxProps>
export default function Section({ id, className, children }: SectionProps): JSX.Element {
  return <SectionStyle id={id} className={className}>
    {children}
  </SectionStyle>;
}
