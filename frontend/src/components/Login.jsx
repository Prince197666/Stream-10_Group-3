
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuthentication from '../hooks/useUserAuthentication';

function Login(props) {
  // eslint-disable-next-line react/prop-types
  const { from } = props;
  const { login } = useAuthentication();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => login(JSON.stringify(data), from);
  const navigate = useNavigate();
  const signIn = () => {
    const signInId = 1;
    if (from === 'moderators') {
      navigate(`/Moderate/${signInId}`);
    } else {
      navigate(`/Analyse/${signInId}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row mb-3">
          <label htmlFor="user-name" className="col-sm-2 col-form-label">User Name:</label>
          <div className="col-sm-4">
            <input type="text" {...register('name')} className="form-control" />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
          <div className="col-sm-4">
            <input type="text" {...register('password')} className="form-control" />
          </div>
        </div>
        <br />
        <div className="row d-flex justify-content-evenly">
          <div className="col-4">
            <input type="submit" value="Login" />
          </div>
          <div className="col-4">
            <input type="button" value="Sign in" onClick={signIn} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
