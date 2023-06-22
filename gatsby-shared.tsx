/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import StoreProvider from './src/components/context/StoreProvider';
import ViewportProvider from './src/components/context/ViewportProvider';
import ScrollProvider from './src/components/context/ScrollProvider';
import Layout from './src/components/Layout';
import { GlobalStyle } from './src/includes/style';

export function wrapRootElement({ element }) {
  return <ViewportProvider><ScrollProvider><StoreProvider>{element}</StoreProvider></ScrollProvider></ViewportProvider>;
}

export function wrapPageElement({ element, props }) {
  return <Layout {...props}><GlobalStyle />{element}</Layout>;
}
