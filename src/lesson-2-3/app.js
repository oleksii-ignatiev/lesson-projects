import React from 'react';
import { Accordeon } from './components/accordeon';
import source from './source1.json';

export const App = () => {
	return (
		<>
			<Accordeon source={source} />
		</>
	)
};
