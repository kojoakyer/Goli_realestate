
import React from 'react'
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';


const sectionStyle = {
    // maxWidth: 400, 
    // flexGrow: 1,
    paddingTop:'100px',
    height:'500px',
    backgroundImage:"url('assets/avi.jpg')",
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'center'
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const cards = [
    {
      id: "1",
      cname: "At Goli Properties, we provide genuine, litigation-free residential, commercial and industrial lands at affordable prices.",
      title: "RESIDENTIAL",
    },
    {
      id: "2",
      cname: "At Goli Properties, we provide genuine, litigation-free residential, commercial and industrial lands at affordable prices.",
      title: "COMMERCIAL",
    },
    {
      id: "3",
      cname: " At Goli Properties, we provide genuine, litigation-free residential, commercial and industrial lands at affordable prices.",
      title: "AGRICULTURAL",
    }
  ];

const HeroSection = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = cards.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  return (
    <Box style={sectionStyle}>
        <Box sx={{paddingBottom:'50px'}}>
            <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
         
            >
                 {cards.map((step, index) => (
          <div  key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
                  <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',backgroundColor:'#000000',opacity:'0.9',
                  color:'white',alignItems:'center',width:{md:'30%',sm:'50%',xs:'90%'}, border:'1px solid gray',padding:'40px 30px',marginLeft:{md:'35%',sm:'10%',xs:'5%'},marginBottom:'50px'}}>
                  <LandscapeIcon sx={{padding:'0px 0px 10px 0px'}}/>
                  <Typography variant='h5' sx={{color:'#0069c0',fontWeight:'bold',fontFamily:'Poppins sans-serif'}}>{step.title}</Typography>
                  <Typography sx={{textAlign:'center',fontSize:'15px',padding:'10px 0px',fontFamily:'Poppins sans-serif'}}>{step.cname}</Typography>
              </Box>
            //   <Box
            //     component="img"
            //     sx={{
            //       height: 255,
            //       display: 'block',
            //       maxWidth: 400,
            //       overflow: 'hidden',
            //       width: '100%',
            //     }}
            //     src={step.imgPath}
            //     alt={step.label}
            //   />
            ) : null}
          </div>
        ))}
                {/* {cards.map((item)=>{
                    return(
                    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',backgroundColor:'#000000',opacity:'0.9',
                        color:'white',alignItems:'center',width:'250px', border:'1px solid gray',padding:'40px 30px'}}>
                        <LandscapeIcon sx={{padding:'0px 0px 10px 0px'}}/>
                        <Typography variant='h5' sx={{color:'#0069c0',fontWeight:'bold',fontFamily:'Poppins sans-serif'}}>{item.title}</Typography>
                        <Typography sx={{textAlign:'center',fontSize:'15px',padding:'10px 0px',fontFamily:'Poppins sans-serif'}}>{item.cname}</Typography>
                    </Box>
                    )
                })}
              */}
            </AutoPlaySwipeableViews>
            <MobileStepper
            sx={{display:{md:'none',sm:'none',xs:'-ms-flexbox'}}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />

        </Box>
    </Box>
  )
}

export default HeroSection