'use client'
import styles from './page.module.css'
import * as React from 'react';
import masterPosts from '../../../../public/masterPosts.json'
import { slide as Menu } from 'react-burger-menu'
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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




export default function Page({ params }: { params: { pid: number} }) {
  let post = masterPosts.masterPosts.filter((post:any) => post.pid == params.pid)[0]
  return (
  <ThemeProvider theme={theme}>
    <main className={styles.main}>
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="search" className="menu-item" href="/search">Search</a>
        <a id="submitWork" className="menu-item" href="/submit">Submit</a>
      </Menu>
      <div className={styles.moonlight}>
      <div className={styles.topText}>
      <h1>{post.title}</h1>
      <h2>By: {post.author}</h2>
      <hr></hr>
      </div>
      <p> {post.mainText} </p>
      <img src={imageA}></img>
      </div>
    </main >
  </ThemeProvider>
  )
}
