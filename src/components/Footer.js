import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="mx-1 my-2 md:m-10 p-4 md:p-10">
      <div className="flex items-center justify-center gap-2 mb-8 md:mb-20">
        <div className="border-t-2 border-orange-500 w-16 md:w-24"></div>
        <h1 className="text-lg md:text-4xl text-gray-700 font-bold p-1">
          Get in touch with us
        </h1>
        <div className="border-t-2 border-orange-500 w-16 md:w-24"></div>
      </div>
      <div className="m-1 md:m-4 p-1 md:p-2 border-t-2 border-gray-200">
        <h1 className="mt-2 md:mt-10 text-sm md:text-xl font-semibold text-gray-700 my-2 p1-2 ">
          Head Office Address:
        </h1>
        <p className=" text-gray-600 text-sm md:text-base">FoodHub Limited</p>
        <p className=" text-gray-600 text-sm md:text-base">
          No. 134 Sector-C Block-Ground Floor, Embassy Tech Village
          |Annapurana Road, Indore-452009
        </p>
      </div>
      <div className="mx-1 md:m-4 px-1 md:p-2">
        <h1 className="text-sm md:text-lg font-semibold text-gray-700  md:py-1">For help and support:</h1>
        <Link to="/contact" className="text-gray-600 text-sm md:text-base">Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;
