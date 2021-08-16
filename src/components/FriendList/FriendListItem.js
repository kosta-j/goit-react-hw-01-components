import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={s.item}>
      <span className={s.status + ' ' + s.offline}></span>
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
