import s from './FriendList.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList(friends) {
  return (
    <ul className={s.friendList}>
      <FriendListItem friend={friends[0]} />
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
