import React, { useEffect } from 'react';
import sectionTitleDesign from '../../../assets/image/design/rotate.png';
import { useLocation } from 'react-router-dom';


function SectionTitle({title}) {
  const location = useLocation();
  return (
      <div>
        {
          location.pathname === '/' ? (
            <React.Fragment>
              <div className='section-title'>
              <h1>{title}</h1>
              <img src={sectionTitleDesign} alt="design" />
              </div>
            </React.Fragment>
          ) : ('')
        }
      </div>
  )
}

export default SectionTitle;
