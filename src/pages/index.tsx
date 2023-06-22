import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import Hero from '../components/sections/Hero';
import Why from '../components/sections/Why';

export default function Index({ data }: PageProps<IndexQueryData>) {
  return <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={data.site.siteMetadata.description} />
      <title>{data.site.siteMetadata.name}</title>
    </Helmet>
    <Hero />
    <Why />
  </>;
}

type IndexQueryData = {
  site: {
    siteMetadata: {
      name: string,
      description: string,
    }
  }
};
export const query = graphql`
  query {
    site {
      siteMetadata {
        name
        description
      }
    }
  }
`;
