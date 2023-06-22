import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useViewport } from '../context/ViewportProvider';
import OldBrowserButterBar from '../modals/OldBrowserButterBar';
import Navigation from './Navigation';

const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px -10px rgb(0 0 0 / 60%);
`;

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { width, setHeaderHeight } = useViewport();

  /*
    This is ultimately used by ScrollAnchor to determine how much space to leave so the
    sticky navigation bar doesn't cover any content when scrolling to a position on the page.
  */
  useEffect(() => {
    const elHeader = headerRef.current;
    if (!elHeader) return;
    setHeaderHeight(elHeader.offsetHeight);
  }, [width]);

  return <HeaderStyle id="header" ref={headerRef}>
    <OldBrowserButterBar />
    <Navigation />
  </HeaderStyle>;
}
