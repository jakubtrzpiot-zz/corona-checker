import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CoronaData from './data';

const App = () => {
	var unirest = require('unirest');
	var req = unirest('GET', 'https://covid-193.p.rapidapi.com/statistics');

	req.query({
		country: 'poland',
	});
	req.headers({
		'x-rapidapi-host': 'covid-193.p.rapidapi.com',
		'x-rapidapi-key': '81fef1d965mshef8014d73e013e7p1933dcjsn07170ff4593b',
		useQueryString: true,
	});
	const [todayCases, setTodayCases] = useState('');
	const [activeCases, setActiveCases] = useState(0);
	const [criticalCases, setCriticalCases] = useState(0);
	const [recoveredCases, setRecoveredCases] = useState(0);
	const [totalCases, setTotalCases] = useState(0);
	const [totalDeaths, setTotalDeaths] = useState(0);
	const [date, setDate] = useState('');
	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		let [data] = res.body.response;
		setTodayCases(data.cases.new);
		setActiveCases(data.cases.active);
		setCriticalCases(data.cases.critical);
		setRecoveredCases(data.cases.recovered);
		setTotalCases(data.cases.total);
		setTotalDeaths(data.deaths.total);
		setDate(data.day);
	});

	return (
		<>
			<CoronaData
				today={todayCases}
				active={activeCases}
				critical={criticalCases}
				recovered={recoveredCases}
				total={totalCases}
				deaths={totalDeaths}
				date={date}
			/>
		</>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
