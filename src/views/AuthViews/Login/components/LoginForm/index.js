import { yupResolver } from '@hookform/resolvers/yup'
import isEmpty from 'lodash/isEmpty'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/base'
import { FORM_LOGIN, loginInitialValues, loginSchema } from '@/validates/login.schema'
import AuthInput from '@/views/AuthViews/components/AuthInput'

const LoginForm = () => {
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

  const watchName = watch(FORM_LOGIN.USERNAME, false)
  const watchPassword = watch(FORM_LOGIN.PASSWORD, false)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className="w-full space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name={FORM_LOGIN.USERNAME}
        id={FORM_LOGIN.USERNAME}
        label="Phone number, username or email"
        register={register}
        errors={errors}
        isHaveValue={!isEmpty(watchName)}
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
