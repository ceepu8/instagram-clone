import * as Yup from 'yup'

// constants
const MAX_LEN_USERNAME = 25

const FORM_REGISTER = {
  EMAIL: 'email',
  FULLNAME: 'fullName',
  USERNAME: 'username',
  PASSWORD: 'password',
}

const registerInitialValues = {
  [FORM_REGISTER.EMAIL]: '',
  [FORM_REGISTER.FULLNAME]: '',
  [FORM_REGISTER.USERNAME]: '',
  [FORM_REGISTER.PASSWORD]: '',
}

const registerSchema = () =>
  Yup.object({
    [FORM_REGISTER.EMAIL]: Yup.string().email('Invalid Email').required('Required'),
    [FORM_REGISTER.FULLNAME]: Yup.string().required('Required'),
    [FORM_REGISTER.USERNAME]: Yup.string()
      .max(MAX_LEN_USERNAME, `Username should not exceed ${MAX_LEN_USERNAME} characters`)
      .required('Required'),
    [FORM_REGISTER.PASSWORD]: Yup.string().required('Required'),
  })

export { registerSchema, registerInitialValues, FORM_REGISTER }
