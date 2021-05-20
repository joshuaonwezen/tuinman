import styles from '../styles/Header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/match">Match</Link>
                </li>
                <li>
                    <Link href="/catalog">Catalog</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
