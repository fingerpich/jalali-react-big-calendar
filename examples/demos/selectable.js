import React from 'react'
import BigCalendar from '../../src/index.js'
import events from '../events'
import jm from 'jalali-moment'

let Selectable = ({ localizer }) => (
  <React.Fragment>
    <h3 className="callout">
      Click an event to see more info, or drag the mouse over the calendar to
      select a date/time range.
    </h3>
    <BigCalendar
      selectable
      events={events}
      localizer={localizer}
      defaultView={BigCalendar.Views.WEEK}
      scrollToTime={new Date(1970, 1, 1, 6)}
      defaultDate={new Date(2015, 3, 12)}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={slotInfo =>
        alert(
          `selected slot: \n\nstart ${jm(slotInfo.start)
            .locale('fa')
            .format()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
        )
      }
    />
  </React.Fragment>
)

export default Selectable
