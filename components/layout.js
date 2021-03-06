import { useCallback, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Mailer from "./mailer";

export default function Layout({
  children,
  title = "Analyser les flux de données dans l'insertion",
  handleFile,
}) {
  const defaultColor = "white";
  const [color, setColor] = useState(defaultColor);

  const handleDrag = color =>
    useCallback(event => {
      setColor(color);
      event.preventDefault(); // Prevent file from being open on drop
    });

  const handleDrop = useCallback(event => {
    event.preventDefault();
    setColor(defaultColor);
    for (var i = 0; i < event.dataTransfer.files.length; i++) {
      handleFile(event.dataTransfer.files[i]);
    }
  });

  return (
    <div
      style={{ backgroundColor: color }}
      onDragOver={handleDrag("#0070f3")}
      onDragLeave={handleDrag(defaultColor)}
      onDrop={handleDrop}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Link href="/">
          <a>
            <h3>data.insertion</h3>
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a>Accueil</a>
          </Link>{" "}
          |{" "}
          <Link href="/mentions-legales">
            <a>Mentions légales</a>
          </Link>{" "}
          | <Mailer>Contact</Mailer>
        </nav>
      </header>

      {children}

      <footer className={styles.footer}>
        <Mailer>Propulsé par data.insertion</Mailer>
      </footer>
    </div>
  );
}
