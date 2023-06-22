import { yupResolver } from '@hookform/resolvers/yup'
import isEmpty from 'lodash/isEmpty'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/base'
import { FORM_REGISTER, registerInitialValues, registerSchema } from '@/validates/register.schema'
import AuthInput from '@/views/AuthViews/components/AuthInput'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema()),
    defaultValues: registerInitialValues,
  })

  const watchEmail = watch('email', false)
  const watchFullName = watch('fullName', false)
  const watchUsername = watch('username', false)
  const watchPassword = watch('password', false)

  const onSubmit = (data) => {
    console.log(data)
  }

  const agreeToProvideInfo = (
    <div className="text-xs leading-4">
      <span>
        People who use our service may have uploaded your contact information to Instagram.{' '}
      </span>
      <Link href="/">
        <span className="text-metallic-blue font-semibold">Learn More</span>
      </Link>
    </div>
  )

  const agreeWithPolicy = (
    <div className="text-xs leading-4 mt-4">
      By signing up, you agree to our and{' '}
      <Link href="/">
        <span className="text-metallic-blue font-semibold">Terms , Privacy Policy</span>
      </Link>{' '}
      and{' '}
      <Link href="/">
        <span className="text-metallic-blue font-semibold">Cookies Policy.</span>
      </Link>
    </div>
  )

  return (
    <form className="w-full space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name={FORM_REGISTER.EMAIL}
        label="Email"
        register={register}
        isHaveValue={!isEmpty(watchEmail)}
      />
      <AuthInput
        name={FORM_REGISTER.FULLNAME}
        label="Full Name"
        register={register}
        isHaveValue={!isEmpty(watchFullName)}
      />
      <AuthInput
        name={FORM_REGISTER.USERNAME}
        label="Username"
        register={register}
        isHaveValue={!isEmpty(watchUsername)}
      />
      <AuthInput
        name={FORM_REGISTER.PASSWORD}
        label="Password"
        register={register}
        isHaveValue={!isEmpty(watchPassword)}
        type="password"
      />

      <div className="text-center">
        {agreeToProvideInfo}
        {agreeWithPolicy}
      </div>

      <Button size="small" fullWidth type="submit" disabled={!isValid}>
        Sign up
      </Button>
    </form>
  )
}

export default RegisterForm
