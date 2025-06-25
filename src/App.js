import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Notfound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Cart from "./components/Cart";
import { Provider } from "react-redux"; //because we are providing redux store to our app that is why react-redux
import appStore from "./utils/appStore";
import Footer from "./components/Footer";
// import GroceryMart from "./components/GroceryMart";

const Grocery = lazy(()=> import("./components/GroceryMart"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="bg-slate-50">
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>} ><Grocery /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Notfound />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
