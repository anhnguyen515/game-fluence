import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import NavBar from "../navbar/Navbar";

export default function Header() {
  return (
    <>
      <Container fluid className={styles.container}>
        <Link href="/">
          <a>
            <Image
              src="/GameFluence-logo-white.png"
              width={300}
              height={151.5}
              alt="page logo"
            />
          </a>
        </Link>
        <div className={styles.input}>
          <input type="text" placeholder="Search for games..." />
          <div className={styles.searchIcon}>
            <BsSearch />
          </div>
        </div>
      </Container>
      <NavBar />
    </>
  );
}
