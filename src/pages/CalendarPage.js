import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const locales = {
	'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const events = [
	{
		title: 'HIIT',
		start: new Date(2023, 1, 5, 7, 0, 0),
		end: new Date(2023, 1, 5, 8, 0, 0),
		color: '#2f6d68',
		border: 'none',
	},
	{
		title: 'Build',
		start: new Date(2023, 1, 6, 8, 0, 0),
		end: new Date(2023, 1, 6, 9, 0, 0),
		color: '#d7a31b',
	},
	{
		title: 'Speed',
		start: new Date(2023, 1, 7, 8, 0, 0),
		end: new Date(2023, 1, 7, 9, 0, 0),
		color: '#6ab9e2',
	},
	{
		title: 'Boxing',
		start: new Date(2023, 1, 8, 8, 0, 0),
		end: new Date(2023, 1, 8, 9, 0, 0),
		color: '#fca16c',
	},
];

function CalendarPage() {
	const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
	const [allEvents, setAllEvents] = useState(events);

	function handleAddEvent() {
		for (let i = 0; i < allEvents.length; i++) {
			const d1 = new Date(allEvents[i].start);
			const d2 = new Date(newEvent.start);
			const d3 = new Date(allEvents[i].end);
			const d4 = new Date(newEvent.end);

			if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
				alert('CLASH');
				break;
			}
		}

		setAllEvents([...allEvents, newEvent]);
	}

	return (
		<div className="App py-5">
			<h1 className="py-4">Calendar</h1>
			<Calendar
				min={new Date(2023, 0, 0, 5, 0, 0, 0)}
				max={new Date(2030, 0, 0, 22, 0, 0, 0)}
				localizer={localizer}
				defaultView="month"
				views={['day', 'week', 'month']}
				events={allEvents}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500, margin: '5px' }}
				eventPropGetter={(events) => {
					const backgroundColor = events.color ? events.color : 'blue';
					return { style: { backgroundColor } };
				}}
			/>
		</div>
	);
}

export default CalendarPage;
