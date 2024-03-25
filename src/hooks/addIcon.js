// const [books, setBooks] = useState([]);
// const star = document.getElementsByClassName('starStyle');
// console.log(star);

export const addIcon = (setBooks, books, id) => {
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
