import { Typography,Box } from '@mui/material'
import React from 'react'

const WhoWeAre = () => {
  return (
    <Box sx={{marginTop:'100px',padding:{md:'0px 250px 50px 250px',sm:'0px 10px 50px 10px',xs:'0px 15px 50px 15px'}}}>
        <Typography variant='h5' sx={{marginBottom:'30px',fontFamily:'Poppins'}}>Who we are</Typography>
        <Typography sx={{fontFamily:'Poppins'}}>
            Goli Properties is a fully integrated, duly registered, rapidly growing Ghanaian real estate Company that 
            specializes in high-quality residential property development, construction, management, investment, and consultancy.
            We are devoted to honest business practices, excellent client relations, and an unwavering commitment to ethical leadership.
            We aspire to be a top choice for investors seeking strategic real estate investments in Ghana. 
        </Typography>
        <Typography sx={{marginTop:'20px',fontFamily:'Poppins'}}>
          At Goli Properties, we provide genuine, litigation-free residential, commercial and industrial lands at affordable prices. 
          We are proud to be a trusted partner to our cherished clients, due to our commitment to professionalism and integrity in a very deceptive
           industry where innocent buyers are easily duped and intimidated by land guards. We understand the complex nature of the land acquisition process in Ghana,
           and we strive to simplify these complexities for our cherished clients to purchase their dream lands without much hustle and stress.
        </Typography>
        <Box sx={{marginTop:'50px',fontFamily:'Poppins'}}>
          <Typography variant='h5' sx={{color:'red',fontFamily:'Poppins'}}>Mission & Vision</Typography>
          <Box sx={{display:'flex',flexDirection:{md:'row',sm:'column',xs:'column'},marginTop:'30px',fontFamily:'Poppins' }}>
            <Box sx={{flex:0.5,border:'1px solid lightGray', padding:'20px 20px'}}>
              <Typography sx={{fontFamily:'Poppins'}} variant='h6'>Vision</Typography>
              <Typography sx={{fontFamily:'Poppins'}}>Our vision is to be a well-known and a market leading real estate firm with a diverse portfolio of high-quality and genuine properties, providing the best quality of service and delivering exceptional experiences to our clients, partners and  team members.</Typography>
            </Box>
            <Box sx={{flex:0.5,border:'1px solid lightGray',padding:'20px 20px'}}>
              <Typography sx={{fontFamily:'Poppins'}} variant='h6'>Mission</Typography>
              <Typography sx={{fontFamily:'Poppins'}}>Our mission is to simplify and modernize the experience of purchasing and selling of properties, by leveraging new technologies and fostering collaboration, whilst upholding the best standards in the industry. </Typography>
            </Box>
          </Box>

        </Box>
        <Box sx={{marginTop:'50px',fontFamily:'Poppins'}}>
          <Typography variant='h5' sx={{color:'red',fontFamily:'Poppins'}}>Our Values</Typography>
          <Typography sx={{fontFamily:'Poppins'}}>Our core values define our true motivation as a firm and help to develop our team culture. We work together to live out our core beliefs and carry out our responsibilities in ways that are consistent with our mission statement. Every day, everyone at Goli Properties strives to live up to our values, which apply to all of our business activities and strategies. Our team's performance and success, we believe, is largely driven by our capacity to sustain E.T.H.I.C.A.L leadership in all that we do.</Typography>
          <Box sx={{marginTop:'30px' }}>
            {valuesData.map((item)=>(
                <Box sx={{marginTop:'20px'}}>
                <Typography sx={{fontSize:'18px', fontWeight:'bold',fontFamily:'Poppins'}}>{item.name}</Typography>
              <Typography sx={{fontFamily:'Poppins'}}>{item.desc}</Typography>
              </Box>
            ))}
          
           
          </Box>
        </Box>
    </Box>
  )
}

export default WhoWeAre

const valuesData = [ 
  {
    id:1,
    name:'EXCELLENCE',
    desc:'In everything we do, we strive for quality and to exceed the expectations of our valued clients.'
  },
  {
    id:2,
    name:'TIMELINESS',
    desc:'We maintain a strong feeling of urgency in our efforts, delivering our promises to our cherished clients at a suitable time.'
  },
  {
    id:3,
    name:'HUMILITY: ',
    desc:'We never lose sight of the fact that we owe everything to our clients, the efforts of every team member, and our communities.'
  },
  {
    id:4,
    name:'INTEGRITY',
    desc:'We uphold the highest ethical standards in all of our decisions and actions, exhibiting honesty and fairness in everything we do. We pledge to constantly act in the best interests of our clients, team and company, leading to mutual prosperity'
  },
  {
    id:5,
    name:'COMMUNICATION',
    desc:'We value our clients and we cherish the opinions of those around us, hence we seek to understand our client’s expectations and we communicate clearly in all that we do.'
  },
  {
    id:6,
    name:'ACCOUNTABILITY',
    desc:'We act with a high degree of transparency, assuming full responsibility for meeting our high standards.'
  },
  {
    id:7,
    name:'LEARNING MINDSET: ',
    desc:'We have a growth mindset, we are always pursuing new ways and embracing emerging technologies to improve the efficiency of our operations and increase client satisfaction.'
  },
]





