import React from 'react';
import styled from 'styled-components';

const SkipToContentStyle = styled.a`
  //This is off screen until you use tab to focus the element
  position: absolute;
  right: 100%;

  &:focus{
    z-index: 10000;
    right: 50%;
    padding: 4px 12px;
    background: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 2px 6px rgba(0,0,0,.5);
    transform: translateX(50%);
  }
`;

interface SkipToContentProps extends React.HTMLProps<HTMLAnchorElement> {
  contentId: string;
}

/* For A11y */
export default function SkipToContent({ contentId }: SkipToContentProps) {
  return <SkipToContentStyle className="skip-to-content" href={`#${contentId}`}>Skip to main content</SkipToContentStyle>;
}
