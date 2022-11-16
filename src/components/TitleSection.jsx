import React,{useState} from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const TitleSection = () => {

  const [counterOn , setCounterOn] = useState(false)
  
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    <Box sx={{width:'100%',height:'100%',margin:{md:'0px',sm:'50px 20px',xs:'50px 0px'}}}>
        <Box sx={{display:'flex',flexDirection:{md:'row',sm:'column',xs:'column'} , padding:{md:'100px 250px', sm:'50px 50px',xs:'50px 10px'}}}>
            <Box sx={{width:'400px', height:'500px',marginBottom:{md:'30px',sm:'20px',xs:'-120px'}}}>
                <Box component='img' sx={{width:{md:'400px',sm:'350px',xs:'90%'}, height:{md:'100%',sm:'70%',xs:'70%'}}} src="assets/title_img.jpg" alt="" />
            </Box>
          <Box sx={{marginLeft:{md:'30px',sm:'0px',xs:'0px'}}}>
                <Box sx={{marginBottom:{md:'30px',sm:'20px',xs:'10px'},fontFamily:'Poppins sans-serif'}}>
                    <Typography variant='h5' sx={{color:'red' ,fontFamily:'Poppins sans-serif',fontSize:{md:'30px',sm:'30px',xs:'20px'}}}>WE ARE GOLI PROPERTY & INVESTMENT LTD </Typography>
                    <Typography variant='h4' sx={{fontFamily: 'Montserrat san-serif',fontSize:{md:'30px',sm:'30px',xs:'30px'}}}>REALESTATE COMPANY</Typography>
                </Box>
                <Typography sx={{width:{md:'70%',sm:'90%',xs:'90%'},fontFamily:'Poppins sans-serif'}}>We are devoted to honest business practices, excellent client relations, and an unwavering commitment to ethical leadership. We aspire to be a top choice for investors seeking strategic real estate investments in Ghana. </Typography>
                <Box sx={{margin:'40px 0px 40px 0px'}}>
                    <List sx={{marginLeft:'-20px',fontFamily:'Poppins sans-serif'}}>
                      {Data.map((item)=>(
                        <ListItem sx={{marginBottom:'-10px'}}>
                          <ListItemAvatar>
                            <CheckBoxIcon />
                          </ListItemAvatar>
                          <ListItemText primaryTypographyProps={{fontFamily: 'Poppins san-serif'}}
                            primary={item.tile}
                            secondary={secondary ? 'Secondary text' : null}
                          />
                        </ListItem>
                      ))}
                    </List>
                </Box>   
                <Box sx={{display:'flex',marginTop:'40px'}} >
                    <Box sx={{border:'1px solid lightGray', display:'flex',justifyContent:'center',alignItems:'center',padding:'10px 15px'}}>
                        <Typography variant='h5' sx={{color:'red',fontFamily:'sans-serif'}}>
                          {counterOn && 
                           <CountUp start={0} end={1000} delay={0}/>}
                        </Typography>+
                        <Typography sx={{marginLeft:'10px',fontFamily:'Poppins, sans-serif'}}>Plots</Typography>
                    </Box> 
                    
                    <Box sx={{border:'1px solid lightGray', display:'flex',padding:'10px 15px',justifyContent:'center',alignItems:'center', marginLeft:'20px'}}>
                        <Typography variant='h5' sx={{color:'red',fontFamily:'Poppins , sans-serif'}}>
                          {counterOn &&
                           <CountUp start={0} end={500} delay={0}>
                           {({ countUpRef }) => (
                             <div>
                               <span ref={countUpRef} />
                             </div>
                           )}
                         </CountUp>
                          }
                        </Typography>+
                        <Typography sx={{marginLeft:'10px',fontFamily:'Poppins'}}>Clients</Typography>
                    </Box>      
                </Box> 
            </Box>
        </Box>
    </Box>
    </ScrollTrigger>
  )
}

export default TitleSection


const Data = [
  {
    id:1,
    tile:'In everything we do, we strive for quality and to exceed the expectations of our valued clients.'
  },
  {
    id:2,
    tile:'We maintain a strong feeling of urgency in our efforts, delivering our promises to our cherished clients at a suitable time.'
  },
  {
    id:3,
    tile:'We act with a high degree of transparency, assuming full responsibility for meeting our high standards.'
  },
  {
    id:4,
    tile:'We never lose sight of the fact that we owe everything to our clients, the efforts of every team member, and our communities.'
  },
]