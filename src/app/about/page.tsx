'use client'
import Image from 'next/image'
import moonlightSVG from '../../../public/moonlight.svg'
import styles from './page.module.css'
import { slide as Menu } from 'react-burger-menu'
import Button from '@mui/material/Button';
import Link from 'next/link'
import {useRouter } from 'next/navigation'
import redirect from 'nextjs-redirect'

import {
  ThemeProvider,
  createTheme,
  PaletteColor,
  SimplePaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    strongMoolight: PaletteColor;
  }

  interface PaletteOptions {
    strongMoonlight: SimplePaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    strongMoonlight: { main: "#f2f2f2" },
  },
  typography: {
    fontFamily: "'Bai Jamjuree', 'sans-serif';",
  },
});



export default function Home() {
  let router = useRouter();
  return (
  <ThemeProvider theme={theme}>
    <main className={styles.main}>
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="search" className="menu-item" href="/search">Search</a>
        <a id="submitWork" className="menu-item" href="https://forms.gle/CWoYzj4EFjZND7m4A">Submit</a>
        <a id="about" className="menu-item" href="/about">About</a>
      </Menu>
      <div className={styles.moonlight}>

        <div className={styles.topText}>
          <h2> This website is maintained by Nicholas Santos</h2>
          <h3> Please contact me at </h3>
          <a href = "mailto: n.santos2619@gmail.com">n.santos2619@gmail.com</a>
        </div>
        <Image src={moonlightSVG} alt="campfire" />
      </div>


    </main >
  </ThemeProvider>
  )
}
