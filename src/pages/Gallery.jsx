import  React from 'react';
import Box from '@mui/material/Box';
import TagButton from '../components/TagButton';



const Gallery = () => {
  const [tag, setTag]= React.useState('all')
  const [filteredImage,setFilteredImage]= React.useState([])
 

  React.useEffect(()=>{
    tag === 'all' ? setFilteredImage(itemData) : setFilteredImage(itemData.filter((item)=> item.tag === tag))
    },[tag])
  return (

    <Box>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'100px'}}>
        <TagButton name='all' handleSetTag={setTag} tagActive={tag === 'all' ? true :false} />
        <TagButton name='Afienya' handleSetTag={setTag} tagActive={tag === 'Afienya' ? true :false}  />
        <TagButton name='Prampram' handleSetTag={setTag} tagActive={tag === 'Prampram' ? true :false} />
        <TagButton name='Shai hills' handleSetTag={setTag} tagActive={tag === 'Shai hills' ? true :false} />
      </Box>
      <Box sx={{ display: 'grid',
          gridTemplateColumns:{md:'repeat(4, 1fr)',sm:'repeat(2,1fr)',xs:'repeat(2,1fr)'},
          gap:'10px',
          margin: '10px',
          marginTop: '5%',
          marginBottom: '5%',
          padding: '10px' }}
      >
        {filteredImage.map((item) => (
        <Box sx={{width:'100%',heigth:'100%'}}>
            <img
              style={{padding:'10px',width:'100%', heigth:'40vh',objectFit:'cover'}}
              src={item.img}
              alt={item.title}
            />
        </Box>
        ))}
      </Box>
    </Box>

  )
}
  
export default Gallery


const itemData = [
  {
    img: 'assets/AFI 1.jpg',
    title: 'Breakfast',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 2.jpg',
    title: 'Burger',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 5.jpg',
    title: 'Camera',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 6.jpg',
    title: 'Camera',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 7.jpg',
    title: 'Camera',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 8.jpg',
    title: 'Camera',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 9.jpg',
    title: 'Camera',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 10.jpg',
    title: 'Camera',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 11.jpg',
    title: 'Camera',
    tag:'Afienya'
  },
  {
    img: 'assets/AFI 12.jpg',
    title: 'Camera',
    tag:'Afienya'
  },
  {
    img: 'assets/PRAM 49.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },

  {
    img: 'assets/PRAM 57.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 1.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 2.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 5.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 6.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 7.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 8.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 6.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 23.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 10.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 6.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 15.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 16.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 20.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 26.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 22.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 32.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 36.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 38.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 56.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/PRAM 58.jpeg',
    title: 'Coffee',
    tag:'Prampram'
  },
  {
    img: 'assets/SH 1.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 2.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 3.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 4.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 7.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 9.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 10.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 14.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 15.jpeg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 17.jpeg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 18.jpeg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 19.jpeg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 21.jpeg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 38.jpeg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 42.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 43.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 45.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
  {
    img: 'assets/SH 46.jpg',
    title: 'Hats',
    tag:'Shai hills'
  },
 
];
