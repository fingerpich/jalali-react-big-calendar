import invariant from 'invariant'

let defaultMessages = {
  date: 'تاریخ',
  time: 'زمان',
  event: 'رخداد',
  allDay: 'همش',
  week: 'هفته',
  work_week: 'روز کاری',
  day: 'روز',
  month: 'ماه',
  previous: 'قبلی',
  next: 'بعدی',
  yesterday: 'دیروز',
  tomorrow: 'فردا',
  today: 'امروز',
  agenda: 'agenda',

  showMore: total => `+${total} بیشتر`,
}

export function set(key, msg) {
  invariant(
    messages.hasOwnProperty(key),
    `The message key: "${key}" is not a valid message name. ` +
      `valid keys are: ${Object.keys(messages).join(', ')}`
  )

  messages[key] = msg
}

export function result(msg, ...args) {
  return typeof msg === 'function' ? msg(args) : msg
}

export default function messages(msgs) {
  return {
    ...defaultMessages,
    ...msgs,
  }
}
