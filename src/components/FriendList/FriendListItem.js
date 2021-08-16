import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.statusOnline}></span>
      ) : (
        <span className={s.statusOffline}></span>
      )}

      <img
        className={s.avatar}
        src={avatar}
        alt={'Картинка - аватар пользователя ' + name}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
