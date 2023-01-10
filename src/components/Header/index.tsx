import styles from "./styles.module.scss";
import Link from "next/link";
import { SigInButton } from "../SigInButton";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
            <Image src={logo} alt="Logo Board" />
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/board">Meu Board</Link>
        </nav>
        <SigInButton />
      </div>
    </header>
  );
}
