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
  agenda: 'برنامه کار',

  showMore: total => `+${total} بیشتر`,
}

export default function messages(msgs) {
  return {
    ...defaultMessages,
    ...msgs,
  }
}
