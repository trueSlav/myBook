export const activeIcons = (books, setBooks) => {
	const toggleIconActive = (prop, id) => {
		setBooks(
			books.map((book) => {
				if (book.id !== id) return book;

				return {
					...book,
					[prop]: !book[prop],
				};
			}),
		);
	};

	const deleteBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	return [toggleIconActive, deleteBook];
};
