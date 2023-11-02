import { useEffect, useState } from "react";
import {MENU_API} from './constants';

const useRestaurantMenu=(resId)=>{
    const [restaurantItems, setRestaurantItems]=useState(null);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        setRestaurantItems(json.data);
    };

    return restaurantItems;
};

export default useRestaurantMenu;