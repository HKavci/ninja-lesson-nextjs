import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique modi
        recusandae id veniam fugiat! Explicabo doloribus ab commodi incidunt
        enim ipsam animi dolorum aperiam consequuntur?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique modi
        recusandae id veniam fugiat! Explicabo doloribus ab commodi incidunt
        enim ipsam animi dolorum aperiam consequuntur?
      </p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
  );
}
