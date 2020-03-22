import React from 'react';
import { News } from './components/news';
import source from './source.json';

export const App = () => {
	return (
		<>
			<News source={source} />
		</>
	)
};
