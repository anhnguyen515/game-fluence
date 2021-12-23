import { fetchByName } from "../modules/fetch";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AllGamesCard from "/components/gamecard/AllGamesCard";

export async function getServerSideProps() {
  return {
    props: {
      apiUrl: "http://localhost:8000/gamelib",
    },
  };
}

export default function SearchPage({ apiUrl }) {
  const router = useRouter();
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getDataSearch() {
      const data = await fetchByName(apiUrl, router.query.search);
      setGames(data);
    }

    getDataSearch();
  }, [router.query.search]);

  console.log(games);

  return (
    <>
      <Row className="game_container">
        <h2>
          <span className="heading">
            Kết quả tìm kiếm cho: <span>{router.query.search}</span>
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
