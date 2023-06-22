import React from 'react';
import throttle from '../../includes/throttle';

export const getDocumentHeight = () => Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);

export const getMaxScrollPosition = () => getDocumentHeight() - window.innerHeight;

// not window.scrollY and window.pageYOffset are the same but the latter has better browser support
export const getScrollPosition = () => Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

// Value is returned as a ratio (1 = 100%)
export const getScrollPercentage = () => getScrollPosition() / getMaxScrollPosition();

type ScrollContexValue = {
  scroll: number;
};
const scrollContext = React.createContext<ScrollContexValue>({} as ScrollContexValue);

/* This is from https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/ */
export default function ScrollProvider({ children }: { children: React.ReactNode; }) {
  const [scroll, setScroll] = React.useState(0);

  const handleWindowScroll = throttle(() => {
    setScroll(getScrollPosition());
  }, 50);

  React.useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    setScroll(getScrollPosition());

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <scrollContext.Provider value={{ scroll }}>
      {children}
    </scrollContext.Provider>
  );
}

export const useScroll = () => React.useContext(scrollContext);
