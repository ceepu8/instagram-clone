import { useContext } from 'react'

import { AlertCircle } from '@/components/icons'
import { ToastContext } from '@/contexts/ToastProvider'

export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToastContext hook was called outside of Provider context')
  }
  return context
}

export const useToast = () => {
  const { toast } = useToastContext()

  const warningOptions = {
    icon: <AlertCircle fill="var(--warning)" color="var(--white)" />,
    duration: 1000,
  }

  return {
    default: (message) => toast(message),
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    loading: (message) => toast.loading(message),
    custom: (custom) => toast.custom(() => custom),
    warning: (message) => toast(message, warningOptions),
  }
}
