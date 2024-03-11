import "./styles.css";
import useFetch from "./useFetch";
import { useState, useEffect, useRef } from "react";
import { UserType } from "../../types/UserType";

type PropsType = {
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
};

export function SearchForm({
  setUsers,
}: PropsType) {
  const [searchUser, setSearchUser] = useState("");
  const inputRef = useRef(null);

  const data = useFetch(searchUser);

  useEffect(() => {
    setUsers(data.users);
  }, [data]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Введите имя пользователя"
          value={searchUser}
          onChange={(evt) => {
            setSearchUser(evt.target.value);
          }}
        />
      </form>
    </div>
  );
}
