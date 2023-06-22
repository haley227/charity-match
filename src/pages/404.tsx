import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Section from '../components/layout/Section';

export default function Page() {
  return <>
    <Helmet>
      <title>404 Page Not Found</title>
    </Helmet>
    <Section id="404">
      <h1>404 - Sorry the page wasn't found</h1>
      <div>Go back to the <Link to="/">Homepage</Link></div>
    </Section>
  </>;
}
