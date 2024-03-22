import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';

import styles from './Filter.module.css';

const Filter = () => {
	const clickBtn = () => {
		console.log('click button');
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.inputWrapper}>
				<MyInput
					type="text"
					name="search"
					id="search"
					placeholder="Найти книгу"
				/>
			</div>

			<div className={styles.buttonWrapper}>
				<MyButton onClick={clickBtn}>Показать все</MyButton>
				<MyButton>Любимые книги</MyButton>
				<MyButton>Буду читать</MyButton>
			</div>
		</div>
	);
};
export default Filter;
