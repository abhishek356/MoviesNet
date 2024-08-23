import { Box, Typography } from "@mui/material"


let Card =[{

    imageUrl:'',
    title1:'ALL IN ONE PLACE',
    title2:'The complete stream guide',
    paragraph:`Get personal recommendations for all your favorite streaming services. 
    We’ll show you where to watch movies, TV shows & sports.`
},
{
    imageUrl:'',
    title1:'ONE SEARCH',
    title2:'Every platform  in one search',
    paragraph:`Never go back-and-forth between streaming services again to see if a movie or TV show is available. 
    We’ve got you covered with one search.`
},
{
    imageUrl:'',
    title1:'ONE WATCHLIST',
    title2:'Combine all your watchlists',
    paragraph:`Create a single watchlist with every movie 
    and TV show you want to watch – covering every streaming service in one list across all your devices.`
}]

let Page2 = ()=>{



    return (<>
    
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'100vh',
        flex:'1',
        backgroundColor:'black'
    }}>
        <Typography sx={{
            color:'white'
        }}>hello</Typography>
    </Box>

{/* 
    {Card.map(card=>{
        return 
    })} */}

    </>)
}
export default Page2