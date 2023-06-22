import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import Hero from '../components/sections/Hero';
import Inspector from '../components/style-guide/Inspector';
import Carousel from '../components/style-guide/Carousel';
import Typeography from '../components/style-guide/Typeography';
import Containers from '../components/style-guide/Containers';

export default function StyleGuide({ data }: PageProps<StyleGuideQueryData>) {
  return <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={data.site.siteMetadata.description} />
      <title>Style Guide | {data.site.siteMetadata.name}</title>
    </Helmet>
    <Inspector />
    <Hero headline={'Style Guide'} />
    <Typeography />
    <Containers />
    <Carousel />
  </>;
}

type StyleGuideQueryData = {
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
