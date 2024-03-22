import style from './MyButton.module.css';
const MyButton = ({ children, ...props }) => {
	return (
		<button className={style.button} {...props}>
			{children}
		</button>
	);
};
export default MyButton;
