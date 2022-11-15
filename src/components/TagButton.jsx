import React from 'react'
import { Box} from '@mui/material'
import '../App.css'

const TagButton = ({name,tagActive,handleSetTag}) => {
  return (
    <Box>
        <button style={{fontFamily:'Poppins'}} className={`tag ${tagActive ? 'active' : null}`} onClick={()=>handleSetTag(name)}>{name.toUpperCase()}</button>
    </Box>
  )
}

export default TagButton