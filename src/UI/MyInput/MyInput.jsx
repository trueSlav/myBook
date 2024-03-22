import styles from './MyInput.module.css';

const MyInput = ({ ...props }) => {
	return <input className={styles.MyInput} {...props} />;
};
export default MyInput;
