import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";



 let styledButton = styled(Button)({

                     color:'#929598',
                    fontWeight:'400',
                    fontSize:'14px',
                    textTransform:'none',
                    lineHeight:'20px',
                    '&:hover':{
                        color:'#d2dfe4',
                        fontWeight:'1500'
                    },

});

export default styledButton