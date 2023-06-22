import React from 'react';
import { useViewport } from '../context/ViewportProvider';

function getElementScrollTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + document.documentElement.scrollTop;
}

type ScrollAnchorProps = {
  anchor: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children: React.ReactNode;
};
export function ScrollAnchor({ anchor, className, onClick, children }: ScrollAnchorProps) {
  const { headerHeight } = useViewport();
  const hash = `#${anchor}`;
  return <a className={className} href={hash} onClick={(e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    const elTarget = document.querySelector(hash) as HTMLDivElement;
    const top =  getElementScrollTop(elTarget);
    window.scrollTo({
      top: top - headerHeight, // Leave extra space so the sticky header/nav doesn't cover the content
      left: 0,
      behavior: 'smooth',
    });
    history.pushState({}, '', hash);
  }}>{children}</a>;
}
