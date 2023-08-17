import React from 'react'
import './Home.css'
import { useTheme } from '../../context/ThemeContext'

import Typewriter from 'typewriter-effect'
import Resume from '../../assets/docs/Ashok_Solanki_resume.pdf'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade'

const Home = () => {
  
  const [theme, setTheme] = useTheme()

   const handleTheme = () =>{
          setTheme((prevState) => (prevState==="light" ? "dark":"light"));
   }

  return (
    <>
         <div className='container-fluid home-container' id='home'>
          
           <div className='theme-btn' onClick={handleTheme}>
              {theme === "light" ? <BsFillMoonStarsFill size={30}/> : <BsFillSunFill size={30}/>} 
           </div>

          <div className='container home-content'>
                      
                      <Fade right>

                     <h2>Hi 👋 I'm a</h2>
                    <h1>
                      <Typewriter
                        options={{
                            strings:[
                              "FullStack Developer!",
                              "Mern Stack Developer!",
                               "React Developer!"
                            ],
                           autoStart: true,
                           loop: true, 
                        }}

                      />
                    </h1>
                    </Fade>
                     
                     <Fade bottom>
                    <div className='home-buttons'>
                     <a href='https://wa.me/9326031341'
                        rel='noreferrer'
                        target='_blank'
                     className='btn btn-hire'>Hire Me</a>
                     <a className='btn btn-cv' href={Resume} download="your_name.pdf">My Resume</a>

                    </div>
                    </Fade>
          </div>

         </div>
    </>
  )
}

export default Home