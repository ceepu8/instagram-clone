import { useContext } from 'react'

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

  return {
    default: (message) => toast(message),
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    // style: (message) => toast(message, styleOptions),
    loading: (message) => toast.loading(message),
    custom: (custom) => toast.custom(() => custom),
  }
}
