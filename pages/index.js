import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import GameCard from "../components/gamecard/GameCard";
import HotGamesCard from "../components/gamecard/HotGamesCard";
import Hero from "../components/hero/Hero";

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8000/gamelib/homepage`);
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
            Game <span>Mới Update</span>
          </span>
        </h2>
        {games.game_latest.slice(0, 4).map((game) => (
          <Col key={game.id} xs={12} md={6} xl={3} className="game_col">
            <GameCard
              id={game.id}
              thumbnail={game.images[0]}
              title={game.name}
              release_date={game.release_date}
            />
          </Col>
        ))}
      </Row>

      <Row>
        <Col xs={12} lg={8}>
          <Row className="game_container game_container_section">
            <h3>
              <span className="heading">
                Game <span>Phiêu lưu</span>
              </span>
            </h3>
            {games.game_phieu_luu.slice(0, 3).map((game) => (
              <Col
                key={game.id}
                xs={12}
                md={6}
                // lg={4}
                xl={4}
                className="game_col"
              >
                <GameCard
                  id={game.id}
                  thumbnail={game.images[0]}
                  title={game.name}
                  release_date={game.release_date}
                />
              </Col>
            ))}
          </Row>
          <Row className="game_container game_container_section">
            <h3>
              <span className="heading">
                Game <span>Chiến thuật</span>
              </span>
            </h3>
            {games.game_chien_thuat.slice(0, 3).map((game) => (
              <Col
                key={game.id}
                xs={12}
                md={6}
                // lg={4}
                xl={4}
                className="game_col"
              >
                <GameCard
                  id={game.id}
                  thumbnail={game.images[0]}
                  title={game.name}
                  release_date={game.release_date}
                />
              </Col>
            ))}
          </Row>
          <Row className="game_container game_container_section">
            <h3>
              <span className="heading">
                Game <span>Mô phỏng</span>
              </span>
            </h3>
            {games.game_mo_phong.slice(0, 3).map((game) => (
              <Col
                key={game.id}
                xs={12}
                md={6}
                // lg={4}
                xl={4}
                className="game_col"
              >
                <GameCard
                  id={game.id}
                  thumbnail={game.images[0]}
                  title={game.name}
                  release_date={game.release_date}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} lg={4}>
          <Row className="game_container">
            <h2>
              <span className="heading">
                Game <span>Hot</span>
              </span>
            </h2>
            {games.game_popular.slice(0, 3).map((game) => (
              <Col key={game.id} xs={12} md={6} lg={12} className="game_col">
                <HotGamesCard
                  id={game.id}
                  thumbnail={game.images[0]}
                  title={game.name}
                  release_date={game.release_date}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}
