import React from 'react'
// import { Box ,Image,Badge, Center,} from '@chakra-ui/react'
import "./MainContainer.css"
import { FcTwoSmartphones,FcCallback,FcAbout } from 'react-icons/fc';
const MainContainer = () => {
  return (
    <div className="main-container">
    <a href='/'className="box">
        <FcTwoSmartphones className='icon'
        size={80}
        />
        <FcAbout className='icon3'
        size={80}
        />
            <p>I Would like to report! </p>
         <button class="hover-border-button">REPORT!</button>
     {/* <h1>I would like to report!</h1> */}
     

    </a>
    <a href='/' className="box2" >
    <FcTwoSmartphones className='icon2'
        size={80}
        />
        <FcCallback className='icon4'
        size={80}
        />

        <p>I Would like to Call </p>
         <button class="hover-border-button"> CALL!</button>
            {/* <h1> JUST CALL!</h1> */}

    </a>
  </div>
  )
}

export default MainContainer