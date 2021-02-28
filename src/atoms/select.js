import React from "react";

const Select = React.forwardRef(({ Values, name, list, placeholder }, ref) => {
  console.log({ Values });
  return (
    <div>
      <input list={list} name={name} ref={ref} placeholder={placeholder} />
      <datalist id={list}>
        {
        name === "timezone"
          ? 
          Values &&
            Values.map((data) => <option value={data} key={data} />)
          : name === "country"
          ?
           Values && Values.map(data => (
            <option value={`${data[1]}: ${data[0]}`} key={data[0]} />
           ))
          : Values &&
            Values.map((data) => <option value={data.name} key={data.id} />)
            }
      </datalist>
    </div>
    //     <select name={name} ref={ref} >
    //     <option value="">referral method</option>
    //     {referralMethods && referralMethods.map(referral => (
    //       <option value={referral.id} key={referral.id} >{referral.name}</option>
    //     ))}
    //   </select>
  );
});

export default Select;

// const Select = React.forwardRef(({ referralMethods, name }, ref) => {
//     return (
//       <select name={name} ref={ref} >
//       <option value="">referral method</option>
//       {referralMethods && referralMethods.map(referral => (
//         <option value={referral.id} key={referral.id} >{referral.name}</option>
//       ))}
//     </select>
//     );
//   });

//   export default Select;
