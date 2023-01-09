import React from 'react';
import Typewriter from "typewriter-effect";
import "./CSS/About.css"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const About = () => {
  return (

    <div className="aboutHeader">
      <RestaurantMenuIcon fontSize='large' />
      <h1 className='foodiTitle'>Foodi.</h1>
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