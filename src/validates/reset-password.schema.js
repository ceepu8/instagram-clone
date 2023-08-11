import * as Yup from 'yup'

import { EMAIL_REGEX, PHONE_REGEX } from '@/constants'

// constants
const MAX_LEN_USERNAME = 50

const FORM_RESET_PASSWORD = {
  VERIFICATION: 'verification',
}

const resetPasswordInitialValues = {
  [FORM_RESET_PASSWORD.VERIFICATION]: '',
}

const resetPasswordSchema = () =>
  Yup.object({
    [FORM_RESET_PASSWORD.VERIFICATION]: Yup.string()
      .max(MAX_LEN_USERNAME, `Username should not exceed ${MAX_LEN_USERNAME} characters`)
      .test('is-email-or-phone-or-username', 'Invalid email, phone number', (value) => {
        return EMAIL_REGEX.test(value) || PHONE_REGEX.test(value) || value
      })
      .required('Required'),
  })

export { resetPasswordSchema, resetPasswordInitialValues, FORM_RESET_PASSWORD }
