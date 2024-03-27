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
};

// const HeartIcon = ({ id, like, toggleIconActive }) => {
// 	let likeStyle = `${styles.icon} ${iconHeartHover}`;

// 	if (!like) {
// 		likeStyle = `${styles.icon} ${iconHeartHover}`;
// 	} else {
// 		likeStyle = `${styles.icon} ${iconHeartHover} ${styles.heartActive}`;
// 	}
// 	return (
// 		<Heart
// 			data-toggle="like"
// 			onClick={(e) =>
// 				toggleIconActive(e.currentTarget.getAttribute('data-toggle'), id)
// 			}
// 			className={likeStyle}
// 		/>
// 	);
// };

// const StarIcon = ({ id, star, toggleIconActive }) => {
// 	let starStyle = `${styles.icon} ${iconStarHover}`;

// 	if (!star) {
// 		starStyle = `${styles.icon} ${iconStarHover}`;
// 	} else {
// 		starStyle = `${styles.icon} ${iconStarHover} ${styles.starActive}`;
// 	}
// 	return (
// 		<Star
// 			data-toggle="star"
// 			onClick={(e) =>
// 				toggleIconActive(e.currentTarget.getAttribute('data-toggle'), id)
// 			}
// 			className={starStyle}
// 		/>
// 	);
// };
