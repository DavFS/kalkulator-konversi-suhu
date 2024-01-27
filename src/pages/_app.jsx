import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="keywords" content="kalkulator, konversi, suhu, celcius, kelvin, fahrenheit, reamur, cara konversi suhu" />
        <meta name="description" content="Kalkulator konversi suhu celcius, kelvin  reamur, dan fahrenheit" />
        <title>Kalkulator Konversi Suhu</title>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}
