import React from 'react';
import { useForm } from 'react-hook-form';
import useAuthentication from '../hooks/useUserAuthentication';

function Login(props) {
  // eslint-disable-next-line react/prop-types
  const { from } = props;
  const { login } = useAuthentication();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => login(JSON.stringify(data), from);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        User Nname
        <input {...register('name')} />
        <br />
        Password
        <input {...register('password')} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
