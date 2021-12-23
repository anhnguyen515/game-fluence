import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import NavBar from "../navbar/Navbar";

export default function Header() {
  return (
    <>
      <Container fluid>
        <Row className={styles.container}>
          <Col xs={12} md={4} lg={3}>
            <Link href="/">
              <a>
                <Image
                  src="/GameFluence-logo-white.png"
                  width={300}
                  height={151.5}
                  layout="responsive"
                  alt="page logo"
                />
              </a>
            </Link>
          </Col>

          {/* <Col className={styles.input}>
            <input type="text" placeholder="Tìm kiếm game..." />
            <div className={styles.searchIcon}>
              <BsSearch />
            </div>
          </Col> */}
        </Row>
      </Container>
      <NavBar />
    </>
  );
}
