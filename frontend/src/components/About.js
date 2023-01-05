// ***** ORIGINAL CODE ***** 

// import React from 'react'
// import "./About.css"
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';


// const About = () => {
//   return (
//     <>
    
//     <div className="aboutHeader">
//       <h1 className="typewriter">Foodi</h1>
//       <div>
//       <h4 className="infoText2">An application that allows users to search for recipes and their creators, and save them to a list of recipes</h4>
//       <h5 className='infoText2'>Created By: William, Ian and Jason</h5>
//       </div>
//     </div>
//     </>
//   )
// }

// export default About
// ***** ORIGINAL CODE ***** 



// ***** TEST CODE, WORKING ***** 

import React from 'react';
import Typewriter from "typewriter-effect";
import "./About.css"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';


const About = () => {
  return (
    <div className="aboutHeader">
      <RestaurantMenuIcon fontSize='large' />
      <h1 className='foodiTitle'>FOODI</h1>
      <h4 className='infoText2'>An application that allows users to search for recipes and their creators, and save them to a list of recipes</h4>
      <div className='infoText2'>Created By:
      <Typewriter
        onInit={(typewriter)=> {
          typewriter
            .typeString("William, Ian and Jason")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Future Software Engineers")
            .pauseFor(1000)
            .deleteAll()
            .typeString("World Leaders")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Blood and Sweat")
            .pauseFor(1000)
            .deleteAll()
            .typeString("William, Ian and Jason")
            .pauseFor(1000)
            .start();
        }}
      />
      </div>
    </div>
  );
}

export default About;