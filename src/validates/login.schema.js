import * as Yup from 'yup'

// constants
const MAX_LEN_USERNAME = 25

const FORM_LOGIN = {
  VERIFICATION: 'verification',
  PASSWORD: 'password',
}

const loginInitialValues = {
  [FORM_LOGIN.VERIFICATION]: '',
  [FORM_LOGIN.PASSWORD]: '',
}

const loginSchema = () =>
  Yup.object({
    [FORM_LOGIN.VERIFICATION]: Yup.string()
      .max(MAX_LEN_USERNAME, `Username should not exceed ${MAX_LEN_USERNAME} characters`)
      .required('Required'),
    [FORM_LOGIN.PASSWORD]: Yup.string().required('Required'),
  })

export { loginSchema, loginInitialValues, FORM_LOGIN }
