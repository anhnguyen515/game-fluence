import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { fetchByOrder } from "../../modules/fetch";
import AllGamesCard from "../../components/gamecard/AllGamesCard";
import Filter from "../../components/filter/Filter";

// export async function getServerSideProps() {
//   return {
//     props: {
//       apiUrl: "http://localhost:8000/gamelib",
//     },
//   };
// }

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:8000/gamelib/games/ordered/?ordering=name`
  );
  const data = await res.json();

  return {
    props: {
      games: data,
    },
  };
};

export default function AllGames({ games }) {
  // const router = useRouter();
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   async function getDataSearch() {
  //     const data = await fetchByOrder(apiUrl, router.query.name);
  //     setGames(data);
  //   }

  //   getDataSearch();
  // }, [router.query.search]);

  return (
    <>
      <Row className="game_container">
        <h2>
          <span className="heading">
            <span>Tất cả</span> Game
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
