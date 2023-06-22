import * as Yup from 'yup'

import { CHARACTER_REGEX, EMAIL_REGEX, PHONE_REGEX } from '@/constants'

// constants
const MAX_LEN_USERNAME = 25

const FORM_REGISTER = {
  PHONE_OR_EMAIL: 'phoneOrEmail',
  FULLNAME: 'fullName',
  USERNAME: 'username',
  PASSWORD: 'password',
}

const registerInitialValues = {
  [FORM_REGISTER.PHONE_OR_EMAIL]: '',
  [FORM_REGISTER.FULLNAME]: '',
  [FORM_REGISTER.USERNAME]: '',
  [FORM_REGISTER.PASSWORD]: '',
}

const registerSchema = () =>
  Yup.object({
    [FORM_REGISTER.PHONE_OR_EMAIL]: Yup.string()
      .required('Email or phone number is required')
      .test('is-email-or-phone', 'Invalid email or phone number', (value) => {
        return EMAIL_REGEX.test(value) || PHONE_REGEX.test(value)
      }),
    [FORM_REGISTER.FULLNAME]: Yup.string()
      .matches(CHARACTER_REGEX, 'Only alphabets are allowed for this field ')
      .required('Required'),
    [FORM_REGISTER.USERNAME]: Yup.string()
      .max(MAX_LEN_USERNAME, `Username should not exceed ${MAX_LEN_USERNAME} characters`)
      .required('Required'),
    [FORM_REGISTER.PASSWORD]: Yup.string().required('Required'),
  })

export { registerSchema, registerInitialValues, FORM_REGISTER }
