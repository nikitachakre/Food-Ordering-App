import React from "react";

const Contact = () => {

//  const handlerClick =() =>{
//   console.log("button was clicked");
//  }

  return (
    <div className="mt-20 p-4 ">
      <div className="w-full h-30 m-4 text-center p-4">
        <h1 className="text-3xl ">We would love to hear from you!</h1>
      </div>
      <div className="m-4 p-4">
        <form className="flex flex-col w-1/3 text-center m-auto ">
          <input
            type="text"
            placeholder="How can we help you?"
            required
            className="border border-gray-400 p-2 m-2 rounded-lg"
          ></input>
          <input type="text" placeholder="Full Name" className="border border-gray-400 p-2 m-2 rounded-lg"></input>
          <input type="email" placeholder="Email Address" required className="border border-gray-400 p-2 m-2 rounded-lg"></input>
          <input type="tel" placeholder="Mobile Number (optional)" className="border border-gray-400 p-2 m-2 rounded-lg"></input>
          <textarea type="text" placeholder="Your Message" required className="border border-gray-400 p-2 m-2 rounded-lg h-28 text-left"></textarea>
          <button type="submit" className="m-2 p-2 bg-orange-600 text-white w-40 h-11 rounded-md">Submit feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
