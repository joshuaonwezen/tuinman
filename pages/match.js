import styles from "../styles/Home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import LightIndicator from "../components/LightIndicator";

export default function Match() {
  return (
    <div>
      <div className={styles.white_container}>
        <Carousel width="50vw" showStatus="false">
          <div className={styles.question}>
            <p className={styles.description}>How light is your room?</p>
            <div className={styles.indicator}>
              <LightIndicator />
            </div>
          </div>

          <div className={styles.question}>
            <p className={styles.description}>
              How large do you want your plant to be?
            </p>
            <div className={styles.indicator}>
              <LightIndicator />
            </div>
          </div>

          <div className={styles.question}>
            <p className={styles.description}>
              How large do you want your plant to be?
            </p>
            <div className={styles.indicator}>
              <LightIndicator />
            </div>
          </div>

          <div className={styles.question}>
            <p className={styles.description}>
              How much maintenance can you handle?
            </p>
            <div className={styles.indicator}>
              <LightIndicator />
            </div>
          </div>

          <div className={styles.question}>
            <p className={styles.description}>Do you have pets?</p>
            <div className={styles.question}>
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>

          <div className={styles.question}>
            <p className={styles.description}>How warm is your home?</p>
            <div className={styles.indicator}>
              <LightIndicator />
            </div>
          </div>

          <div className={styles.question}>
            <p className={styles.description}>How humid is your home?</p>
            <div className={styles.indicator}>
              <LightIndicator />
            </div>
            <Link href="/result">Results</Link>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
