import CDN_LINK from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{ 
        dispatch(addItem(item));
    }

    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="m-2 py-2  border-gray-300 border-b-2 text-left flex">
                    <div className="w-9/12">
                        <div className="py-2">
                            <h1>{item?.card?.info?.name}</h1>
                            <h1>₹ {item?.card?.info?.price / 100}</h1>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4" >
                        <img src={CDN_LINK + item?.card?.info?.imageId} alt="Image not found" />
                        <div className="absolute">
                            <button className="px-1 bg-white shadow-lg rounded-lg" onClick={()=>handleAddItem(item)}>Add +</button>
                        </div>
                    </div>
                </div> 
            ))}
        </div>
    )
}

export default ItemList;