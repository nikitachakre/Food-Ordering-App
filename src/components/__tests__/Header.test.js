import { fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom";



it("Should render header component with a login button", () => {
  render(
    <BrowserRouter> // will read the Link componnent which is coming from react-router
      <Provider store={appStore}> // will be able to read the redux which we use in Header component
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbutton = screen.getByRole("button");
  expect(loginbutton).toBeInTheDocument();
});

it("Should render header component with a cart with 0 items", () => {
  render(
    <BrowserRouter> // will read the Link componnent which is coming from react-router
      <Provider store={appStore}> // will be able to read the redux which we use in Header component
        <Header />
      </Provider>
    </BrowserRouter>
  );
//   const cartItems = screen.getByText(/Cart/); //can also write like this just to be flexible
  const cartItems = screen.getByText("Cart(0)");
  expect(cartItems).toBeInTheDocument();
});

it("Should change the login button to Logout button on click", () => {
  render(
    <BrowserRouter> // will read the Link componnent which is coming from react-router
      <Provider store={appStore}> // will be able to read the redux which we use in Header component
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const Loginbutton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(Loginbutton);
  const Logoutbutton = screen.getByRole("button", {name: "Logout"});
  expect(Logoutbutton).toBeInTheDocument();
});
