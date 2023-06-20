import PropTypes from 'prop-types';
import css from './FriendListItems.module.css';

export const FriendListItems = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span
            className={css.status}
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          >
            {friend.isOnline}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItems.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
