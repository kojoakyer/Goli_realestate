import { List, ListItem, ListItemText, Typography ,Box} from '@mui/material'
import React from 'react'
import TittleHeader from '../components/TitleHeader'

const PaymentMethod = () => {
  return (
    <div>
        <TittleHeader title='Explore our Payments methods' btnTitle='Explore'/>
      
        <Box sx={{padding:{md:'50px 200px',sm:'50px 15px',xs:'50px 15px'} }}>
            <Typography sx={{fontFamily:'Poppins'}} variant='h6'>
              At GOLI Properties & Investment Ltd. we understand every client has a unique financial situation,
              hence we have diverse payment plans for clients of different economic backgrounds. Our team will work with
              you to develop a flexible financial payment plan which suits your budget.
            </Typography>
            <Typography variant='h5' sx={{color:'#81d4fa',marginTop:'50px',fontFamily:'Poppins'}}>We Offer</Typography>
            <List sx={{marginLeft:'-10px',color:'black',fontSize:'12px'}}>
                <ListItem sx={{marginBottom:'-20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Outright payment (payment completed within 3 months )</ListItemText>
                </ListItem>
                <ListItem sx={{marginBottom:'-20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Six months installment -  initial deposit of up to 25% of the total sales price then remaining amount is spread across 6 months</ListItemText>
                </ListItem>
                <ListItem sx={{marginBottom:'-20px'}}>
                    <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	12 months installment only for cooperate institutions or groups   - initial deposit of up to 25% of the total sales price then remaining amount is spread across 12 months </ListItemText>
                </ListItem>
            </List>
        </Box>
    </div>
  )
}

export default PaymentMethod