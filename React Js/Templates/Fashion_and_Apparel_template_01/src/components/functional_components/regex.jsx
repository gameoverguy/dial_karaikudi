export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
);
export const validMobile = new RegExp("^(?!.*\\s)[0-9]{10}$");
export const validName = new RegExp("^(?=.*[a-zA-Z])([a-zA-Z0-9 ]{3,40})$");
export const validSubject = new RegExp("^(?=.*[a-zA-Z])([a-zA-Z0-9 ]{3,40})$");
export const validMessage = new RegExp(
  "^(?=.*[a-zA-Z])([a-zA-Z0-9 ]{10,300})$"
);
