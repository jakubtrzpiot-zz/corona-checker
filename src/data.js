import React from 'react';
import './data.scss';
const CoronaData = ({
	today,
	active,
	critical,
	recovered,
	total,
	deaths,
	time,
	population,
}) => {
	return (
		<div className="data">
		<p className="time">Dane z dnia: {time}GMT</p>
		<p>Przypadków dzisiaj: {today}</p>
		<p>Przypadki aktywne: {active}</p>
		<p>Przypadki w stanie krytycznym: {critical}</p>
		<p className="recovered">Wyzdrowieni: {recovered}</p>
		<p>Ogół przypadków: {total}</p>
		<p className="deaths">Dedki: {deaths}</p>
		<p>Populacja: {population}</p>
		<div id="chart_div"></div>
		</div>
	)
};

export default CoronaData;
