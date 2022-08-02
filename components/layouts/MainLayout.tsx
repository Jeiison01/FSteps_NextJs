import { PropsWithChildren } from "react";

import Head from "next/head";
import NavBar from "../NavBar";

import styles from "./MainLayout.module.css";


const MainLayout= ({children}: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Next Yeison App</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>


      <main className={styles.main}>
      {children}
      </main>
    </div>
  )
}

export default MainLayout