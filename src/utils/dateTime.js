import dayjs from 'dayjs'

import { DATE_MINUS } from '@/constants'
import configDayjs from '@/libs/dayjs'

export const getAge = (birthday) => (birthday ? dayjs().diff(dayjs(birthday), 'y') : '')

export const getDiff = (date, unit = 'h') => dayjs().diff(date, unit)

export const getDifferent = (from, to, unit = 'h') => dayjs(from).diff(to, unit)

export const getFirstDateFromAge = (age) => dayjs().subtract(age, 'year').format(DATE_MINUS)

export const getLastDateFromAge = (age) => dayjs().subtract(age, 'y').endOf('y')

export const subDate = (count, unit = 'd') => dayjs().subtract(count, unit)

export const formatDate = (date, unit) => dayjs(date || dayjs()).format(unit)

export const getDateUtc = (date) => dayjs(date).utc().format()

export const getMonth = (date) => dayjs(date).month()
export const getYear = (date) => dayjs(date).year()
export const getDay = (date) => dayjs(date).day()
export const getToday = () => dayjs().toDate()

export const getDayOfMonth = (date) => dayjs(date).date()

// ---

export const getTimeFromNow = (date) => configDayjs(date).fromNow()
