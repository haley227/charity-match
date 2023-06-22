import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useViewport } from '../context/ViewportProvider';
import { useScroll } from '../context/ScrollProvider';

export const SiteName = () => {
  // Limitation: Only one useStaticQuery can be used per file
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  return <>{data.site.siteMetadata.name}</>;
};

const ViewportInfoStyle = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  background: white;
  opacity: .75;
  padding: 16px;
  box-shadow: 1px 1px 4px rgba(0,0,0,.25);

  h3{
    margin: 0;
  }
`;
const ViewportInfo = () => {
  const { height, width, headerHeight } = useViewport();
  const { scroll } = useScroll();
  return <ViewportInfoStyle style={{ top: headerHeight }}>
    <h3>Viewport info</h3>
    <div>Height: {height}</div>
    <div>Width: {width}</div>
    <div>Scroll: {scroll}</div>
  </ViewportInfoStyle>;
};

// Regarding H1 tags and SEO https://moz.com/blog/h1-seo-experiment
export default function Inspector() {
  // useEffect(()=>{
  //   document.addEventListener('click', e=>{
  //     if (e.target instanceof HTMLElement){
  //       const el = e.target;
  //       el.style.outline = `1px solid red`;
  //       setTimeout(()=>{
  //         el.style.removeProperty('outline');
  //       }, 3000);
  //     }
  //   });
  // }, []);

  return <ViewportInfo />;
}
