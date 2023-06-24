import Head from "next/head";
import Image from "next/image";
import { Inter, Lato } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";

const lato = Lato({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aviral Portfolio</title>
        <meta
          name="description"
          content="Aviral Srivastava Portfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${lato.className}`}>
        <Navbar />
        <Main /> 
        <Footer />
      </main>
    </>
  );
}
