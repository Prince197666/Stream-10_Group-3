import React from 'react';
import { useForm } from 'react-hook-form';
import useAuthentication from '../hooks/useUserAuthentication';

function SignIn(props) {
  // eslint-disable-next-line react/prop-types
  const { from } = props;
  const { signIn } = useAuthentication();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => signIn(data, from);

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
        <div className="form-group row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email Address:</label>
          <div className="col-sm-8">
            <input type="text" {...register('email')} className="form-control" />
          </div>
        </div>
        <br />
        <div className="row d-flex justify-content-evenly">
          <div className="col-4">
            <input type="submit" value="Create" />
          </div>
          <div className="col-4">
            <input type="reset" value="Reset" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
