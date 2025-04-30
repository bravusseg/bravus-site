import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Join from '../components/Join';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bravus Seguros</title>
        <meta name="description" content="Corretora de seguros digital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="font-inter pt-20">
        <Hero />
        <About />
        <Products />
        <Join />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
