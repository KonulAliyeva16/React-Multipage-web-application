import { createContext } from 'react';
import { swiperImage } from './swiperImageData';
import { RestaurantFilial } from './restaurantFilialData';
import { mealCategories } from './mealsData';
import { mealsArr } from './mealsData';
import { partnerArr} from './partnersData';
import { blogArr } from './blogData';
import { galleryArr} from './galleryData';
import { commentArr } from './commentData';
import { menuData } from './menuData';
import { linkArr } from './linksData';
export const MainContext = createContext();


const MainContextProvider = ({children}) =>{
    return(

        <MainContext.Provider value={{swiperImage,RestaurantFilial,mealCategories,mealsArr,partnerArr,blogArr,galleryArr,commentArr,menuData,linkArr}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;