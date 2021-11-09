import { Container } from "react-bootstrap";

export const getStaticPaths = async () => {
  const res = await fetch("https://www.freetogame.com/api/games");
  const data = await res.json();

  const paths = data.map((game) => {
    return {
      params: { id: game.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
  const data = await res.json();

  return {
    props: {
      game: data,
    },
  };
};

export default function Details({ game }) {
  return (
    <Container>
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <p>{game.release_date}</p>
    </Container>
  );
}
