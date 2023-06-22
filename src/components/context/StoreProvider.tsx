import React from 'react';

// Example data store. This is for data that must be accessible across the whole app.
export type StoreData = {
  zip?: string,
  email?: string,
  modalOpen: boolean,
};
const defaultStore: StoreData = {
  modalOpen: false,
};
type StoreContexValue = [StoreData, (data: StoreData) => void];

// eslint-disable-next-line @typescript-eslint/no-empty-function
const storeContext = React.createContext<StoreContexValue>([defaultStore, () => {}]);

/* This is from https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/ */
export default function StoreProvider({ children }: { children: React.ReactNode; }) {
  const [store, setStore] = React.useState<StoreData>(defaultStore);

  const updateStore = (data: StoreData) => {
    setStore({
      ...store,
      ...data,
    });
  };

  return (
    <storeContext.Provider value={[store, updateStore]}>
      {children}
    </storeContext.Provider>
  );
}

export const useGlobalStore = () => React.useContext(storeContext);
