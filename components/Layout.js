import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import NavBar from '@/components/NavBar'
import Input from '@/components/Input'

export default function Layout({ children, category }) {
  const TITLE = 'EMOJI Searcher'
  const pageTitle = category === 'all' ? TITLE : `${TITLE} : ${category}`

  return (
    <>
      <Head>
        <title>{ pageTitle }</title>
      </Head>
      <header>
        <h1 className={styles.title}>{ TITLE }</h1>
        <NavBar category={ category } />
      </header>
      <div className={styles.form}>
        <Input />
      </div>
      <main className={styles.main}>
        { children }
      </main>
      <footer className={styles.footer}>
      This web app was created as a class project in <a href="https://schoo.jp/" target="_blank" rel="noopener noreferrer">Schoo</a>.
      </footer>
    </>
  );
}