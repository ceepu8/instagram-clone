import { useToast } from './useToast'

export const useDevelopingMessage = () => {
  const { warning } = useToast()

  const displayMessage = () => {
    warning('Developing function')
  }

  return displayMessage
}
