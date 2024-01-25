import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/header';
import Home from './components/pages/Home';
import About from './components/pages/About/about';
import Restaurants from './components/pages/Restaurants/restaurants';
import Meals from './components/pages/Meals/meals';
import Gallery from './components/pages/gallery';
import Menu from './components/pages/menu';
import Comments from './components/pages/Comment/comments';
import Contact from './components/pages/contact';
import Layout from './components/pages/layout';
import RestaurantDetail from './components/pages/Restaurants/RestaurantDetail';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import './style.css'
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="App">
     <Router>
        <Header/>
        <Layout/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/restaurants/:restaurantsPath' element={<RestaurantDetail />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/meals/:mealsCategoryID' element={<Meals />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
