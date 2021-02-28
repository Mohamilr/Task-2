import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../utils/formValidationSchema";
import { SignupAction } from "../actions/register.action";
import { Referral, TimeZone, Country } from '../actions/formDataRequest.action';
import Input from "../atoms/input";
import Select from '../atoms/select';
import { referralSwitch } from '../utils/referralSwitch';

const Signup = () => {
  const referralMethods = useSelector(state => state.referral);
  const timeZones = useSelector(state => state.timezone);
  const countries = useSelector(state => state.country);


  const dispatch = useDispatch();  
  useEffect(() => {
    dispatch(Referral());
    dispatch(TimeZone());
    dispatch(Country());
  }, []);
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

    const code = referralSwitch(ref_methods);
   
    const countryCode = country.split(' ')[1];

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
      country: countryCode,
      timezone,
      ref_methods: code,
    };

    console.log(data)

    // dispatch(SignupAction(data));
  };

  // convert country object to an array
  const countryArray = Object.entries(countries);
  
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
      <Select Values={countryArray} name="country" list="country" ref={register} placeholder="country" />
      <p>{errors.country?.message}</p>
      <Select Values={timeZones} name="timezone" list="timezone" ref={register} placeholder="timezone" />
      <p>{errors.timezone?.message}</p>
      <Select Values={referralMethods} name="ref_methods" list="ref_methods" ref={register} placeholder="referral method" />
      <p>{errors.ref_methods?.message}</p>

      <Input type="submit" />
    
    </form>
  );
};

export default Signup;
