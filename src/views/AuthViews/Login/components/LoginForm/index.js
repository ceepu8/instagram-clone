import { yupResolver } from '@hookform/resolvers/yup'
import isEmpty from 'lodash/isEmpty'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/base'
import { FORM_LOGIN, loginInitialValues, loginSchema } from '@/validates/login.schema'

import Input from '../LoginInput'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
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
      <Input
        name={FORM_LOGIN.USERNAME}
        label="Phone number, username or email"
        register={register}
        isHaveValue={!isEmpty(watchName)}
      />

      <Input
        name={FORM_LOGIN.PASSWORD}
        label="Password"
        type="password"
        register={register}
        isHaveValue={!isEmpty(watchPassword)}
      />

      <div>
        <Button size="small" fullWidth type="submit" disabled={!isValid}>
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
