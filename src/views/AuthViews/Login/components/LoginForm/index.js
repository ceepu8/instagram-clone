import { yupResolver } from '@hookform/resolvers/yup'
import isEmpty from 'lodash/isEmpty'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/base'
import { getEmailOrPhoneOrUsername } from '@/utils'
import { FORM_LOGIN, loginInitialValues, loginSchema } from '@/validates/login.schema'
import AuthInput from '@/views/AuthViews/components/AuthInput'

const LoginForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema()),
    defaultValues: loginInitialValues,
  })

  const watchVerification = watch(FORM_LOGIN.VERIFICATION, false)
  const watchPassword = watch(FORM_LOGIN.PASSWORD, false)

  const onSubmit = (values) => {
    const clarifyVerification = getEmailOrPhoneOrUsername(values.verification)
    const newData = { ...clarifyVerification, password: values.password }

    signIn('credentials', { ...newData, redirect: false }).then(() => {
      router.push('/')
    })
  }

  return (
    <form className="w-full space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name={FORM_LOGIN.VERIFICATION}
        id={FORM_LOGIN.VERIFICATION}
        label="Phone number, username or email"
        register={register}
        errors={errors}
        isHaveValue={!isEmpty(watchVerification)}
      />

      <AuthInput
        name={FORM_LOGIN.PASSWORD}
        id={FORM_LOGIN.PASSWORD}
        label="Password"
        type="password"
        register={register}
        errors={errors}
        isHaveValue={!isEmpty(watchPassword)}
      />

      <Button size="small" fullWidth type="submit" disabled={!isValid}>
        Login
      </Button>
    </form>
  )
}

export default LoginForm