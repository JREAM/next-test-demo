import Head from 'next/head'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Navigation from './layout/Navigation';

export default function Layout({ children, meta }) {
  return (
    <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <Header />
    <Navigation />
      <div className='container'>
        {children}
      </div>
    <Footer />
    </>
  )
}
