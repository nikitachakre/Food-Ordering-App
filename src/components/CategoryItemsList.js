import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const CategoryItemsList = ({ items }) => {
  //   console.log(items);

const dispatch = useDispatch();

const handleAddItem = (item) =>{
  dispatch(addItems(item));
  console.log(item);
}
  return (
    <div>
      {items.map((item) => (
        <div className="m-2 p-2 border-b-2 text-left" key={item.card.info.id}>
          <div className="flex justify-between">
            <div className="w-9/12">
              <p className="text-lg font-bold text-gray-700">
                {item.card.info.name}
              </p>
              <p className="font-bold">₹{item.card.info.price / 100}</p>
              <p className="text-sm my-2">{item.card.info.description}</p>
            </div>
            <div className="text-center w-3/12">
              <div className="relative">
                <button  onClick={()=>handleAddItem(item)} className="bg-orange-600 text-white text-sm font-semibold h-8 w-16 px-2 rounded-lg absolute top-[90px] left-10">
                  ADD+
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-36 h-32 rounded-xl"
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemsList;
