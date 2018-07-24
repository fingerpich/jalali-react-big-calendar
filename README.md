# jalali-react-big-calendar

An jalali events calendar component built for React and made for modern browsers (read: IE10+) and uses flexbox over the classic tables-ception approach.

This only makes [react-big-calendar](http://intljusticemission.github.io/react-big-calendar/) use jalali calendar system by [jalali-moment](https://github.com/fingerpich/jalali-moment)

## Use and Setup

`npm install jalali-react-big-calendar --save`

Include `react-big-calendar/lib/css/react-big-calendar.css` for styles, and make sure your calendar's container
element has a height, or the calendar won't be visible.

### example

```
import BigCalendar from 'jalali-react-big-calendar'
<BigCalendar events={[]} />
```
