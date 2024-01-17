import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const Contact = lazy(() => import("./components/Contact"));

const AppContainer = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(null);

  useEffect(() => {
    //api call made

    const data = {
      name: "Atharva Patil",
      password: "1000000",
      email: "patharva52@gmail.com",
    };

    setUserName(data.name);
    setEmail(data.email);
    setPassword(data.password);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          loggedInUser: userName,
          password: password,
          email,
          setUserName,
          setPassword,
        }}
      >
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>LOADING CONTACTS WAIT FOR SOME SEC.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);

/*
* Header
 - LOGO
 - Navbar
* Body
 - Search-input
 - Restaurant Container
   - Restuarant Items
     - Image
     - Name of restaurant, star rating, cuisine, placename
* Footer
 - Copyright by me
 - Links
*/
