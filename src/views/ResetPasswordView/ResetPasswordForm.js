import { yupResolver } from '@hookform/resolvers/yup'
import { isEmpty } from 'lodash'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/base'
import { AuthInput } from '@/components/form'
import { getEmailOrPhoneOrUsername } from '@/utils'
import {
  FORM_RESET_PASSWORD,
  resetPasswordInitialValues,
  resetPasswordSchema,
} from '@/validates/reset-password.schema'

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(resetPasswordSchema()),
    defaultValues: resetPasswordInitialValues,
  })

  const watchVerification = watch(FORM_RESET_PASSWORD.VERIFICATION, false)

  const onSubmit = (values) => {
    const clarifyVerification = getEmailOrPhoneOrUsername(values.verification)
    console.log(clarifyVerification)
  }

  return (
    <div className="w-full mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <AuthInput
          name={FORM_RESET_PASSWORD.VERIFICATION}
          id={FORM_RESET_PASSWORD.VERIFICATION}
          label="Email, Phone or Username"
          register={register}
          errors={errors}
          isHaveValue={!isEmpty(watchVerification)}
        />

        <Button
          size="small"
          fullWidth
          type="submit"
          disabled={!isValid}
          // loading={isLoading}
        >
          Login
        </Button>
      </form>
    </div>
  )
}

export default ResetPasswordForm
