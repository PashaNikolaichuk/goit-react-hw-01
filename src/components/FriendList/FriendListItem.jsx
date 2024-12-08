import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendCard}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="75" />
      <p className={css.name}>{name}</p>
      <p
        className={`${css.status} 
      ${isOnline ? css.online : css.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
