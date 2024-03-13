import React from 'react'
import './About.css'
import about_img from '../../assets/yt.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT THE COLLEGE</h3>
            <h2>Poojya Doddappa Appa College of Engineering</h2>
            <p>The Hyderabad Karnataka Education (HKE) society founded by Late Shri Mahadevappa Rampure, a great visionary and educationist.The HKE Society runs 46 educational institutions. Poojya Doddappa Appa College of Engineering, Gulbarga is the first institution established by the society in 1958.</p>
            <p>The college is celebrated its golden jubilee year, setting new standards in the field of education and achieving greater heights. The college campus is spread over 71 acres of land on either side of Mumbai-Chennai railway track and has a sprawling complex with gardens and greenery all around.</p>
            <p>The National Board of Accreditation, New Delhi, has accredited the College in the year 2005-08 for 09 UG Courses out of which 08 courses are accredited for three years and 01 course is accredited for five years. And second time accridited for Six Course in the year 2009-2012. Again, now, five departments namely, E and IE, IPE,CCT, Automobile Engg and ISE departments have been accrideted for three years from academic years, 2019-20 to 2021-22. Also, Civil, Mechanical, EEE,ECE and CSE departments have also applied for NBA accreditation.</p>
        </div>
      
    </div>
  )
}

export default About
