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

      <p><b>Contact Information:</b></p>

      <p><Link href="https://www.facebook.com/tengcosodamax/">Facebook Page</Link></p>

      <p><b>Description:</b></p>

      <p>To gain essential background knowledge and experiences of the real working environment and to perfect interpersonal skills & abilities from the training that is needed for future progression as an individual. </p>

      <p><b>Skills:</b></p>

      <li>Knowledgeable in C++, Python, and JavaScript programming languages.</li>
      <li>Oriented in HTML5, PHP, CSS and MySQL database.</li>
      <li>Knowledgeable in Microsoft Offices such as Microsoft Word, Excel and PowerPoint. </li>
      <li>Capable of editing photos, videos, and presentations using different applications. </li>

      <p><b>Educational Attainment:</b></p>
      <div>
        <p style={{textAlign: "left"}}><b>Tertiary Level</b></p>
        <p style={{textAlign: "center"}}>
        Bachelor of Science in Computer Engineering (Degree)
        </p>
        <p style={{textAlign: "center"}}>
        University of the Assumption
        </p>
        <p style={{textAlign: "center"}}>
        Unisite Subdivision, Barangay Del Pilar, 
        </p>
        <p style={{textAlign: "center"}}>
        City of San Fernando Pampanga 
        </p>
        <p style={{textAlign: "center"}}>
        2019-Present
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Secondary Level</b></p>
        <p style={{textAlign: "center"}}>
        Don Honorio Ventura State University
        </p>
        <p style={{textAlign: "center"}}>
        XMX4+499, Bacolor, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        Unisite Subdivision, Barangay Del Pilar, 
        </p>
        <p style={{textAlign: "center"}}>
        2017-2019 (Senior High School)
        </p>
        <br></br>
        <p style={{textAlign: "center"}}>
        Immaculate Conception Academy of Guagua Pampanga, Inc.
        </p>
        <p style={{textAlign: "center"}}>
        Cardinal Santos Ave, Guagua, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2014-2017 (Junior High School) 
        </p>
        <br></br>
        <p style={{textAlign: "center"}}>
        San Roque Dau High School
        </p>
        <p style={{textAlign: "center"}}>
        XHHH+H9G, Lubao, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2013 – 2014 (Junior High School)
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Primary Level</b></p>
        <p style={{textAlign: "center"}}>
        Magsaysay Elementary School
        </p>
        <p style={{textAlign: "center"}}>
        XHJG+H7X, Maquiapo - Magsaysay - Rizal Barangay Rd, 
        </p>
        <p style={{textAlign: "center"}}>
        Guagua, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2006-2013
        </p>
      </div>


        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}