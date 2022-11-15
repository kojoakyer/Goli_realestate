import React,{ useEffect }  from 'react'
import { useLocation } from "react-router";

const ScrowToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <>{props.children}</>
  )
}

export default ScrowToTop