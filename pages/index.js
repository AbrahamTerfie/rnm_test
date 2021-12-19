import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Homepage from "./Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Homepage />
    </div>
  );
}
