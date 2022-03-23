import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className={styles["image-container"]}>

      </div>
      <div className={styles["white-container"]}>
        <h1 className={styles.title}>
        To help you green up your room
        </h1>

        <p className={styles.description}>
          Want to learn more?
        </p>
      </div>

      <div className={styles.cta}>
        <Link href="/match">
            Find your plant match
        </Link >
      </div>
    </div>
  )
}
