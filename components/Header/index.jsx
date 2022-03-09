import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  console.log("HEADER RENDER");
  return (
    <header className={styles.container}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/maths">
            <a>maths</a>
          </Link>
        </li>
        <li>
          <Link href="/english">
            <a>english</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
