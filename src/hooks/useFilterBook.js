import { useState } from 'react';

export const useFilterBook = (books) => {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('all');

	const searchBook = (search, books) => {
		if (search.length === 0) {
			return books;
		}

		return books.filter(
			(book) => book.text.toLowerCase().indexOf(search) !== -1,
		);
	};

	const filterBook = (filter, books) => {
		switch (filter) {
			case 'like':
				return books.filter((book) => book.like);
			case 'star':
				return books.filter((book) => book.star);
			default:
				return books;
		}
	};

	const filtredIcons = (icon) => books.filter((book) => book[icon] === true);
	const filtredData = filterBook(filter, searchBook(search, books));

	return [filtredIcons, filtredData, setFilter, filter, setSearch, search];
};
