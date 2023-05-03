import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique modi
        recusandae id veniam fugiat! Explicabo doloribus ab commodi incidunt
        enim ipsam animi dolorum aperiam consequuntur?
      </p>
      <Link href="/ninjas">See Ninja Listing</Link>
      <Footer />
    </div>
  );
}
