import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, show, cbFunction, index}) => {

    const handleClick=()=>{
        show ? cbFunction(null) : cbFunction(index);
    }
    return(
        <div className=" w-6/12 mx-auto my-4 p-4 shadow-lg bg-green-50">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-md">{data?.title} ({data?.itemCards.length})</span>
                <span>🔽</span>
            </div>
                {show && <ItemList items={data?.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;