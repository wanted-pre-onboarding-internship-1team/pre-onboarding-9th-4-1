import { createContext, ReactNode, useRef } from 'react';

export const TableContext = createContext<any>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const instanceRef = useRef(null);

  return (
    <TableContext.Provider value={instanceRef}>
      {children}
    </TableContext.Provider>
  );
};

export default ProductProvider;
