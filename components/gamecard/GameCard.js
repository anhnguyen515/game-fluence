import { Card } from "react-bootstrap";
import { BsCalendarCheckFill } from "react-icons/bs";
import Link from "next/link";
import styles from "./GameCard.module.css";

export default function GameCard(props) {
  function formatDate(string) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    let newString = new Date(string).toLocaleDateString("vi-VN", options);
    return newString;
  }

  return (
    <Link href={`/games/${props.id}`} passHref>
      <Card bg="dark" className={styles.game_card}>
        <Card.Img
          variant="top"
          src={props.thumbnail}
          className={styles.card_img}
        />
        <Card.Body>
          <Card.Title className={styles.title}>{props.title}</Card.Title>
          <Card.Text>
            <div className={styles.description}>
              <span className={styles.calendar}>
                <BsCalendarCheckFill />
              </span>
              <span className={styles.date}>
                {formatDate(props.release_date)}
              </span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
