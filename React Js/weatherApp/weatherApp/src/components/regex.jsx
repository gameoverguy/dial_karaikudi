export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp(
  "^(?!.*\\s)(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+~\\-=:;',.\"<>?/|\\\\]).{8,20}$"
);
export const validMobile = new RegExp("^(?!.*\\s)[0-9]{10}$");

export const validUsername = new RegExp(
  "^(?!.*\\s)(?=.*[0-9])(?=.*[a-z]).{6,20}$"
);
