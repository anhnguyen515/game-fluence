import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Row, Card } from "react-bootstrap";
import GameCard from "../components/gamecard/GameCard";
import Hero from "../components/hero/Hero";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://www.freetogame.com/api/games?sort-by=release-date`
  );
  const data = await res.json();

  return {
    props: {
      games: data,
    },
  };
};

export default function Home({ games }) {
  return (
    <>
      <Head>
        <title>GameFluence</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />

      <Row className="game_container">
        <h2>
          <span className="heading">
            <span>Recently Added</span> Games
          </span>
        </h2>
        {games.slice(0, 4).map((game) => (
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
        <div className="heading_link">
          <Link href="#">
            <a>More Games &gt;</a>
          </Link>
        </div>
      </Row>

      <Row className="game_container">
        <h2>
          <span className="heading">
            <span>Hot</span> Games
          </span>
        </h2>
        {games.slice(0, 4).map((game) => (
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
        <div className="heading_link">
          <Link href="#">
            <a>More Games &gt;</a>
          </Link>
        </div>
      </Row>
    </>
  );
}
