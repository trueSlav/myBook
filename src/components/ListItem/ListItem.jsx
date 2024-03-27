import Heart from '../../assets/heart.svg?react';
import Star from '../../assets/star.svg?react';
import Trash from '../../assets/trash.svg?react';

import styles, {
	iconHeartHover,
	iconStarHover,
	iconTrashHover,
} from './ListItem.module.css';

const HeartIcon = ({ id, like, toggleIconActive }) => {
	let likeStyle = `${styles.icon} ${iconHeartHover}`;

	if (!like) {
		likeStyle = `${styles.icon} ${iconHeartHover}`;
	} else {
		likeStyle = `${styles.icon} ${iconHeartHover} ${styles.heartActive}`;
	}
	return (
		<Heart
			data-toggle="like"
			onClick={(e) =>
				toggleIconActive(e.currentTarget.getAttribute('data-toggle'), id)
			}
			className={likeStyle}
		/>
	);
};

const StarIcon = ({ id, star, toggleIconActive }) => {
	let starStyle = `${styles.icon} ${iconStarHover}`;

	if (!star) {
		starStyle = `${styles.icon} ${iconStarHover}`;
	} else {
		starStyle = `${styles.icon} ${iconStarHover} ${styles.starActive}`;
	}
	return (
		<Star
			data-toggle="star"
			onClick={(e) =>
				toggleIconActive(e.currentTarget.getAttribute('data-toggle'), id)
			}
			className={starStyle}
		/>
	);
};

const ListItem = ({
	book,
	i,
	deleteBook,
	id,
	like,
	star,
	toggleIconActive,
}) => {
	const text = `${i}.${book}`;
	return (
		<li className={styles.listItem}>
			<div className={styles.textBlock}>{text}</div>
			<div className={styles.iconBar}>
				<HeartIcon id={id} like={like} toggleIconActive={toggleIconActive} />
				<StarIcon id={id} star={star} toggleIconActive={toggleIconActive} />
				<Trash
					onClick={() => deleteBook(id)}
					className={`${styles.icon} ${iconTrashHover}`}
				/>
			</div>
		</li>
	);
};
export default ListItem;
