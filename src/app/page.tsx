'use client'
import Image from 'next/image'
import moonlightSVG from '../../public/moonlight.svg'
import styles from './page.module.css'
import { slide as Menu } from 'react-burger-menu'
import Button from '@mui/material/Button';
import Link from 'next/link'
import {useRouter } from 'next/navigation'
import redirect from 'nextjs-redirect'
import { ReactSVG } from 'react-svg'

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
        <a id="home" className="menu-item" href="/HistoryofNewEnglandFolklore">Home</a>
        <a id="search" className="menu-item" href="/HistoryofNewEnglandFolklore/search">Search</a>
        <a id="submitWork" className="menu-item" href="https://forms.gle/CWoYzj4EFjZND7m4A">Submit</a>
        <a id="about" className="menu-item" href="/HistoryofNewEnglandFolklore/about">About</a>
      </Menu>
      <div className={styles.moonlight}>

        <div className={styles.topText}>
          <h1> The History of New England Folklore </h1>

          <div className={styles.options}>
              <Button variant="contained" sx={{bgcolor:"#897b8e",color:"#f2f2f2",fontSize:"1.4em","&:hover": {
    bgcolor: "#ff6584",
  },}} onClick={()=> router.push("/search")}>Search</Button>
              <Button variant="contained" sx={{bgcolor:"#897b8e",color:"#f2f2f2",fontSize:"1.4em","&:hover": {
    bgcolor: "#ff6584",
  },}} onClick={()=>window.location.assign("https://forms.gle/CWoYzj4EFjZND7m4A")}>SUBMIT WORK</Button>
          </div>
        </div>
        <Image src={moonlightSVG} alt="campfire"/>
      </div>


    </main >
  </ThemeProvider>
  )
}
