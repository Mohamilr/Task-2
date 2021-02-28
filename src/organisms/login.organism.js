import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from 'react-router-dom';
import { loginSchema } from "../utils/formValidationSchema";
import { LoginAction } from "../actions/register.action";
import Input from "../atoms/input";


const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // redux state
  const redirect = useSelector(state => state.login);

  const dispatch = useDispatch();
  const submit = (body) => {
    console.log(body);

    dispatch(LoginAction(body));
  };

  if (redirect) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="username"
        name="username"
        ref={register}
      />
      <p>{errors.username?.message}</p>
      <Input
        type="password"
        placeholder="********"
        name="password"
        ref={register}
      />
      <p>{errors.password?.message}</p>
      <Input type="submit" />
    </form>
  );
};

export default Login;
