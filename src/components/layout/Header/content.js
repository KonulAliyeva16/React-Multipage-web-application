import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import { Link, useLocation } from 'react-router-dom';
import sectionImage from '../../../assets/image/design/white.png';
import { FaChevronRight } from "react-icons/fa";

function Content() {
    const { linkArr } = useContext(MainContext);

    const location = useLocation();
    const [contentState, setContentState] = React.useState({
        title: '',
        path: '',
    });

    const activeLink = linkArr.find((data) => data.path === location.pathname);

    React.useEffect(() => {
        if (activeLink) {
            setContentState({
                title: activeLink.label,
                path: activeLink.path,
            })
        } else {
            setContentState({
                title: '',
                path: '',
            })
        }
    }, [activeLink])

    return (
        <div class="header-content">
            <div class="container">
                <div className='content'>
                    {
                        activeLink ? (
                            <React.Fragment>
                                <div className='content-title'>{contentState.title}</div>
                                <div>
                                   { location.pathname != '/' ?
                                     (<React.Fragment>
                                        <img src={sectionImage} alt="design" />
                                     </React.Fragment>) :('')
                                   }
                                </div>
                                {
                                    location.pathname === '/' ? (
                                        <React.Fragment>
                                          <div className='btn-general active'><Link to='/about'>More</Link></div> 
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <div className='content-links'>
                                                <Link to='/'>Home Page</Link>
                                                <FaChevronRight />
                                                <Link to={contentState.path}>{contentState.title}</Link>
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                            </React.Fragment>
                        ) : ('')
                    }


                </div>
            </div>
        </div>

    )
}

export default Content;
