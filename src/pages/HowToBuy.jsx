import { List, ListItem, ListItemText, Typography ,Box} from '@mui/material'
import React from 'react'
import TittleHeader from '../components/TitleHeader'

const HowToBuy = () => {
      // Function will execute on click of button
      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Application-Form.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Application-Form.pdf';
                alink.click();
            })
        })
    }
  return (
    <div>
        <TittleHeader title='Land Purchase Application form' btnTitle='DownLoad Form' onClick={onButtonClick}/>
        <Box sx={{padding:{md:'50px 200px',sm:'50px 15px',xs:'50px 15px'}}}>
            <Typography variant='h4' sx={{color:'#81d4fa',marginTop:'50px',fontFamily:'Poppins'}}>How To Buy</Typography>
            <List sx={{marginLeft:'-10px',color:'black',fontSize:'12px'}}>
                <ListItem sx={{marginBottom:'20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>1.	Obtain  an application form to purchase a property
                      <List>
                        <ListItem>
                          <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Pick your form at our office</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Download form online (our website)</ListItemText>
                        </ListItem>

                        <ListItem>
                          <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Request via email</ListItemText>
                        </ListItem>

                        <ListItem>
                          <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Request via whatsapp</ListItemText>
                        </ListItem>

                      </List>
                    </ListItemText>
                </ListItem>
                <ListItem sx={{marginBottom:'20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>2.	Book a site visit to view the property you want to purchase</ListItemText>
                </ListItem>
                <ListItem sx={{marginBottom:'20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>3.
                      Complete the application form with all relevant information, and return a signed copy 
                      Kindly be informed that for this application to be valid, all sections of this form must be filled with the requested information.
                       If any necessary information is missing, the application will be incomplete and will not be processed.
                     </ListItemText>
                </ListItem>
                <ListItem sx={{marginBottom:'20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>4.	After successfully submitting the application forms, a Sales and purchase agreement will be provided.</ListItemText>
                </ListItem>
                <ListItem sx={{marginBottom:'20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>5.	Make Payment 
                      We offer outright payments 
                      6 months installment with an initial deposit of 30% of the total sales price
                    </ListItemText>
                </ListItem>
                <ListItem sx={{marginBottom:'20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>6.	After the initial deposit, plot will be allocated </ListItemText>
                </ListItem>
                <ListItem sx={{marginBottom:'20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>7.	The Deed of lease (indenture) will be provided after payment is fully completed.</ListItemText>
                </ListItem>
            </List>
        </Box>
    </div>
  )
}

export default HowToBuy