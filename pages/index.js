import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Name goes by <b>Billy Joe B. Tengco</b>. I have a set of hobbies that consist of video games, reading books, and learning instruments. My favorite food is <i>sinigang</i> and something about myself is that I like spicy food.. You can contact me on <Link href="https://www.facebook.com/tengcosodamax/">Facebook.</Link></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}