import React  from 'react'

import { ArrowDownward } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'


const Faq = () => {
    const [click,setClick]= React.useState(false)
    const [id,setId]= React.useState(0)

    // const handleClick = (itemId)=>{
    //  itemId ? setClick(true) : setClick(false)
    // }

    React.useEffect(()=>{
    if(id){
        setClick(true)
    }else{
        setClick(false)
    }
    },[id])

  return (
    <Box sx={{marginTop:'100px',padding:{md:'0px 250px 50px 250px',sm:'0px 10px 50px 10px',xs:'0px 15px 50px 15px'}}}>
        <Typography sx={{fontFamily:'Poppins'}}>FAQ'S</Typography>
        <Box>
        {FaqsData.map((item, index)=>(
            <Box sx={{marginBottom:'20px'}} key={item.id} onClick={()=>setId(item.id)} >
                <Box  sx={{display:'flex' , cursor:'pointer', padding:'10px 10px',
                justifyContent:'space-between',alignItems:'center', backgroundColor:'lightGray'}}>
                    <Typography sx={{fontFamily:'Montserrat'}}>{item.question}</Typography>
                    <ArrowDownward />
                </Box>
                {click && ( <Typography sx={{fontFamily:'Poppins'}}>{item.answer}</Typography>)}
            </Box>
        ))}
        </Box>
        
    </Box>
  )
}

export default Faq


const FaqsData = [
    {
        id:1,
        question:'1.	What should Goli Properties & Investment Ltd.  disclose to a potential client prior to purchase? ',
        answer:'Every relevant information regarding the property under consideration must be disclosed.'
    },
    {
        id:2,

        question:'2.	What is the average land lease period in Ghana? ',
        answer:`The most common practice in Ghana is a 99 year lease period for Ghanaians, although it can be less depending on the location and the agreement between the two parties.
        The Maximum lease period a non-Ghanaian can have is 50 years.`
    },
    {
        id:3,
        question:'3.	Which methods of payment do you accept? ',
        answer:`We have very diverse methods of payments, but we do not accept cash payment. We do however accept
        •	Payment by via bank transfer
        •	Payment via cheque
        •	Payment via online and digital platforms
        `
    },
    {
        id:4,
        question:'4.	What is the right time to buy land from Goli Properties & Investment Ltd ',
        answer:'The right time is today.  Don’t miss this wonderful opportunity.'
    },
    {
        id:5,
        question:'5.	What payment Terms do you offer   ',
        answer:`Depending on the Location and size we offer
        •	Outright Payment 
        •	6 months and 12 months with an initial deposit
        We seek to understand each client’s financial capabilities then we develop a suitable payment plan.
        `
    },
    {
        id:6,
        question:'6.	What are your plot sizes',
        answer:` •	70X100 for 1 plot
        •	    35 x100 
        •   	OR 70 X 50 sqft for a half plot
        We do sometimes have special plots which does not fall within these range
        `
    },
    {
        id:7,
        question:'7.	What is your schedule for site  ',
        answer:'We usually schedule site visits base on our client’s preference. We are usually available for site visits from Monday to Saturday, however we do organize mass site visitation occasionally to certain sites.'
    },
]