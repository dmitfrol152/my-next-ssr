import Link from "next/link";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link className={styles.header__link} href={"/"}>
          Главная
        </Link>
        <Link className={styles.header__link} href={"/dashboard"}>
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
