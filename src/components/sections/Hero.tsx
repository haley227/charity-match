import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import heroBg from '../../images/home/hero-bg.png';
import { colors } from '../../includes/style';
import Container from '../layout/Container';

const StyledSection = styled(Section)`
  background: ${colors.blue} url(${heroBg});
  background-repeat: no-repeat;
  background-position: center bottom;
  /* background-attachment: scroll; */
  background-size: cover;
  color: #fff;

  ${Container}{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
  }

  h1{
    font-weight: bold;
  }
`;

type HeroProps = {
  headline?: ReactNode,
};
// Regarding H1 tags and SEO https://moz.com/blog/h1-seo-experiment
export default function Hero({
  headline = <>Landing Page</>,
}: HeroProps) {
  return <StyledSection>
    <Container>
      <h1 className="hero-headline">{headline}</h1>
    </Container>
  </StyledSection>;
}
