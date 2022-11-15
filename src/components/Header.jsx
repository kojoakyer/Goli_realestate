import React from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';


const sectionStyle = {
  height:{md:'100vh',sm:'60vh',xs:'60vh'},
  backgroundImage:"url('assets/header_img.jpg')",
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  display:'flex',
  justifyContent:'flex-start',
  alignItems:'center'
}


const Header = () => {
  return (
    <Box style={sectionStyle}  sx={{width:'100%',height:{md:'750px',sm:'600px',xs:'600px'}, backgroundColor:'gray'}}>
      {/* <Box sx={{width:'100%',height:'',display:'flex',justifyContent:'center',alignItems:'center'}}> */}
        {/* <Button variant='contained'>Buy Homes</Button>
        <Button variant='outlined'>Rent Homes</Button> */}
        <Box sx={{margin:{md:'0px 0px  0px 200px' ,sm:'0px 30px',xs:'0px 30px'},width:{md:'30%' ,sm:'100%',xs:'100%'},height:{md:'70%',sm:'70%',xs:'70%'},backgroundColor:'black',opacity:'0.8',display:'flex', 
        flexDirection:'column',justifyContent:'center',alignItems:'flex-start',padding:{md:'20px 30px 0px 80px' ,sm:'0px 50px',xs:'0px 50px'}}}>
          <Box sx={{width:'100%',height:'50px',display:'flex', justifyContent:'flex-start',alignItems:'flex-start',borderTop:'1px solid lightBlue',marginRight:'100px'}}>
            {/* <hr style={{width:'50%'}}/> */}
          </Box>
       
          <Box sx={{marginBottom:'50px',width:{md:'60%',sm:'80%',xs:'80%'},textAlign:'left',fontFamily:'Poppins sans-serif'}}>
            <Typography variant='h5' sx={{color:'white' ,fontFamily: 'Montserrat san-serif'}}>WE HELP CREATE YOUR DREAM HOME AND MORE</Typography>
          </Box>
          <Typography variant='h6' sx={{color:'white',width:{md:'80%',sm:'100%',xs:'100%'}, fontSize:'15px',fontFamily:'Poppins sans-serif'}}>At Goli Properties, we provide genuine, litigation-free residential, commercial and industrial lands at affordable prices. </Typography>
          <Button variant='outlined' size='large' sx={{marginTop:'50px',fontSize:'15px',color:'white'}}>GET STARTED</Button> 
        {/* </Box> */}
      </Box>
    </Box>
  )
}

export default Header