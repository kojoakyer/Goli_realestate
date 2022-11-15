import React from 'react'
import { Button, Typography ,Box} from '@mui/material';


const sectionStyle = {
  height:'50vh',
  backgroundImage:"url('assets/header_img.jpg')",
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
}

const TittleHeader = ({title,btnTitle,onClick}) => {
  

  return (
    <Box style={sectionStyle}>
        <Typography sx={{fontFamily:'Poppins',fontWeight:'500',fontSize:{md:'3rem',sm:'2rem',xs:'2rem'},textAlign:'center'}} variant='h4'>{title}</Typography>
        <Box sx={{marginTop:'20px'}}> 
            <Button variant='outlined' sx={{fontWeight:'bold',fontFamily:'Poppins',color:'blue',border:'1px solid white'}}>About Us</Button>
            <Button variant='contained' onClick={onClick} sx={{marginLeft:'10px',fontFamily:'Poppins'}}>{btnTitle}</Button>
        </Box>

    </Box>
  )
}

export default TittleHeader