import React from 'react';
import { useForm } from 'react-hook-form';
import useAuthentication from '../hooks/useUserAuthentication';

function Login() {
  const { login } = useAuthentication();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => login(JSON.stringify(data));

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
