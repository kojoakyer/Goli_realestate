
import React from 'react'
import { Typography,Box } from '@mui/material'

const ChairmansMessage = () => {
  return (
    <div>
        <Box sx={{marginTop:'100px',padding:{md:'0px 250px 50px 250px',sm:'0px 10px 50px 10px',xs:'0px 15px 50px 15px'}}}>
            <Typography variant='h5'>MANAGING DIRECTORS’S WELCOME MESSAGE </Typography>
            <Typography variant='h5' sx={{color:'red',fontFamily:'Poppins'}}>DEAR CHERISHED PARTNER</Typography>
            <Typography variant='h6' sx={{marginTop:'15px',fontSize:'18px',fontFamily:'Poppins'}}>
            It is my pleasure to extend a warm welcome to you.  Thank you for visiting our website, we appreciate
            your interest in our organization and hope our portal offers you the opportunity to discover more about our company.
            </Typography>
            <Typography sx={{marginTop:'10px',fontFamily:'Poppins'}}>
            At Goli Properties & Investment Ltd, we are committed to providing our clients with world-class service and market-leading 
            knowledge and expertise. We strive to provide professional services to clients and consumers in order to ensure that transactions are completed to everyone's satisfaction.
            </Typography>
            <Typography sx={{marginTop:'10px',fontFamily:'Poppins'}}>
            We are passionate about contributing to the reduction of Ghana’s housing deficit by providing quality,
             affordable and environmentally friendly properties to people from diverse socio-economic backgrounds.
            </Typography>
            <Typography sx={{marginTop:'15px',fontFamily:'Poppins'}}>
            Our Vision is to become one of the best in the industry, with a focus on superior customer service, professionalism, 
            integrity and leveraging the most advanced technologies and innovations 
            to increase the efficiency of our operations and deliver amazing value to our clients.
            </Typography>
            <Typography sx={{marginTop:'10px',fontFamily:'Poppins'}}>
            On behalf of the entire team at Goli Properties & Investment Ltd, I sincerely want to thank you our cherished customers, 
            shareholders and partners for your continuing support towards the growth and success of this organization.
             We count on your support to continue our journey of becoming a market leading Real Estate Company. 
            </Typography>
            <Typography sx={{marginTop:'10px',fontFamily:'Poppins'}}>
            Thank you for taking the time to explore our website, to learn more about us and what we do.  If you have any questions,
             feedback or concerns, kindly contact us through our details provided on this website, and we would gladly assist you.
            </Typography>
            <Typography sx={{marginTop:'15px',fontFamily:'Poppins'}}>
              We look forward to hearing from you and working with you. 
            </Typography>
            <Typography sx={{marginTop:'10px',fontFamily:'Poppins'}}>
            I wish you the very best. God bless us all	
            </Typography>
        </Box>
    </div>
  )
}

export default ChairmansMessage