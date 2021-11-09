import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import GameCard from "../../components/gamecard/GameCard";

export const getStaticProps = async () => {
  const res = await fetch(`https://www.freetogame.com/api/games?platform=pc`);
  const data = await res.json();

  return {
    props: {
      games: data,
    },
  };
};

export default function WindowsPlatform({ games }) {
  return (
    <Row className="game_container">
      <h2>
        <span className="heading">
          <span>PC</span> Games
        </span>
      </h2>
      {games.map((game) => (
        <Col key={game.id} xs={12} md={6} lg={4} xl={3} className="game_col">
          <GameCard
            id={game.id}
            thumbnail={game.thumbnail}
            title={game.title}
            genre={game.genre}
            platform={game.platform}
            publisher={game.publisher}
          />
        </Col>
      ))}
    </Row>
  );
}
