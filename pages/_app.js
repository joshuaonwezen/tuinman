import Head from 'next/head'
import "../styles/globals.css";
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'

function App({Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greenhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Component {...pageProps}/>
      </main>
    </div>
  );
}

export default App;
