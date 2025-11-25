import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilsStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utilsStyles.headingMd}>
          テストテスト！Build and deploy on the AI Cloud. Vercel provides the
          developer tools and cloud infrastructure to build, scale, and secure a
          faster, more personalized web.
        </p>
      </section>
      <div className={styles.grid}>
        <article>
          <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/" className={utilsStyles.boldText}>
            LoginSign Up! Log in to Vercel. Continue with Email. Continue
          </Link>
          <br />
          <small className={utilsStyles.lightText}>Nomember 21, 2025</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/" className={utilsStyles.boldText}>
            LoginSign Up. Log in to Vercel. Continue with Email. Continue
          </Link>
          <br />
          <small className={utilsStyles.lightText}>Nomember 21, 2025</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/" className={utilsStyles.boldText}>
            LoginSign Up. Log in to Vercel. Continue with Email. Continue
          </Link>
          <br />
          <small className={utilsStyles.lightText}>Nomember 21, 2025</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/" className={utilsStyles.boldText}>
            LoginSign Up. Log in to Vercel. Continue with Email. Continue
          </Link>
          <br />
          <small className={utilsStyles.lightText}>Nomember 21, 2025</small>
        </article>
      </div>
    </Layout>
  );
}
