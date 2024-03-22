import Heart from '../../assets/heart.svg?react';
import Star from '../../assets/star.svg?react';
import Trash from '../../assets/trash.svg?react';

import styles, {
	iconHeartHover,
	iconStarHover,
	iconTrashHover,
} from './ListItem.module.css';

const ListItem = ({ book, i }) => {
	return (
		<li className={styles.listItem}>
			<div>
				{i}. {book}
			</div>
			<div className={styles.iconBar}>
				<Heart className={`${styles.icon} ${iconHeartHover}`} />
				<Star className={`${styles.icon} ${iconStarHover}`} />
				<Trash className={`${styles.icon} ${iconTrashHover}`} />
			</div>
		</li>
	);
};
export default ListItem;
