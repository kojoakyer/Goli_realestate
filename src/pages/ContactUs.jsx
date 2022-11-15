import { ListItem, Typography,List,Box, ListItemText } from '@mui/material'
import React from 'react'
import Map from '../components/Map'
import TittleHeader from '../components/TitleHeader'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import DomainIcon from '@mui/icons-material/Domain';

const ContactUs = () => {
  return (
    <div>
        <TittleHeader title='GOLI Properties and Investment Limited' btnTitle='contact us'/>
        <Box sx={{marginTop:'100px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Typography sx={{fontFamily:'Poppins'}} variant='h5'>Make Enquiries</Typography>
            <List> 
                <ListItem>
                  <AddIcCallIcon />
                  <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}} sx={{marginLeft:'10px'}}>   CONTACT: +233 0550511341 /+233 0500110032</ListItemText>
               </ListItem>
                <ListItem>
                  <EmailIcon/>
                  <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}} sx={{marginLeft:'10px'}}>   EMAIL: info@goliproperties.com</ListItemText>
                  </ListItem>
                <ListItem>
                  <DomainIcon/>
                  <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}} sx={{marginLeft:'10px'}}>     WEBSITE: goliproperties.com</ListItemText>
                </ListItem>
                <ListItem>
                  <AddLocationIcon/>
                  <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}} sx={{marginLeft:'10px'}}>  DIGITAL ADDRESS : GB-0325125 </ListItemText>
                  </ListItem>
                <ListItem>
                  <AddLocationIcon/>
                  <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}} sx={{marginLeft:'10px'}}>    OFFICE LOCATION: 1st Floor of Friends Plaza, Tema community 22</ListItemText>
                </ListItem>
            </List>
        </Box>
        <div style={{padding:'50px 50px'}}>
            <Typography sx={{fontFamily:'Poppins'}}>Our Location</Typography>
            <Map/>
        </div>

    </div>
  )
}

export default ContactUs
