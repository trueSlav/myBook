import { useState } from 'react';
import './App.css';

import AddBook from './components/AddBook/AddBook';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import List from './components/List/List';

function App() {
	const [books, setBooks] = useState([]);
	const [text, setText] = useState('');

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

	const deleteBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	const addLike = (id) => {
		setBooks(
			books.map((book) => {
				if (book.id !== id) return book;

				return {
					...book,
					like: !book.like,
				};
			}),
		);
	};

	const addStar = (e, id) => {
		setBooks(
			books.map((book) => {
				if (book.id !== id) return book;

				return {
					...book,
					star: !book.star,
				};
			}),
		);
	};

	// class FilterIcon {
	// 	filtredIcons = (icon) => books.filter((book) => book[icon] === true);

	// 	setFilter(filtredIcons) {
	// 		setBooks(filtredIcons());
	// 	}
	// }

	const filterIcon = () => {
		const filtredIcons = (icon) => books.filter((book) => book[icon] === true);

		const setFilter = (icon) => {
			setBooks(books.filter((book) => book[icon] === true));
		};

		return [filtredIcons, setFilter];
	};

	const filterLike = () => {
		setBooks(books.filter((book) => book.like === true));
	};

	const filterStar = () => {
		setBooks(books.filter((book) => book.star === true));
	};

	return (
		<>
			<Header />
			<Info books={books} />
			<Filter
				filterIcon={filterIcon}
				filterStar={filterStar}
				filterLike={filterLike}
			/>
			<AddBook text={text} setText={setText} addBook={addBook} />
			<List
				books={books}
				deleteBook={deleteBook}
				addLike={addLike}
				addStar={addStar}
			/>
		</>
	);
}

export default App;
