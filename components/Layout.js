import Head from "next/head";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import NavBar from "./navbar/Navbar";
import styles from "./Layout.module.css";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>GameFluence</title>
      </Head>
      <div className={styles.layout}>
        <Header />
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
