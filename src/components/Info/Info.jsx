import style from './Info.module.css';

const Info = ({ books, filtredIcons }) => {
	const totalBooks = books.length;
	return (
		<div className={style.Info}>
			<h2>Всего добавленных книг : {totalBooks}</h2>
			<h2>Любимые книги : {filtredIcons('like').length}</h2>
			<h2>Буду читать : {filtredIcons('star').length}</h2>
		</div>
	);
};
export default Info;
