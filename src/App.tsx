import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { UserType } from "./types/UserType";

export default function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm setUsers={ setUsers }/>
      <SearchResults/>
    </SearchContext.Provider>
  );
}
