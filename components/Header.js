import styles from '../styles/Header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
        <h4>
            greenhouse
        </h4>
        <nav>
            <ul>
                <li>
                    <Link href="/">home</Link>
                </li>
                <li>
                    <Link href="/match">match</Link>
                </li>
                <li>
                    <Link href="/articles">catalog</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
