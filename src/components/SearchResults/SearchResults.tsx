import "./style.css";
import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

export function SearchResults() {
  const users = useContext(SearchContext)?.users;

  return (
    <div className="usersList">
      {
        users && users?.length > 0 ? (
          users?.map((user) => <UserCard key={user.id} {...user} />)
        ) : users?.length === 0 ? (
          <div className="userNotFound">
            <p>Пользователь не найден. <span>Введите другие данные</span></p>
          </div>
        ) :
          <span>Введите имя пользователя</span>
        }
    </div>
  );
}
