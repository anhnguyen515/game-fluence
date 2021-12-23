import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.hero_container}>
      <h1>
        <span style={{ color: "crimson" }}>Theo dõi</span> và{" "}
        <span style={{ color: "crimson" }}>Tìm kiếm</span> thông tin về các tựa
        game yêu thích của bạn tại đây!
      </h1>
      {/* <h4 className={styles.banner}>Thông tin bạn cần về tựa game yêu thích</h4> */}
    </div>
  );
}
