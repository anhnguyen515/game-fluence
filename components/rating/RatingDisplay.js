import { Row, Col } from "react-bootstrap";
import styles from "./RatingDisplay.module.css";

export default function RatingDisplay(props) {
  return (
    <div>
      <Row className={styles.game_card}>
        <Col xs={12} lg={4} className={styles.card_section}>
          {props.overall}
        </Col>
        <Col xs={12} lg={8} className={styles.card_section}>
          <div>{props.story}</div>
          <div>{props.gameplay}</div>
          <div>{props.sound}</div>
          <div>{props.graphic}</div>
        </Col>
      </Row>
    </div>
  );
}
