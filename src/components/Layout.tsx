import React from 'react';
import { GlobalStyle } from '../includes/style';
import Header from './layout/Header';
import Footer from './layout/Footer';
import SkipToContent from './layout/SkipTocontent';

type LayoutProps = {
  children: React.ReactNode
};
export default function Layout({ children }: LayoutProps) {
  return <>
    <GlobalStyle />
    <SkipToContent contentId="content" />{/* For A11y */}
    <Header />
    <main id="content">{children}</main>
    <Footer />
  </>;
}
