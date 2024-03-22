import './App.css';
import AddBook from './components/AddBook/AddBook';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import List from './components/List/List';

function App() {
	const books = [
		{ id: 1, name: 'book1' },
		{ id: 2, name: 'book2' },
		{ id: 3, name: 'book3' },
		{ id: 4, name: 'book4' },
	];
	return (
		<>
			<Header />
			<Info books={books} />
			<Filter />
			<AddBook />
			<List books={books} />
		</>
	);
}

export default App;
