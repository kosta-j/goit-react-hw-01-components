import s from './FriendList.css';
import PropTypes from 'prop-types';

export default function FriendListItem(friend) {
  const { avatar, name, isOnline, id } = friend;
  console.log(friend);
  return (
    <li className={s.item} key={id}>
      <span className={s.status + s.offline}></span>
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
