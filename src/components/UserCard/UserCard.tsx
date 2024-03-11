import "./style.css";
import { UserType } from "../../types/UserType";

export function UserCard(user: UserType) {
  return (
    <div className="userCard">
      <img className="userPic" src={user.image} alt={user.id} />
      <div className="userInfo">
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <div>{user.address.city}</div>
      </div>
    </div>
  );
}
