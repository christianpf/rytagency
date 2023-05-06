import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import moduleStyles from '@src/styles/Navbar.module.css'

const Navlink = ({url, text, mobile}) => {

  const router = useRouter();

  const defaultStyleDesktop = "text-cyan-400 px-2 bg-black p-1 rounded-md"
  const activeStyleDesktop = "text-white p-1 px-2 bg-primary rounded-md"
  const styleDesktop = `${router.asPath === url ? activeStyleDesktop : defaultStyleDesktop}`

  const defaultStyleMobile = "text-xl text-text px-2 bg-white p-3  hover:bg-primary hover:text-white border-b-2"
  const activeStyleMobile = "text-xl text-white px-2 p-3 bg-cyan-400 font-bold"
  const styleMobile = `${router.asPath === url ? activeStyleMobile : defaultStyleMobile}`

  return (
    <Link href={url} className={`${mobile ? styleMobile : styleDesktop} ${!mobile && moduleStyles.navlink}`}>
      {text}
    </Link>
  )
}

export default Navlink