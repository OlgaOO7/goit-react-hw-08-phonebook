import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import userAvatar from '../../img/user.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = userAvatar;

  return (
    <div>
      <img src={avatar} alt="user avatar" width="32" />
      <p>Welcom, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
