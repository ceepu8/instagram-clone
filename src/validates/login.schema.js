import * as Yup from 'yup'

import { EMAIL_REGEX, PHONE_REGEX } from '@/constants'

// constants
const MAX_LEN_USERNAME = 50

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
      .test('is-email-or-phone-or-username', 'Invalid email, phone number', (value) => {
        return EMAIL_REGEX.test(value) || PHONE_REGEX.test(value) || value
      })
      .required('Required'),
    [FORM_LOGIN.PASSWORD]: Yup.string().required('Required'),
  })

export { loginSchema, loginInitialValues, FORM_LOGIN }
