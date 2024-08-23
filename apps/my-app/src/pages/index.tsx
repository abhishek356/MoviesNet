"use client"

import { Box,AppBar,Typography,Button, Container } from "@mui/material"
//import '../styles/Home.module.css'
import '../styles/Home.module.css'
import Navbar from "./components/navbar"
import ConsentForm from "./components/consentForm"
import Page2 from './components/page2'
//page 1

let ottImages=['./icon-appletv.webp','./icon-appletvplus.webp','./icon-appletvseasonpas.webp',
  './icon-crunchyroll.webp','./icon-google play.webp','./icon-hotstar.webp','./icon-jiocinema.webp',
'./icon-Netflix.webp','./icon-primevideo.webp','./icon-sonyliv.webp','./icon-youtube.webp',
'./icon-zee5.webp','./mubi.webp']

let HomePage = ()=>{

  return (<>
  <Box sx={{
    backgroundColor:'#11181f',
    width:'100vw',
    height:'100vh ',
    border:'none',
    boxShadow:'none',
    
  }}>
  <Box id ='homePage' sx={{
  width:'100%',
  height:'100%  ',
  // background:'rgb(17,24,31)',
   backgroundBlendMode: 'darken',
   backgroundPosition:'center',
   backgroundSize:'cover',
   backgroundImage: 'linear-gradient(to bottom , rgb(84, 88, 93,0), rgb(0, 0, 0,0.9)), url(./wallpaper.jpg)', // Apply the gradient first
    overflow:'hidden',
   display:'flex',
  //  backdropFilter:'blur(5px)',
   outlineColor:'black',
   zIndex:-2,
   boxShadow:'-10x -10px 100px yellow',
   boxSizing:'none',
  filter:'blur(10px) brightness(2)',  //  backgroundAttachment:'fixed',
   pointerEvents:'none',
}}>

<Box sx={{
  // backgroundAttachment:'fixed',
          position: 'absolute',
          top: 0,
          left: 0,
          // backgroundSize:'cover',
          // backgroundPosition:'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust opacity as needed
          zIndex: -1, // Ensure the overlay is behind other content but above the blurred image
          pointerEvents:'none',
          // overflow:'hidden'
          boxSizing:'none',
          backdropFilter:'blur(5px)',
          // borderColor:'black',
          boxShadow:'-10x -10px 10px black',

  }} />


  {/* <img src='./wallpaper.jpg' alt='image'style={{
    height:'100vh',
    width:'100vw',
    backgroundBlendMode: 'darken',

backgroundColor:'rgba(0,0,0,0.6)',
 backgroundImage:'url(./wallpaper.jpg), linear-gradient(to bottom right, transparent, #2a2438)',
backgroundSize:'cover',
  }}/> */}
</Box>
<Navbar/>
<Typography variant =  'h1' sx={{
  position:'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  color:'rgb(255,255,255)',
  fontFamily:'Lato Regular',
  fontSize:'60px',
  fontWeight:'900',
  lineHeight:'70px',
  fontStyle:'normal',
  letterSpacing:'1px',
  wordSpacing:'2px',
  textAlign:'center'
}}>Your streaming guide for movies, TV shows & sports</Typography>

<Typography sx = {{
  position:'absolute',
  top:'67%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  textAlign:'center',
  color:'rgb(153,156,159)',
  fontFamily:'Lato Regular',
  fontWeight:'400',
  fontSize:'20px',
  lineHeight:'30px'
}}>Find where to stream new, popular & upcoming entertainment with MoviesNet.</Typography>


<Box id='homePage-discover-features-button' sx={{
  position:'absolute',
  top:'80%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  display:'flex',
  flexDirection:'row',
  gap:'29px',
  alignItems:'center',
  justifyContent:'center',
  textTransform:'none'
}}>

<Button variant='contained' size = 'large' sx={{
  width:'283px',
  height:'55px',
  textTransform:'none',
  fontFamily:'Lato Regular',
  fontWeight:'700',
  fontSize:'16px',
  lineHeight:'23px',
  color:'rgb(0,0,0)',
  backgroundColor:'#fbc500',
  '&:hover':{
    backgroundColor:'#c3940d'
  }

}}>Discover  Movies & TV shows</Button>

<Button variant='outlined' size = 'large' sx={{
  width:'142px',
  height:'53px',
  textTransform:'none',
  fontFamily:'Lato Regular',
  fontWeight:'700',
  fontSize:'16px',
  lineHeight:'23px',
  color:'rgb(153, 156, 159)',
  borderColor:'rgb(153,156,159)',

  '&:hover':{
    backgroundColor:'rgb(210, 223, 228,0.1)',
    borderColor:'rgb(153,156,159)',

  }
}}>Features</Button>



</Box >

<Box sx={{
  display:'flex',
  flexDirection:'column',
  width:'100vw',
  height:'60vh',
  backgroundColor:'rgb(12, 2, 0)',
  justifyContent:'center',
  alignItems:'flex-start',
  gap:'10px'
}}>

<Typography variant = 'h6' sx={{
  backgroundColor:'black',
  position:'absolute',
  top:'110%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  fontFamily:'Lato Regular',
  color:"rgb(101,113,130)",
  fontWidth:'400',
  fontSize:'17px',
  lineHeight:'26px'
}}>Streaming services on MoviesNet</Typography>

<Box sx={{
    position:'absolute',
    transform:'translate(-50%,-50%)',
    left:'50%',
    display:'flex',
    flexDirection:'row',
    backgroundColor:'black',
    marginTop:'-170px',
   justifyContent:'center',
   alignItems:'center',
   rowGap:'20px'
  }}>
    {ottImages.map(image=>{
      return (<>
      <img src={image} width='auto' height='50px'style={{
        margin:'0 10px',
        borderRadius:'12px'
      }}/>
      </>)
    })}
  </Box>

</Box>


<Page2/>

<ConsentForm/>
  </Box>


  </>)
}

export default HomePage