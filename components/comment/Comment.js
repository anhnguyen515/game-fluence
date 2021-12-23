import { DiscussionEmbed } from "disqus-react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/gamelib/games/ordered/");
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

  return {
    props: {
      url: `http://localhost:3000/games/${id}`,
      identifier: `${id}`,
    },
  };
};

const Comments = ({ url, identifier }) => {
  const disqusShortname = "gamefluence";

  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: `Post`,
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comments;
