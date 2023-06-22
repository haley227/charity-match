import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useViewport } from '../context/ViewportProvider';
import Container from '../layout/Container';

const StyledSection = styled.section`
  background: #F9CC9D;

  ${Container}{
    background: #A7C29B;
  }
  .inner{
    background: #A0C5E8;
  }
`;

export default function Containers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useViewport();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const elContainer = containerRef.current;
    if (elContainer) {
      setContainerWidth(elContainer.offsetWidth);
    }
  }, [width]);

  return <StyledSection>
    <Container className="border" ref={containerRef}>
      <div className="inner">Container width: <code>{containerWidth}px</code></div>
    </Container>
  </StyledSection>;
}
