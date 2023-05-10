import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* footer ve navbar gibi her sayfada görülmesini istediğimiz bileşenleri tek seferde tanımlayabilmek için Layout adında component oluşturup Component elementini Layouta bir element olarak ekledik. */}
      <Component {...pageProps} />
    </Layout>
  );
}
