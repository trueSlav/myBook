import { useState } from 'react';
import './App.css';

import { data } from '../data';

import AddBook from './components/AddBook/AddBook';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import List from './components/List/List';
import { filterIcon } from './utils/filterBook';

function App() {
	const [books, setBooks] = useState(data);
	const [text, setText] = useState('');
	const [search, setSearch] = useState('');
	const [filtredIcons, setFilter] = filterIcon(books, setBooks);

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

	const searchBook = (search, books) => {
		if (search.length === 0) {
			return books;
		}

		return books.filter((book) => book.text.indexOf(search) !== -1);
	};

	const visibleData = searchBook(search, books);

	return (
		<>
			<Header />
			<Info books={books} filtredIcons={filtredIcons} setBooks={setBooks} />
			<Filter setSearch={setSearch} search={search} setFilter={setFilter} />
			<AddBook text={text} setText={setText} addBook={addBook} />
			<List books={visibleData} setBooks={setBooks} />
		</>
	);
}

export default App;
