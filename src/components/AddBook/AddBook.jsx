import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';

import styles from './AddBook.module.css';

const AddBook = () => {
	return (
		<div className={styles.wrapperAbbBook}>
			<h2>Добавить новую книгу</h2>
			<div className={styles.inputWrapper}>
				<MyInput placeholder={'Введите название книги'} />
				<div className={styles.buttonWrapper}>
					<MyButton>Добавить книгу</MyButton>
				</div>
			</div>
		</div>
	);
};
export default AddBook;
