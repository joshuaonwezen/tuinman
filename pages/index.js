import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className={styles.white_container}>
        <h1 className={styles.title}>
          Greenhouse
        </h1>

        <p className={styles.description}>
          To help you green up your room
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
