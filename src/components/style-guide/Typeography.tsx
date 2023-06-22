import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import { Link } from 'gatsby';
import { ScrollAnchor } from '../utils/ScrollAnchor';
import Container from '../layout/Container';
import Button from '../utils/Button';

const StyledSection = styled(Section)`
  .row{
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;

export default function Typeography() {
  return <StyledSection>
    <Container>
      <h1>h1 Title (use once)</h1>
      <h2>h2 Section Header</h2>
      <h3>h3 Sub-header</h3>
      <h4>h4 Mini-header</h4>
      <p>Paragraph: Aute ut quis irure excepteur aliqua occaecat ullamco labore nostrud. Laboris dolor laborum esse occaecat et adipisicing ut dolore minim tempor. Incididunt in aliquip id cillum ut nisi do enim duis dolore nostrud consequat adipisicing. Culpa sit tempor mollit velit exercitation consequat nulla in.</p>
      <hr />
      <div className="row">
        <button type="button">Button</button>
        <Button type="button">&lt;Button&gt;</Button>
        <Button type="button" variant="blue">&lt;Button variant="blue"&gt;</Button>
      </div>
      <hr />
      <Button as="a" href="#" onClick={(e) => { e.preventDefault(); }}>Button Link</Button>
      <ul>
        <li><Link to="/">Homepage SPA link</Link></li>
        <li><ScrollAnchor anchor="hero">Scroll Link to Hero</ScrollAnchor></li>
      </ul>
    </Container>
  </StyledSection>;
}
