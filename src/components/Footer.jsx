import React from 'react'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <Box sx={{width:'100%',marginTop:{md:'160px',sm:'150px',xs:'100px'},paddingTop:'50px',borderTop:'1px solid lightGray',backgroundColor:'#fafafa'}}>
        <Box sx={{display:'flex',flexDirection:{md:'row',sm:'column',xs:'column'} ,justifyContent:'space-between',margin:{md:'0px 200px 0px 200px',sm:'0px 0px',xs:'0px 0px 0px 40px'}}}>
            <Box sx={{width:{md:'60%',sm:'100%',xs:'100%'},display:'flex', justifyContent:'space-between'}}>
                <Box sx={{width:'100%',fontFamily: 'Montserrat san-serif'}}>
                    <Typography variant='h5' sx={{color:'#000063',fontFamily: 'Montserrat san-serif'}}>About Us</Typography>
                    <Typography sx={{color:'black',fontSize:'15px',width:'90%',marginTop:'20px',fontFamily: 'Montserrat sans-serif'}}>Goli Properties is a fully integrated, duly registered, rapidly growing Ghanaian real estate Company that specializes in high-quality residential property development, construction, management, investment, and consultancy. </Typography>
                    <Typography   component="div" variant='h5' sx={{width:{md:'100%',sm:'100%',xs:'100%'},height:{md:'',sm:'',xs:'80%'}}}>
                        <img style={{width:'60%', height:'70px',color:'white',marginTop:'20px'}} src="assets/GOLI_LOGO.png" alt="" />
                    </Typography>
                </Box>
                <Box sx={{width:'100%'}}>
                    <Typography variant='h5' sx={{color:'#000063',fontFamily: 'Montserrat san-serif'}}>Contact Info</Typography>
                    <List sx={{marginLeft:'-10px',color:'black',fontSize:'12px'}}>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>LOCATION: 1st Floor of Friends Plaza, Tema community 22</ListItemText>
                        </ListItem>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>CONTACT: +233 0550511341 /+233 0500110032</ListItemText>
                        </ListItem>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>EMAIL: info@goliproperties.com</ListItemText>
                        </ListItem>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>DIGITAL ADDRESS : GB-0325125 </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box sx={{width:{md:'40%',sm:'100%',xs:'100%'},display:'flex',justifyContent:'space-between'}}>
                <Box sx={{color:'black',width:'100%'}}>
                    <Typography variant='h5' sx={{color:'#000063',fontFamily: 'Montserrat san-serif'}}>Service</Typography>
                    <List primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}} sx={{marginLeft:'-10px',color:'black'}}>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>Selling of Lands</ListItemText>
                        </ListItem>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>Homes</ListItemText>
                        </ListItem>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>Apartments</ListItemText>
                        </ListItem>
            
                    </List>
                </Box>
                <Box sx={{color:'black',width:'100%'}}>
                    <Typography variant='h5' sx={{color:'#000063',fontFamily: 'Montserrat san-serif'}}>FAQ</Typography>
                    <List sx={{marginLeft:'-10px',color:'black'}}>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText  primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>How do I buy</ListItemText>
                        </ListItem>
                        <ListItem sx={{marginBottom:'-20px',fontFamily: 'Montserrat san-serif'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>Payment method</ListItemText>
                        </ListItem>
                        <ListItem sx={{marginBottom:'-20px'}}>
                            <ListItemText primaryTypographyProps={{fontFamily: 'Montserrat san-serif'}}>Locations available</ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:{md:'row',sm:'column',xs:'column'},justifyContent:'space-between',margin:{md:'100px  200px 0px 200px',sm:'100px 20px 50px 30px',xs:'100px 20px 0px 50px'},
                    borderTop:'1px solid #e0e0e0',padding:'10px 0px 40px 0px',color:'black'}}>
            <Typography sx={{color:'#000063',fontFamily: 'Montserrat san-serif'}}>Copyright ©2022 All rights reserved | GOLI Propperties & Investments Ltd</Typography>
            <Box sx={{display:'flex',justifyContent:{md:'space-between',sm:'center',xs:'center'},cursor:'pointer'}}>
                <Link to='/'>
                    <FacebookIcon/>
                </Link>
                <Link to='/'>
                    <TwitterIcon/>
                </Link>
                <Link to='/'>
                <   InstagramIcon/>
                </Link>
                <Link to='/'>
                    <YouTubeIcon/>
                </Link>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer