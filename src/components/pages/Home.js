import React from 'react'
import Restaurants from './Restaurants/restaurants';
import AboutSection from './About/aboutSection';
import Whyus from './About/whyUs';
import MealsMain from './Meals/mealsMain';
import Partners from './partners';
import Blogs from './blogs';
import Gallery from './gallery';
import CommentHome from './Comment/commentHome';
import SectionTitle from './Title/sectionTitle';


function Main() {
  return (
    <div>
      <AboutSection/>
      <Whyus/>
      <Restaurants/>
      <MealsMain/>
      <Partners/>
      <Blogs/>
      <Gallery/>
      <SectionTitle title='Customer Reviews' />
      <CommentHome/>
    </div>
  )
}

export default Main;
