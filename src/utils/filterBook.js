export const filterIcon = (books, setBooks) => {
	const setFilter = (icon) => {
		setBooks(books.filter((book) => book[icon] === true));
	};

	const filtredIcons = (icon) => books.filter((book) => book[icon] === true);

	return [filtredIcons, setFilter];
};
