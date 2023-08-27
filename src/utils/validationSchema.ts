import * as yup from 'yup';

export const userSignUpValidationSchema = yup.object().shape({
  userName: yup.string().required('*Username is required'),
  email: yup
    .string()
    .email('*Please enter valid email')
    .required('*Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, '*Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, '*Password must have a capital letter')
    .matches(/\d/, '*Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      '*Password must have a special character',
    )
    .min(8, ({min}) => `*Password must be at least ${min} characters`)
    .required('*Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
export const changePasswordValidationSchema = yup.object().shape({
  currentPassword: yup.string().required('*Current Password is required'),
  newPassword: yup
    .string()
    .matches(/\w*[a-z]\w*/, '*Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, '*Password must have a capital letter')
    .matches(/\d/, '*Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      '*Password must have a special character',
    )
    .min(8, ({min}) => `*Password must be at least ${min} characters`)
    .required('*New Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('*Please enter valid email')
    .required('*Email is required'),
  password: yup.string().required('*Password is required'),
});
export const forgetValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('*Please enter valid email')
    .required('*Email is required'),
});
export const phoneNumberValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .min(10, '*Please enter valid Phone Number.')
    .required('*Phone Number is required'),
});
