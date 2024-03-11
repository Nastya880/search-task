import { createContext } from "react";
import { SearchContextType } from "../../types/SearchContextType";

export const SearchContext = createContext<SearchContextType>( {
  users: [],
});
