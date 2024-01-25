import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MainContext } from '../../context/MainContext';

function RestaurantDetail() {
    const { restaurantsPath } = useParams();
    const { RestaurantFilial } = useContext(MainContext);
    const navigate = useNavigate();
    const filial = RestaurantFilial.find((filial) => filial.path === restaurantsPath);
    useEffect(() => {
        if (!filial) {
            navigate('/')
        }
    }, [filial, navigate])

    return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-5">
                        <div className="">
                            <img src={filial.image} alt="filial" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                        <div className="">
                            <h1 className="">{filial.title}</h1>
                            <div className="">
                                <p>{filial.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default RestaurantDetail;