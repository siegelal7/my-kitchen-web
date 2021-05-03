import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Kitchen</title>
        <meta
          name="description"
          content="My Kitchen is your one stop shop for all things food and recipes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/kitchens">
          <a>Kitchens</a>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
