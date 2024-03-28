import ListItem from '../ListItem/ListItem';

import styles from './List.module.css';

const List = ({ books, setBooks }) => {
	if (!books.length) {
		return <h1 className={styles.nothingText}>Ничего не найдено :(</h1>;
	}

	return (
		<ul className={styles.list}>
			{books.map((book, i) => (
				<ListItem
					book={book.text}
					books={books}
					setBooks={setBooks}
					i={i + 1}
					key={book.id}
					id={book.id}
					like={book.like}
					star={book.star}
				/>
			))}
		</ul>
	);
};
export default List;
