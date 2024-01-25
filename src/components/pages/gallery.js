import React, { useContext, useEffect, useState, } from 'react';
import { MainContext } from '../context/MainContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Fancybox } from "@fancyapps/ui";
import { FaSearch, FaPlay } from "react-icons/fa";
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

function Gallery() {
  const { galleryArr } = useContext(MainContext);
  const [activeCategory, setActiveCategory] = useState('photo');

  const navigate = useNavigate();
  const { galleryCategory } = useParams();

  useEffect(() => {
    if (galleryCategory) {
      navigate('/gallery')
      setActiveCategory(galleryCategory)
    }
  }, [galleryCategory, navigate])


  const changeGalery = (value) => {
    setActiveCategory(value)
  }

  const [selectedGalery, setSelectedGalery] = useState([]);

  useEffect(() => {
    const filteredGalery = galleryArr.filter((item) => item.category === activeCategory);
    setSelectedGalery([...filteredGalery])
  }, [activeCategory, galleryArr])



  return (
    <div>
      <div className="container">
        <div className="gallery-buttons">
          <button onClick={() => changeGalery('photo')} className={activeCategory === 'photo' ? 'active' : ''}> Photos </button>
          <button onClick={() => changeGalery('video')} className={activeCategory === 'video' ? 'active' : ''}> Videos</button>
        </div>
      </div>

      <div className='container'>
        {
          selectedGalery.length > 0 ? (
            <div className='gallery-container row'>
              {
                selectedGalery.map((item) => (
                  <div key={item.id} className="menu-card col-12 col-md-6 col-lg-4 col-xxl-3">
                    <div className="gallery-card">
                      <img src={item.cover} alt="gallery-img" />
                      <a href={item.link} data-fancybox >
                        <div>
                          {activeCategory === 'photo' ?
                            (<React.Fragment>
                              <FaSearch />
                            </React.Fragment>) : (
                              <React.Fragment>
                                <FaPlay />
                              </React.Fragment>
                            )
                          }
                        </div>
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
          ) : null
        }
      </div>

    </div>
  )
}

export default Gallery;


