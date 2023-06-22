import React from 'react';
import throttle from '../../includes/throttle';

type ViewportContexValue = {
  width: number;
  height: number;
  headerHeight: number;
  setHeaderHeight: (headerHeight: number) => void
};
const viewportContext = React.createContext<ViewportContexValue>({} as ViewportContexValue);

/* This is from https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/ */
export default function ViewportProvider({ children }: { children: React.ReactNode; }) {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [headerHeight, setHeaderHeight] = React.useState(0);

  const handleWindowResize = throttle(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, 250);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <viewportContext.Provider value={{
      width, height, headerHeight, setHeaderHeight, 
    }}>
      {children}
    </viewportContext.Provider>
  );
}

export const useViewport = () => React.useContext(viewportContext);
