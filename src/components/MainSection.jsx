import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react'
import { Link } from 'react-router-dom';

const MainSection = () => {
  return (
    <Box sx={{marginTop:{md:'150px',sm:'100px',xs:'100px'},padding:'10px 120px'}}>
        <Grid container rowSpacing={{xs:5,sm:5,md:3}} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
            {itemData.map((item)=>{
                return(
                    <Grid item xs={12} sm={12} md={4} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:'20px'}}>
                        <Box sx={{width:'350px',height:'200px'}}>
                            <img style={{width:'100%',height:'100%'}} src={item.img} alt="" />
                        </Box>
                        <Typography variant='h5' sx={{fontSize:'20px',marginTop:'20px',fontFamily: 'Montserrat san-serif'}}>{item.desc}</Typography>
                        <Box sx={{width:{md:'100%',sm:'600px',xs:'300px'}}}>
                          <Typography sx={{width:{md:'100%',sm:'100%',xs:'100%'}, textAlign:'center',padding:{md:'15px 50px',sm:'15px 0px',xs:'15px 0px'},fontSize:'15px',fontFamily: 'Poppins san-serif'}}>{item.title}</Typography>
                        </Box>
                        <Link style={{textDecoration:'none'}} to={item.to}>
                          <Button variant='contained' sx={{borderRadius:'20px',padding:{md:'10px 25px',sm:'10px 25px',xs:'5px 25px'},fontFamily: 'Montserrat san-serif'}}>{item.tag}</Button>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}

export default MainSection


const itemData = [
    {
      img: 'assets/AFI 2.jpg',
      title: 'Goli Properties & Investment Ltd. consulting services is underpinned by the company s experience in the... ',
      desc:'How to Buy a Land',
      tag:'Buy a Land',
      to:'/how-to-buy'
    },
    {
      img: 'assets/payment.png',
      title: 'At GOLI Properties & Investment Ltd. we understand every client has a unique financial situation, hence...',
      desc:'Our Payment Plan',
      tag:'Payment Plan',
      to:'/payment-method'
    },
    {
      img: 'assets/team.jpg',
      title: 'Enjoy the flexibility of buying a Goli Properties with payment installments designed just for you',
      desc:'Join Our Team',
      tag:'Our Team',
      to:'/teams'
    },
    {
      img: 'assets/request.jpg',
      title: 'Enjoy the flexibility of buying a Goli Properties with  payment installments designed just for you',
      desc:'Make A Request',
      tag:'Request Info',
      to:'/info-request'
    },
    {
      img: 'assets/info.jpg',
      title: 'Buy a Serviced Plot in our community, with all the essential infrastructure already in place & build your own dream home',
      desc:'Get More Info',
      tag:'Find Out More',
      to:''
    },
    {
      img: 'assets/question.jpg',
      title: 'Enjoy the flexibility of buying a Goli Properties with payment installments designed just for you',
      desc:'Have Any Question?',
      tag:'Make Enquires',
      to:''
    }
  ];
  