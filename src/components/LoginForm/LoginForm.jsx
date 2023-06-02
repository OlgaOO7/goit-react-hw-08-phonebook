import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.logWrapper}>
      <h2 className={css.logTitle}>Log in</h2>
      <form onSubmit={handleSubmit} autoComplete="off" className={css.logForm}>
        <label className={css.logLabelForm}>
          Email
          <input type="email" name="email" className={css.logInputForm} />
        </label>
        <label className={css.logLabelForm}>
          Password
          <input type="password" name="password" className={css.logInputForm} />
        </label>
        <button type="submit" className={css.logBtn}>
          Log In
        </button>
      </form>
    </div>
  );
};
