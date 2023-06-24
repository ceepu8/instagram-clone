import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/base'
import { getEmailOrPhoneNumber } from '@/utils/function'
import { FORM_REGISTER, registerInitialValues, registerSchema } from '@/validates/register.schema'
import AuthInput from '@/views/AuthViews/components/AuthInput'

import InstagramDisclaimer from '../InstagramDisclaimer'
import TermsAndPrivacyDisclaimer from '../TermsAndPrivacyDisclaimer'

const RegisterForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema()),
    defaultValues: registerInitialValues,
  })

  const watchPhoneOrEmail = watch(FORM_REGISTER.PHONE_OR_EMAIL, false)
  const watchFullName = watch(FORM_REGISTER.FULLNAME, false)
  const watchUsername = watch(FORM_REGISTER.USERNAME, false)
  const watchPassword = watch(FORM_REGISTER.PASSWORD, false)

  const onSubmit = (values) => {
    const clarifyData = getEmailOrPhoneNumber(values.phoneOrEmail)
    const { phoneOrEmail, ...rest } = values
    const newData = { ...clarifyData, ...rest }

    axios.post('/api/register', newData).then(() => {
      signIn('credentials', { ...newData, redirect: false }).then(async ({ error, ok }) => {
        if (ok) {
          router.replace('/', undefined, { scroll: true })
        }
      })
    })
  }

  return (
    <form className="w-full space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name={FORM_REGISTER.PHONE_OR_EMAIL}
        id={FORM_REGISTER.PHONE_OR_EMAIL}
        label="Mobile Phone or Email"
        register={register}
        errors={errors}
        isHaveValue={!isEmpty(watchPhoneOrEmail)}
      />
      <AuthInput
        name={FORM_REGISTER.FULLNAME}
        id={FORM_REGISTER.FULLNAME}
        label="Full Name"
        register={register}
        errors={errors}
        isHaveValue={!isEmpty(watchFullName)}
      />
      <AuthInput
        name={FORM_REGISTER.USERNAME}
        id={FORM_REGISTER.USERNAME}
        label="Username"
        register={register}
        errors={errors}
        isHaveValue={!isEmpty(watchUsername)}
      />
      <AuthInput
        name={FORM_REGISTER.PASSWORD}
        id={FORM_REGISTER.PASSWORD}
        label="Password"
        register={register}
        errors={errors}
        isHaveValue={!isEmpty(watchPassword)}
        type="password"
      />

      <div className="text-center">
        <InstagramDisclaimer />
        <TermsAndPrivacyDisclaimer />
      </div>

      <Button size="small" fullWidth type="submit" disabled={!isValid}>
        Sign up
      </Button>
    </form>
  )
}

export default RegisterForm
