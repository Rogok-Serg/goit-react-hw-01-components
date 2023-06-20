import css from './FriendList.module.css';
import { FriendListItems } from './FriendListItems';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendListItems friends={friends} />
    </ul>
  );
};
