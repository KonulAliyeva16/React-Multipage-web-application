import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import { useParams, useNavigate } from 'react-router-dom';

function Meals() {
  
  const { mealCategories, mealsArr } = useContext(MainContext)
  const { mealsCategoryID } = useParams()
  const [selectedCategoryId, setSelectedCategoryId] = useState(mealCategories.length > 0 ? mealCategories[0].id : null);
  const navigate = useNavigate()


  useEffect(() => {
    if (mealCategories) {
      setSelectedCategoryId(parseInt(mealsCategoryID))
    }else{
      navigate('/meals/')
    }
  }, [mealsCategoryID, navigate]);


  const getCategory = (categoryId) => {
      setSelectedCategoryId(categoryId);
  };

  const [meals, setMeals] = useState([]);


  useEffect(() => {
    let filteredMeals = mealsArr.filter((food) => food.categoryID === selectedCategoryId);
    setMeals([...filteredMeals]);

  }, [selectedCategoryId, mealsArr])


  return (
    <div>
      <section className="food">
        <div className="container">
          <div className='food-category-buttons'>
            <div className="inner">
              {
                mealCategories.map(category => (
                  <button onClick={() => getCategory(category.id)} className={selectedCategoryId === category.id ? 'active' : null} 
                  key={category.id}> {category.title}
                    </button>
                ))
              }
            </div>
          </div>

          {selectedCategoryId || meals.length > 0 ? (
            <div className='row'>
              {meals.map((food) => (
                <div key={food.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="food-card">
                    <div className="food-img">
                      <img src={food.img} alt="food" />
                    </div>
                    <div className="content">
                      <h5 className='titleM'>{food.name}</h5>
                      <div className='text'>
                        <p>{food.text.length > 80 ? food.text.substr(0, 80) + ' ...' : food.text}</p>
                      </div>
                      <div className="price">
                        <span>{food.price.toFixed(2)}₼</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          ) : null}
        </div>
      </section>



    </div>
  )
}

export default Meals;
