import React from 'react'
import Navbar  from '../components/navbar.jsx'
import HeroSection  from '../components/HeroSection.jsx'
import CoursesSection from '../components/coursesSection.jsx'
import Users from '../components/users.jsx'
import Footer from '../components/footer.jsx'

const LandingPage = () => {
  return(
    <div>
      <div dir='rtl' className=''>
        <Navbar/>
        <HeroSection/>
        <CoursesSection/>
        <Users/>
        <Footer/>
        {/* <Welcome/>
        <Whyus/>
        <Departments/>
        <Courses/>
        <Question/>
        */}
      </div>
    </div>
  );
}


export default LandingPage