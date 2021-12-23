import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsMailbox,
  BsTelephoneFill,
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
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
              Website GameFluence là một website game phi lợi nhuận hoạt động
              dựa trên những người có cùng chí hướng, cùng yêu thích, đam mê nên
              khi bạn sử dụng các thông tin được chia sẻ trên đây vui lòng không
              sử dụng vào mục đích kiếm tiền, trục lợi phi pháp...
            </div>
          </Col>
          <Col className={styles.footerCol} sm={12} lg={3}>
            <div className={styles.col_container}>
              <h3>
                <span>Tags</span>
              </h3>
              <div className={styles.tags}>
                <Link href="/categories/hanh_dong">
                  <a>hành động</a>
                </Link>
                <Link href="/categories/ban_sung">
                  <a>bắn súng</a>
                </Link>
                <Link href="/categories/phieu_luu">
                  <a>phiêu lưu</a>
                </Link>
                <Link href="/categories/sinh_ton">
                  <a>sinh tồn</a>
                </Link>
                <Link href="/categories/the_thao">
                  <a>thể thao</a>
                </Link>
                <Link href="/categories/doi_khang">
                  <a>đối kháng</a>
                </Link>
                <Link href="/categories/chien_thuat">
                  <a>chiến thuật</a>
                </Link>
                <Link href="/categories/kinh_di">
                  <a>kinh dị</a>
                </Link>
                <Link href="/categories/nhap_vai">
                  <a>nhập vai</a>
                </Link>
                <Link href="/offline">
                  <a>offline</a>
                </Link>
                <Link href="/online">
                  <a>online</a>
                </Link>
                <Link href="/categories/mo_phong">
                  <a>mô phỏng</a>
                </Link>
              </div>
            </div>
          </Col>
          <Col className={styles.footerCol} sm={12} lg={3}>
            <div className={styles.col_container}>
              <h3>
                <span>Contacts</span>
              </h3>
              <div className={styles.contact}>
                <BsMailbox className={styles.icon} /> gamefluence@gmail.com
              </div>
              <div className={styles.contact}>
                <BsTelephoneFill className={styles.icon} /> (848) 9895582
              </div>

              <div className={styles.social_media}>
                <BsFacebook />

                <BsTwitter />

                <BsYoutube />
              </div>
            </div>
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
    </>
  );
}
