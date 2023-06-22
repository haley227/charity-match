import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { media } from '../../includes/breakpoints';
import Section from '../layout/Section';
import ArrowLeft from '../../images/icons/arrow-left.inline.svg';
import Container from '../layout/Container';

const StyledSection = styled(Section)`
  ${Container}{
    text-align: center;

    ${media.large`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 80px;
      align-items: center;
      padding: 0 36px;
      text-align: left;
      min-height: 460px;
    `}
  }

  img{
    max-width: 100%;
  }

  .check-it-out{
    display: inline-flex;
    align-items: center;
  }
`;

export default function Why() {
  return <StyledSection>
    <Container>
      <div className="image">
        <StaticImage src="../../images/home/wow.jpg" alt="Wow" height={320} placeholder="blurred" loading="eager"/>
      </div>
      <div className="copy">
        <h2>Cro Metrics is abc and xyz</h2>
        <p>Aute ut quis irure excepteur aliqua occaecat ullamco labore nostrud. Laboris dolor laborum esse occaecat et adipisicing ut dolore minim tempor. Incididunt in aliquip id cillum ut nisi do enim duis dolore nostrud consequat adipisicing. Culpa sit tempor mollit velit exercitation consequat nulla in.</p>
        <div className="check-it-out"><Link to="/style-guide">View the Style Guide</Link><ArrowLeft /><b>Check it out!</b></div>
      </div>
    </Container>
  </StyledSection>;
}
