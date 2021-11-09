import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Container className={styles.container}>
      <Row className={styles.footerRow}>
        <Col xs={12} lg={6} className={styles.footerCol}>
          <div className={styles.image}>
            <Image
              src="/GameFluence-logo-white.png"
              alt="page logo"
              width={150}
              height={75.75}
            />
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sunt
            tempore, corporis unde modi error soluta asperiores, nostrum nihil
            reiciendis officia tenetur et ab esse hic aspernatur. Recusandae
            sequi unde tempore fuga praesentium hic! Odit ab, consectetur sunt
            dignissimos deserunt sapiente magnam quasi aut fuga? Cupiditate
            reiciendis iure ducimus incidunt.
          </div>
        </Col>
        <Col className={styles.footerCol}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          laborum molestias voluptas sequi! Quod culpa hic voluptates! Numquam
          perspiciatis quis non aut ratione, nisi necessitatibus nobis sed
          delectus. Reprehenderit nemo similique accusamus eum quisquam
          voluptate iusto? Natus quidem dicta optio incidunt nisi consequatur
          nesciunt, dolores, laborum similique, ab a voluptatibus.
        </Col>
        <Col className={styles.footerCol}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
          culpa.
        </Col>
      </Row>
      <Row className={styles.copyright}>
        <Col>&copy; GameFluence 2021. All Rights Reserved</Col>
        {/* <Col>
          <a href="https://www.freepik.com/vectors/background">
            Background vector created by BiZkettE1 - www.freepik.com
          </a>
        </Col> */}
      </Row>
    </Container>
  );
}
