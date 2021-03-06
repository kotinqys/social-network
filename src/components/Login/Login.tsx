import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { AppStateType } from '../../redux/store';
import { login } from '../../redux/thunk/auth';
import { required } from '../../utils/validators';

import Input from '../common/Input';

type StatePropsType = {
  error:boolean
}

const Form = (props:any) => {
  const { error } = useSelector((state:AppStateType):StatePropsType => ({
    error: state.auth.error,
  }));
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Вход</h2>
      {error && <p style={{ color: 'red', fontSize: '14px' }}>Неверный логин или пароль</p>}
      <Field placeholder='login' name='email' validate={[required]} component={Input} />
      <Field
        placeholder='password'
        name='password'
        component={Input}
        validate={[required]}
        type='password'
      />
      <div className='checkbox'>
        <Field type='checkbox' name='rememberMe' component={Input} />
        <span> запомнить меня</span>
      </div>
      <button>Войти</button>
    </form>
  );
};


type StatePropsLoginType = {
  isAuth:boolean
}

const LoginForm = reduxForm({
  form: 'login',
})(Form);

function Login() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state:AppStateType):StatePropsLoginType => ({
    isAuth: state.auth.isAuth,
  }));
  const onSubmit = (data:any) => {
    dispatch(login(data));
  };

  if (isAuth) {
    return <Redirect to='/profile' />;
  }

  return (
    <div className='login'>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;
