import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.hero_container}>
      <h1>
        <span style={{ color: "crimson" }}>Find & Track</span> your favorite
        games!
      </h1>
      <h4 className={styles.banner}>
        All the information you need for video games is available here!
      </h4>
    </div>
  );
}
