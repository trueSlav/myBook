import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';

import styles from './Filter.module.css';

const Filter = ({ setFilter, search, setSearch }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inputWrapper}>
				<MyInput
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					type="text"
					name="search"
					id="search"
					placeholder="Найти книгу"
				/>
			</div>

			<div className={styles.buttonWrapper}>
				<MyButton onClick={() => setFilter('all')}>Показать все</MyButton>
				<MyButton onClick={() => setFilter('like')}>Любимые книги</MyButton>
				<MyButton onClick={() => setFilter('star')}>Буду читать</MyButton>
			</div>
		</div>
	);
};
export default Filter;
