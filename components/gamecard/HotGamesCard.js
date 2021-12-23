import { Col, Container, Image, Row } from "react-bootstrap";
import { BsCalendarCheckFill } from "react-icons/bs";
import Link from "next/link";
import styles from "./HotGamesCard.module.css";

export default function HotGamesCard(props) {
  function formatDate(string) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    let newString = new Date(string).toLocaleDateString("vi-VN", options);
    return newString;
  }

  return (
    <Link href={`/games/${props.id}`} passHref>
      <Row className={styles.game_card}>
        <Col xs={12} lg={4} className={styles.card_section}>
          <Image
            src={props.thumbnail}
            alt="game logo"
            className={styles.game_image}
          />
        </Col>
        <Col xs={12} lg={8} className={styles.card_section}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>
            <span className={styles.calendar}>
              <BsCalendarCheckFill />
            </span>
            <span className={styles.date}>
              {formatDate(props.release_date)}
            </span>
          </div>
        </Col>
      </Row>
    </Link>
  );
}
