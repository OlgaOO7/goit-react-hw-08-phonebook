import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from "./Registration.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(register);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.regWrapper}>
      <h2 className={css.regTitle}>Registration</h2>
      <form onSubmit={handleSubmit} autoComplete="off" className={css.regForm}>
        <label className={css.regLabelForm}>
          Username
          <input type='text' name='name' className={css.regInputForm} />
        </label>
        <label className={css.regLabelForm}>
          Email
          <input type='email' name='email' className={css.regInputForm} />
        </label>
        <label className={css.regLabelForm}>
          Password
          <input type='password' name='password' className={css.regInputForm} />
        </label>
        <button type='submit' className={css.regBtn}>Register</button>
      </form>
    </div>
  );
};
