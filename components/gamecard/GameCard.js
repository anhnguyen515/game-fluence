import { Card } from "react-bootstrap";
import Link from "next/link";
import styles from "./GameCard.module.css";

export default function GameCard(props) {
  return (
    <Link href={`/games/${props.id}`} passHref>
      <Card bg="dark" className={styles.game_card}>
        <Card.Img variant="top" src={props.thumbnail} />
        <Card.Body>
          <Card.Title className={styles.title}>{props.title}</Card.Title>
          <Card.Text>
            <div className={styles.publisher}>
              <span className={styles.description}>Publisher: </span>
              {props.publisher}
            </div>
            <div className={styles.text}>
              <span className={styles.genre}>{props.genre}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span>{props.platform}</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
