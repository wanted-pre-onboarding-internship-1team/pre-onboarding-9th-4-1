import { createContext } from 'react';

const SearchContext = createContext<{ keyword: string }>('');
