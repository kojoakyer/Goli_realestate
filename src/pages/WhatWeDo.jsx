import React from 'react'

import { List, ListItem, ListItemText, Typography ,Box} from '@mui/material'

const WhatWeDo = () => {
  return (
    <Box sx={{padding:{md:'50px 200px',sm:'50px 25px',xs:'50px 25px'}}}>
        <Typography sx={{fontFamily:'Poppins'}} variant='h4'>Our Services</Typography>
            <List>
              <ListItem>
                <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	LAND MARKETING AND SALES</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	PROPERTY MANAGEMENT </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	LAND ACQUISITION CONSULTANCY</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	LAND ACQUISITION CONSULTANCY</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	DESIGN AND BUILD</ListItemText>
              </ListItem>
            </List>
            <Box sx={{marginTop:'30px'}}>
                <Typography sx={{fontFamily:'Poppins'}}  variant='h5'>PROPERTY MANAGEMENT </Typography>
                <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}>Goli Properties’ management services are focused on creating and providing a great resident experience while optimizing each properties value to in an effective manner. With our efficient management solutions, we continually have a high occupancy rate in the properties we manage, delivering immense value to the owners. </Typography>
                <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}> Property management success is built on a dedication to trained and experienced professionals, delivering bespoke solutions for our clients while also accomplishing important fundamental duties efficiently at each location.  We are always looking for opportunities to grow our management arm, through new management solutions and third-party contracts</Typography>
            </Box>
            <Box sx={{marginTop:'30px'}}>
                <Typography sx={{fontFamily:'Poppins'}}  variant='h5'>LAND ACQUISITION CONSULTANCY </Typography>
                <Typography sx={{marginTop:'20px'}}> Goli Properties' consulting services is underpinned by the company's experience in the acquisition, registration and administration of residential, commercial, industrial and agricultural lands in Ghana. Our consulting service focuses on land acquisition due diligence, land surveying, drone imaging contract negotiations, registrations and other customizable consulting services</Typography>
                <Typography sx={{marginTop:'20px'}}>Companies and investors who wish to buy lands for their projects and investment activities in Ghana can benefit from our experience in guiding them through their land acquisition and registration process.</Typography>
            </Box>
            <Box sx={{marginTop:'30px'}}>
                <Typography sx={{fontFamily:'Poppins'}}  variant='h5'>OUR TAILORED CONSULTING SERVICES INCLUDE THE FOLLOWING:</Typography>
                <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}>We leverage our extensive network of professionals to offer our clients a seamless land acquisition experience. If you want to buy land in Ghana, you can contact us for the following services</Typography>
                <List>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Survey, mapping and preparation of a site plan which captures the exact coordinates of the land under consideration by our licensed surveyor.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Analyzing all available documents and conducting ownership search at the Lands Commission </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Preparation of sales and purchase agreement which outlines the legal obligations of both parties in the transaction is prepared by our legal experts.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Obtaining a duly signed deed of lease (Indenture) and going through every verification process.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	Going through the entire land title registration process at the lands commission to obtain a land certificate. </ListItemText>
                    </ListItem>
                 </List>
            </Box>

            <Box sx={{marginTop:'30px'}}>
                <Typography sx={{fontFamily:'Poppins'}}  variant='h5'>•	Going through the entire land title registration process at the lands commission to obtain a land certificate. </Typography>
                <List>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	RESIDENTIAL Lands</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	COMMERCIAL lands </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	INDUSTRIAL lands </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primaryTypographyProps={{fontFamily: 'Poppins'}}>•	AGRICULTURAL Lands</ListItemText>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{marginTop:'30px'}}>
                <Typography sx={{fontFamily:'Poppins'}}  variant='h5'>LAND SALES AND DEVELOPMENT </Typography>
                <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}>At Goli Properties, we provide genuine, litigation-free residential, commercial and industrial lands at affordable prices.</Typography>
                <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}>
                    We are proud to be a trusted partner to our cherished clients, due to our commitment to professionalism and integrity in a
                     very deceptive industry where innocent buyers are easily duped and intimidated by land guards. We understand the complex nature of the land acquisition process in Ghana,
                     and we strive to simplify these complexities for our cherished clients to purchase their dream lands without much hustle and stress.
                </Typography>
            </Box>
            <Box sx={{marginTop:'30px'}}>
                <Typography sx={{fontFamily:'Poppins'}} variant='h5'>DESIGN-BUILD</Typography>
                <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}>At Goli properties, we specialize in the design, construction and development of high quality and environmentally friendly residential and commercial structures. We leverage our extensive and solid relationship with our partners and sub contractors to seamlessly handle every phase of the construction project. </Typography>
                <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}>We incorporate our subcontractors in the design and build process because we know which subcontractors have the expertise, personnel, and principles that will best suit the project. We invite them in as early as possible in the design process to benefit from their specific expertise and experience. </Typography>
                <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}>Keeping everyone on the same page and heading in the same direction is essential for a successful project that meets its schedule and financial objectives. Relationship management and communication are key aspects we pay attention to in every project we undertake. In order to exceed the expectations of our clients and meet the high standards we set for ourselves, we create effective channels of communication between the client, architects, engineers and supervisors to ensure the project is executed on time and done according to the client’s requirements.</Typography>
            </Box>
    
    </Box>
  )
}

export default WhatWeDo