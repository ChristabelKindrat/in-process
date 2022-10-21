import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';

// styles
import cn from 'classnames';
import css from './login.module.scss';

import login from 'assets/images/icons/login.png';

import { Input, Button } from 'components';
import { loginValidator } from './login.validators';
import { FormLayout } from '../';

const Login: FC = () => {
  const [] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: joiResolver(loginValidator),
    mode: 'onSubmit',
  });

  let submit = async (value: object) => {
    try {
      await console.log(value);
    } catch (e) {}
  };

  return (
    <FormLayout
      header={'Welcome to our team!'}
      icon={login}
      iconStyles={{ transform: 'scale(-1, -1)' }}
    >
      <form className={css['form-wrapper']} onSubmit={handleSubmit(submit)}>
        <Input
          type={'email'}
          label={'email'}
          {...register('email')}
          inputRef={register('email').ref}
          error={!!errors.email}
          errorText={errors.email?.message}
        />

        <Input
          type={'password'}
          label={'password'}
          {...register('password')}
          inputRef={register('password').ref}
          error={!!errors.password}
          errorText={errors.password?.message}
        />

        <label className={css.login__forgot}>
          <Link className={css.login__link} to={'/forgot-password'}>
            Forgot password?
          </Link>
        </label>

        <Button type={'submit'} fullWidth>
          Login
        </Button>

        <div className={css['navigate-form-wrapper']}>
          Don't have access yet?
          <Link to={'/get-access'}>Get Access</Link>
        </div>
      </form>
    </FormLayout>
  );
};

export { Login };
