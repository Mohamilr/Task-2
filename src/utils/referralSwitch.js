export function referralSwitch(ref_methods) {
  let code;
  switch (ref_methods) {
    case "Twitter":
      return (code = 1);
    case "Instagram":
      return (code = 2);
    case "Facebook":
      return (code = 3);
    case "LinkedIn":
      return (code = 4);
    case "Google Play Store":
      return (code = 5);
    case "Apple App Store":
      return (code = 6);
    default:
      return code;
  }
}
