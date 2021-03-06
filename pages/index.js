import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../componenets/Hero'
import AboutGrid from '../componenets/AboutGrid'
import StatGrid from '../componenets/StatGrid'
import ServiceGrid from '../componenets/ServiceGrid.tsx'
import MaschineGrid from '../componenets/MaschineGrid.tsx'
import Form from '../componenets/Form.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaffee-Service Berlin Peter Ganss GmbH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
        <Hero/>
        <AboutGrid/>
        <MaschineGrid/>
        <StatGrid/>
        <ServiceGrid/>
        <Form/>
      </main>

      
    </div>
  )
}
