import { useRef, useState } from 'react';
import styles from './SignUp.module.scss';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { signup } = useAuth();
  const [field, setField] = useState('syjj');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordConfirm.current.value === passwordConfirm.current.value) {
      signup(email.current.value, passwordConfirm.current.value);
    }
  };

  const passwword = useRef();
  const email = useRef();
  const passwordConfirm = useRef();
  return (
    <div className={styles.root}>
      <div className="flex justify-center mb-5 ">
        <form
          action="action_page.php"
          method="post"
          className="flex flex-col  items-center   bg-yellow max-w-xl ">
          <div className="flex flex-col gap-3 ">
            <label className="flex   flex-col items-center" for="uname">
              <b>Email </b>
            </label>
            <input
              ref={email}
              className="  border-1 border-black"
              type="text"
              placeholder="Enter email"
              name="uname"
              required
            />

            <label className=" flex  flex-col items-center" for="uname">
              <b>Password </b>
            </label>
            <input
              ref={passwword}
              className="  border-1 border-black"
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <label className=" flex  flex-col items-center" for="uname">
              <b>Confirm password </b>
            </label>
            <input
              ref={passwordConfirm}
              className="  border-1 border-black"
              type="text"
              placeholder="Confirm password"
              name="uname"
              required
            />
            <button onClick={handleSubmit} тtype="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
