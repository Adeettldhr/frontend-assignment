"use client";
if (typeof window === "undefined") {
  const { JSDOM } = require("jsdom");
  const { window } = new JSDOM("");
  global.document = window.document;
  global.window = window;
}

import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";

import ProductDetailsPage from "./pages/ProductDetailsPage";
import SearchPage from "./pages/SearchPage";
import Products from "./UI/Products";
import Contact from "./UI/Contact";
import About from "./UI/About";
import Cart from "./pages/Cart";



const page = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/product-details/:productId"
            element={<ProductDetailsPage />}
          ></Route>
          <Route path="/search-page" element={<SearchPage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default page;
