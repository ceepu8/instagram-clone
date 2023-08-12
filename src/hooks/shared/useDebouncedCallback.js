import { useDebouncedCallback as useDebouncedCallbackLib } from 'use-debounce'

import { DEBOUNCE_DELAY, DEBOUNCE_OPTIONS } from '@/constants'

export const useDebouncedCallback = (func, delay = DEBOUNCE_DELAY, options = DEBOUNCE_OPTIONS) =>
  useDebouncedCallbackLib(func, delay, options)
