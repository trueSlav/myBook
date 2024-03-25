import ListItem from '../ListItem/ListItem';

import styles from './List.module.css';

const List = ({ books, deleteBook, addLike, addStar }) => {
	return (
		<ul className={styles.list}>
			{books.map((book, i) => (
				<ListItem
					deleteBook={deleteBook}
					book={book.text}
					i={i + 1}
					key={book.id}
					id={book.id}
					like={book.like}
					star={book.star}
					addLike={addLike}
					addStar={addStar}
				/>
			))}
		</ul>
	);
};
export default List;
