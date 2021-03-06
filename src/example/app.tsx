import './style/base_style.styl'
import './style/date_picker.styl'

import React, {FC} from 'react'

import SimpleReactCalendar from '../calendar/calendar'

const highlitedArray = [
  {start: new Date('05/01/2020'), end: new Date('05/09/2020')},
  {start: new Date('05/10/2020'), end: new Date('05/10/2020')},
  {start: new Date('05/13/2020'), end: new Date('05/13/2020')},
  {start: new Date('05/14/2020'), end: new Date('05/14/2020')},
  {start: new Date('05/15/2020'), end: new Date('05/15/2020')}
];

const App: FC = () => (
  <SimpleReactCalendar
    showOnlySelectedWeek={true}
    blockClassName='date_picker'
    selected={new Date('04/15/2020')}
    showWeekOnly={true}
    highlightedArray={highlitedArray}
    onSelect={({start, end}) => {
      /* eslint-disable no-console */
      console.log('>>>>>', {end, start})
    }}
  />
)

App.displayName = 'App'

export default App
