import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import AllGamesCard from "../../components/gamecard/AllGamesCard";

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8000/gamelib/games/tag/?tag=3`);
  const data = await res.json();

  return {
    props: {
      games: data,
    },
  };
};

export default function PhieuLuu({ games }) {
  return (
    <>
      <Row className="game_container">
        <h2>
          <span className="heading">
            Game <span>Phiêu lưu</span>
          </span>
        </h2>
        {games.map((game) => (
          <Col key={game.id} xs={12} md={6} xl={4} className="game_col">
            <AllGamesCard
              id={game.id}
              thumbnail={game.images[0]}
              title={game.name}
              categories={game.categories}
              producer={game.producer}
              publisher={game.publisher}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
