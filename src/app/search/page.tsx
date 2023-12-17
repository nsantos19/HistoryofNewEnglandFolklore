'use client'
import styles from './page.module.css'
import * as React from 'react';
import masterPosts from '../../../public/masterPosts.json'
import { slide as Menu } from 'react-burger-menu'
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import ScrollToTop from "react-scroll-to-top";
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

function createCard(post:any):any{
return(
  <React.Fragment>
  <div onClick={()=>window.location.assign(post.link)} style={{cursor: "pointer"}}>
    <CardContent sx={{backgroundColor:"#424153",color:"#f2f2f2"}}>
      <Typography sx={{ fontSize: 14 ,color:"#ff6584", fontWeight:"bold"}} color="text.secondary" gutterBottom>
      {post.author}
      </Typography>
      <Typography variant="h5" component="div">
      {post.title}
      </Typography>
      <hr/>
      <Typography variant="body2">
        {post.blurb}
      </Typography>
    </CardContent>
    </div>
  </React.Fragment>);
}

    // <CardActions sx={{backgroundColor:"#424153", color:"#f2f2f2"}}>
    //   <Link className={styles.linkText} href={post.link}>Go to Project</Link>
    // </CardActions>


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
      color:'#F2F2F2'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
      color:'#F2F2F2'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
      color:'#F2F2F2'
    },
  },
});

export default function Home() { 
  const [posts,setPosts] = React.useState(masterPosts.masterPosts);

  function handleSearch(query:string):void {
    let newPosts = masterPosts.masterPosts.filter((post:any):boolean =>{
      let author = post.author.toLowerCase();
      let title = post.title.toLowerCase();
      let mainText = post.mainText.toLowerCase();
      return (author.includes(query.toLowerCase()) || title.includes(query.toLowerCase()) || mainText.includes(query.toLowerCase()));
    });
    setPosts(newPosts);
    };
  

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
    <div className={styles.moonlightAll}>
      <CssTextField
  className={styles.searchBar}
  InputProps={{className:styles.searchBarInput}}
  InputLabelProps={{
    style: { color: '#f2f2f2',alignContent:'center' },
  }}
  id="outlined-controlled"
  fullWidth
  label="Search"
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);}
    }
/>
<p></p>
  <div>
   {posts.map((post) =><div><Card variant="outlined"> {createCard(post)} </Card> <p></p></div>)}
  </div>
  </div>

  </div>
    




    </main >
  <ScrollToTop color="#ff6584"/>
  </ThemeProvider>
  )
}
