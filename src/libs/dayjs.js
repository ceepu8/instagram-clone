import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

const config = {
  thresholds: [
    { l: 's', r: 1 },
    { l: 'm', r: 1 },
    { l: 'mm', r: 59, d: 'minute' },
    { l: 'h', r: 1 },
    { l: 'hh', r: 23, d: 'hour' },
    { l: 'd', r: 1 },
    { l: 'dd', r: 6, d: 'day' },
    { l: 'w', r: 1 },
    { l: 'ww', r: 3, d: 'week' },
    { l: 'M', r: 1 },
    { l: 'MM', r: 11, d: 'month' },
    { l: 'y', r: 1 },
    { l: 'yy', d: 'year' },
  ],
}
dayjs.extend(relativeTime, config)

dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: '%d week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
})

export default dayjs

// import dayjs from 'dayjs'
// import calendar from 'dayjs/plugin/calendar'
// import duration from 'dayjs/plugin/duration'
// import isBetween from 'dayjs/plugin/isBetween'
// import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
// import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
// import relativeTime from 'dayjs/plugin/relativeTime'
// import timezone from 'dayjs/plugin/timezone'
// import updateLocale from 'dayjs/plugin/updateLocale'
// import utc from 'dayjs/plugin/utc'
// import weekOfYear from 'dayjs/plugin/weekOfYear'

// const locales = {
//   ja: () => import('dayjs/locale/ja'),
//   en: () => import('dayjs/locale/en'),
// }

// dayjs.extend(calendar)
// dayjs.extend(duration)
// dayjs.extend(isBetween)
// dayjs.extend(isSameOrAfter)
// dayjs.extend(isSameOrBefore)
// dayjs.extend(relativeTime)
// dayjs.extend(timezone)
// dayjs.extend(updateLocale)
// dayjs.extend(utc)
// dayjs.extend(weekOfYear)

// export function loadDayjsLocale(locale) {
//   locales[locale]().then(() => {
//     dayjs.locale(locale)
//   })
// }
