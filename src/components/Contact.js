import React from "react";

const Contact = () => {

//  const handlerClick =() =>{
//   console.log("button was clicked");
//  }

  return (
    <div className="mt-16 md:mt-20 p-2 md:p-4 ">
      <div className="w-full h-30 m-2  md:m-4 text-center pt-4 md:p-4">
        <h1 className="text-xl md:text-3xl ">We would love to hear from you!</h1>
      </div>
      <div className="m-1 md:m-4 pt-2 px-1 md:p-4">
        <form className="flex flex-col w-[80%] md:w-1/3 text-center m-auto ">
          <input
            type="text"
            placeholder="How can we help you?"
            required
            className="border border-gray-400 py-1 px-2 md:p-2 m-1 md:m-2 rounded-lg"
          ></input>
          <input type="text" placeholder="Full Name" className="border border-gray-400 py-1 px-2 md:p-2 m-1 md:m-2 rounded-lg"></input>
          <input type="email" placeholder="Email Address" required className="border border-gray-400 py-1 px-2 md:p-2 m-1 md:m-2 rounded-lg"></input>
          <input type="tel" placeholder="Mobile Number (optional)" className="border border-gray-400 py-1 px-2 md:p-2 m-1 md:m-2 rounded-lg"></input>
          <textarea type="text" placeholder="Your Message" required className="border border-gray-400 py-1 px-2 md:p-2 m-1 md:m-2 rounded-lg  h-20 md:h-28 text-left"></textarea>
          <button type="submit" className="m-2 p-1 md:p-2 bg-orange-600 text-white w-40  h-9 md:h-11 rounded-md">Submit feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
