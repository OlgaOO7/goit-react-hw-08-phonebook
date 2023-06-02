import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import userAvatar from '../../img/user.png';
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = userAvatar;

  return (
    <div className={css.useMenuWrapper}>
      <img src={avatar} alt="user avatar" width="24" height="24" />
      <p className={css.greetText}>Welcom, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())} className={css.logOutBtn}>
        Logout
      </button>
    </div>
  );
};
