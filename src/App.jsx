import List from './list';

import './app.scss';
function App() {
	let vida = [
		{ id: 1, item: 'mujer', cantidad: 1 },
		{ id: 2, item: 'hijo', cantidad: 1 },
		{ id: 3, item: 'trabajo', cantidad: 0 },
		{ id: 4, item: 'auto', cantidad: 0 },
		{ id: 5, item: 'casa', cantidad: 0 },
	];
	return (
		<>
			<List items={vida} category="Vida" />
		</>
	);
}

export default App;
