import { AppBar,Typography, Button, Box } from "@mui/material"

let ConsentForm =  ()=>{

    return (<>
    <AppBar sx={{
        backgroundColor:'#060d15',
        position:'fixed',
        top:'97%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width:'99%',
        height:'50px',
        padding:'20px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:'12px'
    }}>
            <Typography variant={'h6'} sx={{
                fontFamily:'Lato Regular',
                fontWeight:'400',
                fontSize:'11px',
                lineHeight:'16px',
                textAlign:'center'
            }}>Under the new EU law on data protection, we inform you that we save your history of pages you visited on JustWatch. With that data, we may show you trailers on external social media and video platforms.

</Typography>

<Box sx={{
    gap:'12px'
}}>
<Button size = 'small' variant = 'contained' sx = {{
    backgroundColor:'#fcc500',
    color:'rgb(0,0,0)',
    fontFamily:'Lato Regular',
    fontWeight:'700',
    fontSize:'13px',
    lineHeight:'19px',
    textTransform:'none',
    width:'105px',
    height:'26px',

    '&:hover':{
        
            backgroundColor:'#c3940d'
          
    }
}}>I agree</Button>
<Button variant='contained' size = 'small' sx={{
    textTransform:'none',
    fontFamily:'Lato Regular',
    color:'rgb(76,90,103)',
    size:'13px',
    lineHeight:'19px',
    fontWeight:'700',
    backgroundColor:'rgb(5,12,22)',
    '&:hover':{
        backgroundColor:'rgb(27, 28, 30)'
    }
}}>more info</Button>
</Box>

    </AppBar>
    </>)
}

export default ConsentForm