import React,{useContext,useEffect, useState} from 'react';
import { MainContext } from '../context/MainContext';
import { FaSearch } from "react-icons/fa";


function Menu() {

  const {menuData} = useContext(MainContext);

  const [activeMenu, setActiveMenu] = useState('restoran')

  const [selectedMenu, setSelectedMenu] = useState([]);

  const changeMenu = (value) => {
    setActiveMenu(value)
}
  useEffect(()=>{
    let filteredMenu = menuData.filter((item)=> item.category === activeMenu);
    setSelectedMenu([...filteredMenu])
  },[activeMenu,menuData])



  return (
    <div>
       <div className="container">
        <div className="menu-buttons">
          <button onClick={() => changeMenu('restoran')} className={activeMenu === 'restoran' ? 'active' : ''}> Restaurant </button>
          <button onClick={() => changeMenu('delivery')} className={activeMenu === 'delivery' ? 'active' : ''}> Delivery</button>
        </div>
      </div>

      <div className='container'>
     <div className='menu'>
     {
          selectedMenu.length > 0 ? (
            <div className='row'>
              {
                selectedMenu.map((item) => (
                  <div key={item.id} className="cards col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                      <a href={item.link} data-fancybox className='menu-fancy'>
                      <img src={item.cover} alt="" />
                        <div className='menu-btn'>
                        <FaSearch/>
                        </div>
                      </a>
                    </div>
                ))
              }
            </div>
          ) : null
        }
     </div>
      </div>

    </div>
  )
}

export default Menu;
