import Head from "next/head";

import Navbar from "./navbar";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
  return (
    <>
      <Head>
        <title>Aviral Projects</title>
        <meta
          name="description"
          content="Aviral Srivastava Portfolio projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <h1>Hello</h1>
        <Footer />
      </main>
    </>
  );
};

export default Projects;
