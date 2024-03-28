import { useState } from 'react';
import './App.css';

import { data } from '../data';

import AddBook from './components/AddBook/AddBook';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import List from './components/List/List';
import { useFilterBook } from './hooks/useFilterBook';

function App() {
	const [books, setBooks] = useState(data);
	const [text, setText] = useState('');

	const [filtredIcons, filtredData, setFilter, , setSearch, search] =
		useFilterBook(books);

	const addBook = () => {
		if (text.trim().length) {
			setBooks([
				...books,
				{
					id: new Date().toISOString(),
					text,
					like: false,
					star: false,
				},
			]);
			setText('');
		}
	};

	return (
		<>
			<Header />
			<Info books={books} filtredIcons={filtredIcons} setBooks={setBooks} />
			<Filter setSearch={setSearch} search={search} setFilter={setFilter} />
			<AddBook text={text} setText={setText} addBook={addBook} />
			<List books={filtredData} setBooks={setBooks} />
		</>
	);
}

export default App;
