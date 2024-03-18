import React from 'react'
import cssImage from '../Pages/images/CSS.png';
import blog from '../Pages/images/blob vector.png'
import html from '../Pages/images/HTML.png'
import express from '../Pages/images/Express.png'
import git from '../Pages/images/Git.svg'
import github from '../Pages/images/Github.svg'
import JavaScript from '../Pages/images/Javascript.svg'
import mongodb from '../Pages/images/MongoDB.svg'
import nodejs from '../Pages/images/NodeJs.svg'
import react from '../Pages/images/React.png'
import redux from '../Pages/images/Redux.svg'
import tailwind from '../Pages/images/Tailwind.png'
import typescript from '../Pages/images/Typescript.svg'
import vercel from '../Pages/images/Vercel.svg'
import './Skills.css'
import { css } from '@chakra-ui/react';

const Skills = () => {
    return (
        <section class="skillContainer" id="skills">

      <div class="leftSkillContainer">
        <h2 class="skillHeading"><span>M</span>e and <br />MyTech Stack</h2>
        <div class="skillSubHeading">
          <p>
            Hi My name is Nilesh Kumar I am a Full Stack Web
            Developer Done a Bootcamp From iNueron in Full Stack Web Devlopment Bootcamp Under ther guidance in Hitesh Chaudhary Sir . The duration of this Bootcamp is 6 Months.
          </p>
         
        </div>
      </div>

      <div class="rightSkillContainer">
      <img src={blog} className="blobStyle blobFade" alt="" />


        <img src={html} alt="" class="skillsLogo" />
        <img src={cssImage} alt="" class="skillsLogo" />
        <img src={express} alt="" class="skillsLogo" />
        <img src={git} alt="" class="skillsLogo" />
        <img src={github} alt="" class="skillsLogo" />
        <img src={JavaScript} alt="" class="skillsLogo" />
        <img src={nodejs} alt="" class="skillsLogo" />
        <img src={mongodb} alt="" class="skillsLogo" />
        <img src={react}alt="" class="skillsLogo" />
        <img src={redux} alt="" class="skillsLogo" />
        <img src={tailwind} alt="" class="skillsLogo" />
        <img src={typescript}class="skillsLogo" />
        <img src={vercel} alt="" class="skillsLogo" />
       
        
      </div>
    </section>
    )
}

export default Skills