"use client"

import { AppBar,Typography,Box, Container, Button } from "@mui/material"
import '../../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react"

let Navbar = ()=>{

    let [isClicked,setIsClicked] = useState <boolean>(false)

    let handleClick=()=>{
        prompt('button clicked')
    }

    return (<>
        <AppBar position='fixed' sx={{
            padding:'0px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            // backgroundColor:'#060d17',
            height:'8%',
            backgroundColor:'rgba(0,0,0,0)',
            boxShadow:'none',
            marginTop:'30px'
        }}>
            <Box sx={{
                width:'45%',
                display:'flex',
                marginLeft:'30px'
            }}>
            <Typography variant = 'h1' sx={{
            fontWeight:'400',
            fontSize:'35px',
            color:'#e2bf5a',
         //   border:'1px solid black'

        }}>MoviesNet</Typography>

<Button disableRipple sx={{
                    color:'#929598',
                    fontWeight:'400',
                    fontSize:'14px',
                    textTransform:'none',
                    lineHeight:'20px',
                    '&:hover':{
                        color:'#d2dfe4',
                        fontWeight:'700'
                    },
                    '&:active':{
                        color:'#d2dfe4',
                        backgrounColor:'red'
                    }
                }}>New</Button>

<Button
disableRipple
sx={{
                    color:'#929598',
                    fontWeight:'400',
                    fontSize:'14px',
                    textTransform:'none',
                    lineHeight:'20px',
                    '&:hover':{
                        color:'#d2dfe4',
                        fontWeight:'700'
                    },
                    '&:active':{
                        color:'#d2dfe4',
                        backgrounColor:'red'
                    }
                }}>Popular</Button>


<Button 
disableRipple
sx={{
                    color:'#929598',
                    fontWeight:'400',
                    fontSize:'14px',
                    textTransform:'none',
                    lineHeight:'20px',
                    '&:hover':{
                        color:'#d2dfe4',
                        fontWeight:'700'
                    },
                    '&:active':{
                        color:'#d2dfe4',
                        backgrounColor:'red'
                    }
                }}>Lists</Button>

<Button 
disableRipple
sx={{
                    color:'#929598',
                    fontWeight:'400',
                    fontSize:'14px',
                    textTransform:'none',
                    lineHeight:'20px',
                    '&:hover':{
                        color:'#d2dfe4',
                        fontWeight:'700'
                    },
                    '&:active':{
                        color:'#d2dfe4',
                        backgrounColor:'red'
                    }
                }}>Sports</Button>

<Button 
disableRipple
sx={{
                    color:'#929598',
                    fontWeight:'400',
                    fontSize:'14px',
                    textTransform:'none',
                    lineHeight:'20px',
                    '&:hover':{
                        color:'#d2dfe4',
                        fontWeight:'700'
                    },
                    '&:active':{
                        color:'#d2dfe4',
                        backgrounColor:'red'
                    }
                }}>Guide</Button>


            </Box>

            <Box sx={{
              //  backgroundColor:'yellow',
                width:'55%',
                height:'80%',
                border:'1px solid black',
                display:'flex',
                alignItems:'center',
                gap:'4',
                backgroundColor:'#11181f',
                margin:'0 40px'


            }}>
                <SearchIcon sx={{
                    color:'white',
                     margin:'0 10px',
                     backgroundColor:'#black',

                   
                }}/>
                <input type = 'text' placeholder ='Search for movies  or TV shows' style={{
                    width:'80%',
                    // marginLeft:'20px',
                    fontSize:'14px',
                    height:'100%',
                    fontFamily:'Lato Regular',
                     backgroundColor:'#11181f',
                    // backgroundColor:'red',
                    border:'none',
                    color:'white',
                    boxSizing:'border-box',
                    textTransform:'none',
                    outline:'none'

                }}/>
             
            </Box>
            <Button variant="contained" size='small' sx={{
                    color:'#d2dfe4',
                    height:'80%',
                    width:'6%',
                    textTransform:'none',
                    marginRight:'15px',
                    fontSize:'14px',
                    fontWeight:'400',
                    backgroundColor:'#11181f',
                    padding:'-2px',

                    '&:hover':{
                        backgroundColor:'#54585d'
                    }
                }}>Sign In</Button>
           </AppBar>
   
    </>)
}

export default Navbar