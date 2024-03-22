import reactLogo from '../../assets/react.svg';

import styles from './Header.module.css';

const Logo = () => {
	return (
		<div className={styles.logoWrapper}>
			<img className={styles.logo} src={reactLogo} alt="logo" />
			<h1>MyBook</h1>
		</div>
	);
};

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<a href="/">
				<Logo />
			</a>
		</div>
	);
};
export default Header;
