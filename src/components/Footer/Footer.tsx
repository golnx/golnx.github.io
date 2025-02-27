import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.creditInfo}>
				Some rights reserved. Based on&nbsp;
				<a
					target="_blank"
					rel="nofollow"
					href="https://github.com/yashchaudhari008/minime/"
				>
					Minime
				</a>
			</p>
		</footer>
	);
};

export default Footer;
