import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./Game.module.css";
import Comments from "../../components/comment/Comment";
import RatingDisplay from "../../components/rating/RatingDisplay";

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
  const res = await fetch(`http://localhost:8000/gamelib/games/detail/${id}`);
  const data = await res.json();

  return {
    props: {
      games: data,
    },
  };
};

export default function Details({ games }) {
  function formatDate(string) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    let newString = new Date(string).toLocaleDateString("vi-VN", options);
    return newString;
  }

  return (
    <>
      {games.game.map((game) => (
        <Container key={game.id}>
          <Row>
            <Col xs={12} lg={4} className={styles.image_container}>
              <Image
                src={game.images[0]}
                alt="game logo"
                className={styles.game_image}
              />
            </Col>
            <Col xs={12} lg={8} className={styles.game_content}>
              <h2 className={styles.heading}>{game.name}</h2>
              <h4 className={styles.heading}>Về {game.name}</h4>
              <p className={styles.game_description}>{game.description}</p>

              <h4 className={styles.heading}>Thông tin thêm</h4>
              <div>
                <Row>
                  <Col xs={6} md={4} className={styles.game_information}>
                    <div className={styles.low_opacity}>Tên game</div>
                    <div>{game.name}</div>
                  </Col>
                  <Col xs={6} md={4} className={styles.game_information}>
                    <div className={styles.low_opacity}>Nhà phát triển</div>
                    <div>{game.producer}</div>
                  </Col>
                  <Col xs={6} md={4} className={styles.game_information}>
                    <div className={styles.low_opacity}>Nhà phát hành</div>
                    <div>{game.publisher}</div>
                  </Col>
                  <Col xs={6} md={4} className={styles.game_information}>
                    <div className={styles.low_opacity}>Ngày phát hành</div>
                    <div>{formatDate(game.release_date)}</div>
                  </Col>
                  <Col xs={6} md={4} className={styles.game_information}>
                    <div className={styles.low_opacity}>Thể loại</div>
                    <div>
                      {game.categories
                        .map((category) => {
                          return category.name;
                        })
                        .join(", ")}
                    </div>
                  </Col>
                </Row>
              </div>
              <h4 className={styles.heading}>Cấu hình đề nghị </h4>
              <div>
                <Row>
                  <Col xs={6} className={styles.game_information}>
                    <div className={styles.low_opacity}>OS</div>
                    <div>{game.requirement_id.os}</div>
                  </Col>
                  <Col xs={6} className={styles.game_information}>
                    <div className={styles.low_opacity}>Processor</div>
                    <div>{game.requirement_id.processor}</div>
                  </Col>
                  <Col xs={6} className={styles.game_information}>
                    <div className={styles.low_opacity}>RAM</div>
                    <div>{game.requirement_id.ram}</div>
                  </Col>
                  <Col xs={6} className={styles.game_information}>
                    <div className={styles.low_opacity}>Graphics</div>
                    <div>{game.requirement_id.graphic}</div>
                  </Col>
                  <Col xs={6} className={styles.game_information}>
                    <div className={styles.low_opacity}>Storage</div>
                    <div>{game.requirement_id.storage}</div>
                  </Col>
                </Row>
              </div>
              <h4 className={styles.heading}>Bình luận</h4>
              <Comments />
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}
