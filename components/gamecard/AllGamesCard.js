import { Card } from "react-bootstrap";
import Link from "next/link";
import styles from "./AllGamesCard.module.css";

export default function DetailGameCard(props) {
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
            <div className={styles.publisher}>
              <span className={styles.description}>Nhà phát triển: </span>
              <span className={styles.value}>{props.producer}</span>
            </div>
            <div className={styles.publisher}>
              <span className={styles.description}>Nhà phát hành: </span>
              <span className={styles.value}>{props.publisher}</span>
            </div>
            <div className={styles.text}>
              <span className={styles.description}>Thể loại: </span>
              <div className={styles.categories}>
                {props.categories.map((category) => (
                  <span key={category.id} className={styles.genre}>
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
