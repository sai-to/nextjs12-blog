import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <Link rel="icon" href="/favicon.ico"></Link>
      </Head>
      <header className={styles.header}>
        <img src="/vercel.svg" />
        <h1>Vercel</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
