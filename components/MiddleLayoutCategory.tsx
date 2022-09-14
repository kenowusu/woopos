import {v4 as uuid} from 'uuid';
import {useContext, useEffect, useState} from 'react';

import { CategorySkeleton } from './skeleton/CategorySkeleton';
import FoodIconSvg from '../public/icons/food.svg';
import api from './wc/config';
import { FoodContext } from './contexts/foodContext';
import { CategoryFoodsContainer } from './containers/CategoryFoodsContainer';
import { FoodCategory } from './FoodCategory';






export const MiddleLayoutCategory = ()=>{
    
    const {setFoods} = useContext(FoodContext)  
  

 return(
    <FoodCategory/>
 )
}


