import styles from "./index.module.css";
import Lottie from "lottie-react";
import underConstruction from "../assets/animations/under-construction.json";

function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Batutab</h1>
        <span>We are under construction...</span>
      </header>
      <section>
        <Lottie
          animationData={underConstruction}
          className={styles.lottie_wrapper}
        ></Lottie>
      </section>
    </div>
  );
}

export default Home;
