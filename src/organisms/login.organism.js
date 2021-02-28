import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../utils/formValidationSchema';
import Input from '../atoms/input';

const Login = () => {
const { register, handleSubmit, errors } = useForm({
  resolver: yupResolver(loginSchema)
});

const submit = (body) => {
console.log(body);
}
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input type='text' placeholder='username' name='username' ref={register} />
      <p>{errors.username?.message}</p>
      <Input type='password' placeholder='********' name='password' ref={register} />
      <p>{errors.password?.message}</p>
      <Input type="submit" />
    </form>
  );
};

export default Login;


// const Login = () => {
//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(loginSchema)
//   });
  
//   const submit = (body) => {
//   console.log(body);
//   }
//     return (
//       <form onSubmit={handleSubmit(submit)}>
//         <input type='text' placeholder='username' name='username' ref={register} />
//         <p>{errors.username?.message}</p>
//         <input type='password' placeholder='********' name='password' ref={register} />
//         <p>{errors.password?.message}</p>
//         <input type="submit" className="btn-reg" />
//       </form>
//     );
//   };
  
//   export default Login;
