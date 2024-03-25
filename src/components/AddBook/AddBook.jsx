import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';

import styles from './AddBook.module.css';

const AddBook = ({ text, setText, addBook }) => {
	return (
		<div className={styles.wrapperAbbBook}>
			<h2>Добавить новую книгу</h2>
			<div className={styles.inputWrapper}>
				<MyInput
					placeholder={'Введите название книги'}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<div className={styles.buttonWrapper}>
					<MyButton onClick={addBook}>Добавить книгу</MyButton>
				</div>
			</div>
		</div>
	);
};
export default AddBook;
