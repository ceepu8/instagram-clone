/* eslint-disable no-console */
import delay from 'lodash/delay'
import { useState } from 'react'

export function useCopyToClipboard({ onSuccess } = {}) {
  const [copiedText, setCopiedText] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const copyToClipboard = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    setIsLoading(true)

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)

      // delay 1 second
      await new Promise((resolve) => {
        delay(() => {
          resolve()
        }, 1000)
      })

      onSuccess?.()
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return { copiedText, copyToClipboard, isLoading }
}
