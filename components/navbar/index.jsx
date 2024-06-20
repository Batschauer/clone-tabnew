import styles from "./styles.module.css";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const NavigationLinks = () => (
    <ul className={clsx(styles.list, styles.hidden)}>
      <li>
        <Link className={styles.nav_link} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.nav_link} href="/contact">
          Contato
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav className={styles.container}>
        <span className={styles.title}>Batutab</span>
        <NavigationLinks />
        <button
          className={clsx(styles.menu_button, styles.hidden)}
          aria-label={menuOpened ? "fecha menu" : "abre menu"}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <div
            className={clsx(styles.menu_toggle_wrap, {
              [styles.menu_toggle_wrap_opened]: menuOpened,
            })}
          />
        </button>
      </nav>
      {menuOpened && (
        <div className={styles.mobile_wrapp}>
          <div className={styles.painel}>
            <NavigationLinks />
          </div>
        </div>
      )}
    </>
  );
}
