import ListItem from '../ListItem/ListItem';

import styles from './List.module.css';

const List = ({ books }) => {
	return (
		<ul className={styles.list}>
			{books.map((book, i) => (
				<ListItem book={book.name} i={i + 1} key={book.id} />
			))}
		</ul>
	);
};
export default List;
