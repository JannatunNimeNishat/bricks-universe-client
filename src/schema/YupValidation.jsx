import * as Yup from 'yup'

const signUpSchema = Yup.object({
    name: Yup
        .string()
        .required('Please enter your name'),
    email: Yup
        .string()
        .required('Please enter your email')
        .email('invalid email'),
    password: Yup
        .string()
        .required('Please enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
            "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    photoURL: Yup
        .string()
})
export default signUpSchema;