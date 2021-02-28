import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../utils/formValidationSchema";
import Input from '../atoms/input';

const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const submit = (body) => {
    const {
      username,
      email,
      password,
      first_name,
      last_name,
      gender,
      phone,
      birth_date,
      city,
      state,
      country,
      timezone,
      ref_methods,
    } = body;


    const data = {
      user: {
        username,
        email,
        password,
        first_name,
        last_name,
      },
      gender,
      phone,
      birth_date,
      city,
      state,
      country,
      timezone,
      ref_methods,
    };
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="username"
        name="username"
        ref={register}
      />
      <p>{errors.username?.message}</p>
      <Input type="email" placeholder="email" name="email" ref={register} />
      <p>{errors.email?.message}</p>
      <Input
        type="password"
        placeholder="********"
        name="password"
        ref={register}
      />
      <p>{errors.password?.message}</p>
      <Input
        type="text"
        placeholder="first name"
        name="first_name"
        ref={register}
      />
      <p>{errors.first_name?.message}</p>
      <Input
        type="text"
        placeholder="last name"
        name="last_name"
        ref={register}
      />
      <p>{errors.last_name?.message}</p>
      <Input type="text" placeholder="gender" name="gender" ref={register} />
      <p>{errors.gender?.message}</p>
      <Input
        type="number"
        placeholder="+2341234567890"
        name="phone"
        ref={register}
      />
      <p>{errors.phone?.message}</p>
      <Input
        type="date"
        placeholder="date of birth"
        name="birth_date"
        ref={register}
      />
      <p>{errors.birth_date?.message}</p>
      <Input type="text" placeholder="city" name="city" ref={register} />
      <p>{errors.city?.message}</p>
      <Input type="text" placeholder="state" name="state" ref={register} />
      <p>{errors.state?.message}</p>
      <Input type="text" placeholder="country" name="country" ref={register} />
      <p>{errors.country?.message}</p>
      <Input
        type="text"
        placeholder="timezone"
        name="timezone"
        ref={register}
      />
      <p>{errors.timezone?.message}</p>
      <Input
        type="number"
        placeholder="ref_methods"
        name="ref_methods"
        ref={register}
      />
      <p>{errors.ref_methods?.message}</p>
      <Input type="submit" />
    </form>
  );
};

export default Signup;
