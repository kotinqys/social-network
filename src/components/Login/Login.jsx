import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/thunk/auth';
import { required } from '../../utils/validators';

import Input from '../common/Input';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Вход</h2>
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

const LoginForm = reduxForm({
  form: 'login',
})(Form);

function Login(props) {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => ({
    isAuth: state.auth.isAuth,
  }));
  const onSubmit = (data) => {
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
