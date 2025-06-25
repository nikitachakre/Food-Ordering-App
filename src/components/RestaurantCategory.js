import { useState } from "react";
import CategoryItemsList from "./CategoryItemsList";

const RestaurantCategory =({data,showItems,setShowIndex}) =>{

    // console.log(data);

 const handleClick =() =>{
    // setShowItems(!showItems);
    setShowIndex();
 }
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 text-center p-4  bg-gray-50 shadow-lg ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <CategoryItemsList items={data.itemCards}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;