import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@src/styles/Home.module.css'
import Navbar from '@src/layouts/Navbar'
import Hero from '@src/layouts/Hero'
import Profesionals from '@src/layouts/Profesionals'

import About from '@src/layouts/About'
import LatestPost from '@src/layouts/LatestPosts'
import useScrollPos from '@src/hooks/useScrollPos'
import useShowNavbar from '@src/hooks/useShowNavbar'
import BookCall from '@src/layouts/BookCall'
import Footer from '@src/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const scroll = useScrollPos();
  const showNavbar = useShowNavbar();

  return (
    <>
      <Head>
        <title>RYT Agency</title>
        <meta name="description" content="Agencia de marketing rytagency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={`sticky top-0 w-full z-30 transition duration-200  ${!showNavbar && "opacity-0"}`}>
        <Navbar/>
       
      </header>
      <main >
        <Hero />
        <Profesionals />
        <About />
        <LatestPost />
        <BookCall />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
