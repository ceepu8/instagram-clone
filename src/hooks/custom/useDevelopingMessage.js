import { useToast } from './useToast'

export const useDevelopingMessage = () => {
  const { warning } = useToast()

  const showMessage = (message = 'Developing function') => {
    warning(message)
  }

  return showMessage
}
