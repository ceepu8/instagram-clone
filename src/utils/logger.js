/* eslint-disable no-console */

/* eslint-disable class-methods-use-this */
import { DEBUG } from '@/constants'

function blue(text) {
  return `\x1b[34m${text}\x1b[0m`
}

class Logger {
  info(message) {
    if (DEBUG) {
      console.info(blue('[INFO]'), message)
    }
  }

  log(message) {
    if (DEBUG) {
      console.log(blue('[LOG]'), message)
    }
  }

  warn(message) {
    if (DEBUG) {
      console.warn(message)
    }
  }

  error(message) {
    if (DEBUG) {
      console.error(message)
    }
    return ''
  }
}

const logger = new Logger()

export default logger
